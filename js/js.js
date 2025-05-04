window.addEventListener('load', function() { 
    var instance = new Accessibility();
    document.getElementById('incrementar-texto').onclick = () => instance.menuInterface.increaseText();
    document.getElementById('decrementar-texto').onclick = () => instance.menuInterface.decreaseText();

    document.getElementById('invertir-colores').onclick = () => instance.menuInterface.invertColors();
    document.getElementById('todo-gris').onclick = () => instance.menuInterface.grayHues();

    document.getElementById('cursor-grande').onclick = () => instance.menuInterface.bigCursor();
    document.getElementById('regla').onclick = () => instance.menuInterface.readingGuide();
}, false);