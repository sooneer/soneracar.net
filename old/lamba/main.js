(function() {
    var lambaSayisi = 24;

    var resetLamba = function() {
        var lstPatlayan = SNR.Element('.patladi');
        if (lstPatlayan.length == lambaSayisi) {
            for (let i = 0; i < lstPatlayan.length; i++) {
                lstPatlayan[i].classList.remove("patladi");
            }
        }
    };

    var checkLamba = function(event) {
        console.log('checkLamba', event);
        var patlamaSesi = new Audio('assets/lamb.mp3');

        if (this.classList.contains('patladi')) {
            patlamaSesi.play();
            this.classList.remove('patladi');
            return;
        }

        patlamaSesi.play();
        this.classList.add("patladi");

       // resetLamba();
    };

    //SNR.Event('.lamba', 'click', checkLamba);

    SNR.Event('.lamba', 'touchstart', checkLamba);

    SNR.Event('body', 'touchmove', function(event) {
        if (event.scale !== 1) {
            event.preventDefault();
        }
    });


 


})();