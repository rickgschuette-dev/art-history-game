(function () {
  var identity = null;
  var inviteToken = null;

  window.teacherAuth = {
    ready: import('https://cdn.jsdelivr.net/npm/@netlify/identity@2.0.0/+esm')
      .then(function (api) {
        identity = api;
        return api.handleAuthCallback().catch(function () { return null; }).then(function (result) {
          if (result && result.type === 'invite' && result.token) inviteToken = result.token;
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
    signOut: function () {
      return window.teacherAuth.ready.then(function (api) {
        return api ? api.logout() : null;
      });
    }
  };
}());
