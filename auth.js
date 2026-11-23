(function () {
  var identity = null;
  var inviteToken = null;
  var passwordRecoveryActive = false;

  window.teacherAuth = {
    ready: import('https://cdn.jsdelivr.net/npm/@netlify/identity@2.0.0/+esm')
      .then(function (api) {
        identity = api;
        return api.handleAuthCallback().catch(function () { return null; }).then(function (result) {
          if (result && result.type === 'invite' && result.token) inviteToken = result.token;
          // Netlify signs the user in when it processes a recovery link.  There
          // is no second token for the page to collect; record the active
          // recovery session so the app can present the new-password form.
          if (result && result.type === 'recovery') passwordRecoveryActive = true;
          // Identity email links normally arrive at the site root.  Send invite
          // and recovery visitors to the protected Teacher Review route.
          if (result && (result.type === 'invite' || result.type === 'recovery') && location.hash.indexOf('#/teacher') !== 0) {
            location.hash = '#/teacher';
          }
          return api;
        });
      })
      .catch(function (error) {
        console.warn('Teacher sign-in is unavailable.', error);
        return null;
      }),
    currentUser: function () {
      return window.teacherAuth.ready.then(function (api) {
        return api ? api.getUser() : null;
      });
    },
    signIn: function (email, password) {
      return window.teacherAuth.ready.then(function (api) {
        if (!api) throw new Error('Teacher sign-in is not available yet.');
        return api.login(email, password);
      });
    },
    inviteToken: function () {
      return window.teacherAuth.ready.then(function () { return inviteToken; });
    },
    acceptInvite: function (password) {
      return window.teacherAuth.ready.then(function (api) {
        if (!api || !inviteToken) throw new Error('This teacher invitation is no longer available.');
        return api.acceptInvite(inviteToken, password).then(function (user) {
          inviteToken = null;
          return user;
        });
      });
    },
    passwordRecoveryActive: function () {
      return window.teacherAuth.ready.then(function () { return passwordRecoveryActive; });
    },
    requestPasswordRecovery: function (email) {
      return window.teacherAuth.ready.then(function (api) {
        if (!api) throw new Error('Teacher sign-in is not available yet.');
        return api.requestPasswordRecovery(email);
      });
    },
    resetPassword: function (password) {
      return window.teacherAuth.ready.then(function (api) {
        if (!api || !passwordRecoveryActive) throw new Error('This password-reset link is no longer available.');
        return api.updateUser({ password: password }).then(function (user) {
          passwordRecoveryActive = false;
          return user;
        });
      });
    },
    signOut: function () {
      return window.teacherAuth.ready.then(function (api) {
        return api ? api.logout() : null;
      });
    }
  };
}());
