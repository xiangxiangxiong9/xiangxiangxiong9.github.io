history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
history.pushState('forward', null, document.URL);
window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
        location.reload();
    }
})
window.addEventListener('popstate', function(e) {
    history.pushState(null, null, document.URL);
})