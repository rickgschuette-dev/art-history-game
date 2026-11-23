(function () {
  var identity = null;
  var inviteToken = null;
  // Capture the recovery token before the router gets a chance to interpret
  // the URL fragment.  It remains only in memory and is consumed once when a
  // teacher saves a new password.
  var passwordRecoveryToken = new URLSearchParams(location.hash.substring(1)).get('recovery_token');
  if (passwordRecoveryToken) {
    history.replaceState(null, '', location.pathname + location.search);
    location.hash = '#/teacher';
  }

  window.teacherAuth = {
    ready: import('https://cdn.jsdelivr.net/npm/@netlify/identity@2.0.0/+esm')
      .then(function (api) {
        identity = api;
        if (passwordRecoveryToken) {
          return api;
        }
        return api.handleAuthCallback().catch(function () { return null; }).then(function (result) {
          if (result && result.type === 'invite' && result.token) inviteToken = result.token;
          // Identity email links normally arrive at the site root. Send invite
          // visitors to the protected Teacher Review route.
          if (result && result.type === 'invite' && location.hash.indexOf('#/teacher') !== 0) {
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
    passwordRecoveryToken: function () {
      return window.teacherAuth.ready.then(function () { return passwordRecoveryToken; });
    },
    requestPasswordRecovery: function (email) {
      return window.teacherAuth.ready.then(function (api) {
        if (!api) throw new Error('Teacher sign-in is not available yet.');
        return api.requestPasswordRecovery(email);
      });
    },
    resetPassword: function (password) {
      return window.teacherAuth.ready.then(function (api) {
        if (!api || !passwordRecoveryToken) throw new Error('This password-reset link is no longer available.');
        return api.recoverPassword(passwordRecoveryToken, password).then(function (user) {
          passwordRecoveryToken = null;
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
