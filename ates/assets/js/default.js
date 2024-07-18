var removeClass = function(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].classList.remove(className);
    }
};

var playMp3 = function(element, mp3) {
    if (document.getElementById("mp3_src").src.includes(mp3)) {
        removeClass('stop');
        document.getElementById("mp3_src").src = '';
        document.getElementById("mySound").load();
        return;
    }
    removeClass('stop');
    element.classList.add("stop");
    document.getElementById("mp3_src").src = 'assets/mp3/' + mp3;
    document.getElementById("mySound").load();
};