(function() {
    var balonSayisi = 24;
    var checkBalon = function() {
        var audio = new Audio('assets/balon.wav');
        audio.play();
        this.classList.add("patladi");

        var lstPatlayan = SNR.Element('.patladi');
        if (lstPatlayan.length == balonSayisi) {
            for (let i = 0; i < lstPatlayan.length; i++) {
                lstPatlayan[i].classList.remove("patladi");
            }
        }
    };

    SNR.Event('.balon', 'click', checkBalon);

    SNR.Event('.balon', 'focus', checkBalon);

    SNR.Event('.balon', 'touchstart', checkBalon);

    document.addEventListener('touchmove', function(event) {
        if (event.scale !== 1) {
            event.preventDefault();
        }
    }, false);

})();