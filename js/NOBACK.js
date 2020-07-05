history.pushState(null, null, document.URL);
window.addEventListener('popstate', function(e) {
    history.pushState(null, null, document.URL);
})