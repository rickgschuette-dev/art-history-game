(function () {
  function request(path, options) {
    return fetch(path, Object.assign({ credentials: 'same-origin' }, options || {})).then(function (response) {
      return response.json().catch(function () { return {}; }).then(function (data) {
        return { response: response, data: data };
      });
    });
  }

  window.teacherAuth = {
    session: function () {
      return request('/.netlify/functions/teacher-session');
    },
    signIn: function (code) {
      return request('/.netlify/functions/teacher-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code })
      }).then(function (result) {
        if (!result.response.ok) throw new Error(result.data.error || 'The access code could not be verified.');
        return result.data;
      });
    },
    signOut: function () {
      return request('/.netlify/functions/teacher-access', { method: 'DELETE' });
    }
  };
}());
