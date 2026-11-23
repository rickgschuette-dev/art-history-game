(function () {
  var identity = null;

  window.teacherAuth = {
    ready: import('https://cdn.jsdelivr.net/npm/@netlify/identity@2.0.0/+esm')
      .then(function (api) {
        identity = api;
        return api.handleAuthCallback().catch(function () { return null; }).then(function () { return api; });
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
    signOut: function () {
      return window.teacherAuth.ready.then(function (api) {
        return api ? api.logout() : null;
      });
    }
  };
}());
