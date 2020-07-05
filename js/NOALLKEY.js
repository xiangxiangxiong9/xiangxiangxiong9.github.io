function FF() {
    location.reload(true)
}

function click(e) {
    if (document.all) {
        if (event.button == 2 || event.button == 3) {
            alert("awa");
            oncontextmenu = 'return false'
        }
    }
    if (document.layers) {
        if (e.which == 3) {
            oncontextmenu = 'return false'
        }
    }
}
if (document.layers) {
    FF();
    document.captureEvents(Event.MOUSEDOWN)
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;");
document.onkeydown = document.onkeyup = document.onkeypress = function() {
    if (window.event.keyCode == 123 || window.event.keyCode == 16 || window.event.keyCode == 17 || window.event.keyCode == 65 || window.event.keyCode == 66 || window.event.keyCode == 67 || window.event.keyCode == 68 || window.event.keyCode == 69 || window.event.keyCode == 70 || window.event.keyCode == 71 || window.event.keyCode == 72 || window.event.keyCode == 73 || window.event.keyCode == 74 || window.event.keyCode == 75 || window.event.keyCode == 76 || window.event.keyCode == 77 || window.event.keyCode == 78 || window.event.keyCode == 79 || window.event.keyCode == 80 || window.event.keyCode == 81 || window.event.keyCode == 82 || window.event.keyCode == 83 || window.event.keyCode == 84 || window.event.keyCode == 85 || window.event.keyCode == 86 || window.event.keyCode == 87 || window.event.keyCode == 88 || window.event.keyCode == 89 || window.event.keyCode == 90 || window.event.keyCode == 91) {
        FF();
        window.event.returnValue = false;
        return (false)
    }
}