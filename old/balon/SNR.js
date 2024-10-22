var SNR = {
    Element: function(selector) {
        if (document.getElementById(selector) == null) {

            var _lstTmp = document.querySelectorAll(selector);
            if (_lstTmp.length > 1) {
                return _lstTmp;
            }

            if (document.querySelector(selector) == null) {
                console.log(selector, ' element bulunamadı');
                return null;
            }
            return document.querySelector(selector);
        }

        return document.getElementById(selector);
    },
    Event: function(selector, name, func) {
        var tags = this.Element(selector);
        if (tags.length > 0) {
            for (var i = 0; i < tags.length; i++) {
                tags[i].addEventListener(name, func);
            }
            return;
        }

        return this.Element(selector).addEventListener(name, func);

    },
    Text: function(id, value) {
        this.Element(id).innerText = value;
    },
    Html: function(id, value) {
        this.Element(id).innerHTML = value;
    },
    Bind: function() {

        var elements = document.querySelectorAll('[s-model]');
        window.scope = {};

        elements.forEach(function(element) {


            function addScopeProp(prop) {
                if (!scope.hasOwnProperty(prop)) {
                    var value;
                    Object.defineProperty(scope, prop, {
                        set: function(newValue) {
                            value = newValue;
                            elements.forEach(function(element) {
                                //change value to binded elements
                                if (element.getAttribute('s-model') === prop) {
                                    if (element.type && (element.type === 'text' ||
                                            element.type === 'textarea')) {
                                        element.value = newValue;
                                    } else if (!element.type) {
                                        element.innerHTML = newValue;
                                    }
                                }
                            });
                        },
                        get: function() {
                            return value;
                        },
                        enumerable: true
                    });
                }
            }


            if (element.type === 'text' || element.type === 'textarea') {
                var propToBind = element.getAttribute('s-model');
                addScopeProp(propToBind);
                element.onkeyup = function() {
                    scope[propToBind] = element.value;
                }
            };


        });
    },
    Router: {
        routes: [],
        root: '/',
        config: function(options) {
            this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';
            return this;
        },
        add: function(name, url, handler) {
            this.routes.push({ name, url, handler });
            return this;
        },
        clearSlashes: function(path) {
            return path.toString().replace(/\/$/, '').replace(/^\//, '');
        },
        getFragment: function() {
            var fragment = '';

            if (!window) {
                return '';
            }
            var match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : '';

            return this.clearSlashes(fragment);
        },
        navigate: function(path) {
            //window.location.href.match(/#(.*)$/);
            window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
        },
        load: function(url) {

            fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'text/html',
                    }
                })
                .then(response => response.text())
                .then(data => {
                    SNR.Html('[s-content]', data);
                });

        },
        listen: function() {
            var thet = this;

            var fr = thet.getFragment();
            if (fr !== '') {
                for (var i = 0; i < thet.routes.length; i++) {
                    if (thet.routes[i].name === fr.replace('#', '')) {

                        console.log("Route default", thet.routes[i]);
                        thet.load(thet.routes[i].url);
                        break;
                    }
                }
            }

            window.addEventListener('hashchange', function() {
                for (var i = 0; i < thet.routes.length; i++) {
                    if (thet.routes[i].name === this.location.hash.replace('#', '')) {

                        console.log("Route", thet.routes[i]);
                        thet.load(thet.routes[i].url);
                        break;
                    }
                }
                // if (location.hash === '#about') {
                //     console.log("You're visiting a cool feature!");
                // }
            }, false);
        }
    },
    Storage: {
        _data: {},
        set: function(key, value) {
            this._data[key] = value;

            return this;
        },
        get: function(key) {
            return this._data[key];
        }
    },
    Utilities: {
        that: this,
        Random: function(max) {
            return parseInt(Math.random() * max, 10);
        }
        // Scroll: function() {
        //     var prevScrollpos = window.pageYOffset;
        //     var onscroll = function() {
        //         var currentScrollPos = window.pageYOffset;
        //         if (currentScrollPos === 0) {
        //             thet.Element('body').addClass()
        //             $("body").removeClass("scroll-down");
        //             $("body").removeClass("scroll-up");
        //         } else if (prevScrollpos > currentScrollPos) {
        //             $("body").addClass("scroll-up");
        //             $("body").removeClass("scroll-down");

        //         } else {
        //             $("body").addClass("scroll-down");
        //             $("body").removeClass("scroll-up");
        //         }
        //     };

        //     window.onscroll = onscroll;
        // }
    },
    Init: function(){
        console.log('SNR.Init');
        this.Bind();
    }
};

SNR.Init();

// SNR.Router.add('about', '/view/about.html', function() {
//     console.log('about');
// }).listen();