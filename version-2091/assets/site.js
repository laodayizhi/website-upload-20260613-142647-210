(function () {
    var headerButton = document.querySelector('.menu-toggle');
    var mobilePanel = document.querySelector('.mobile-panel');

    if (headerButton && mobilePanel) {
        headerButton.addEventListener('click', function () {
            var open = mobilePanel.classList.toggle('open');
            headerButton.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    var hero = document.querySelector('[data-hero]');

    if (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
        var dots = Array.prototype.slice.call(hero.querySelectorAll('.hero-dot'));
        var prev = hero.querySelector('.hero-prev');
        var next = hero.querySelector('.hero-next');
        var active = 0;
        var timer;

        function show(index) {
            active = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('active', slideIndex === active);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('active', dotIndex === active);
            });
        }

        function restart() {
            clearInterval(timer);
            timer = setInterval(function () {
                show(active + 1);
            }, 5000);
        }

        dots.forEach(function (dot, index) {
            dot.addEventListener('click', function () {
                show(index);
                restart();
            });
        });

        if (prev) {
            prev.addEventListener('click', function () {
                show(active - 1);
                restart();
            });
        }

        if (next) {
            next.addEventListener('click', function () {
                show(active + 1);
                restart();
            });
        }

        show(0);
        restart();
    }

    var filterForm = document.querySelector('[data-filter-form]');

    if (filterForm) {
        var cards = Array.prototype.slice.call(document.querySelectorAll('[data-filter-card] .movie-card'));
        var keyword = filterForm.querySelector('[name="keyword"]');
        var type = filterForm.querySelector('[name="type"]');
        var year = filterForm.querySelector('[name="year"]');
        var empty = document.querySelector('.filter-empty');

        function normalize(value) {
            return String(value || '').trim().toLowerCase();
        }

        function runFilter() {
            var q = normalize(keyword && keyword.value);
            var selectedType = normalize(type && type.value);
            var selectedYear = normalize(year && year.value);
            var shown = 0;

            cards.forEach(function (card) {
                var hay = normalize([
                    card.getAttribute('data-title'),
                    card.getAttribute('data-region'),
                    card.getAttribute('data-type'),
                    card.getAttribute('data-year'),
                    card.getAttribute('data-genre')
                ].join(' '));
                var matchesKeyword = !q || hay.indexOf(q) !== -1;
                var matchesType = !selectedType || normalize(card.getAttribute('data-type')) === selectedType;
                var matchesYear = !selectedYear || normalize(card.getAttribute('data-year')) === selectedYear;
                var visible = matchesKeyword && matchesType && matchesYear;
                card.style.display = visible ? '' : 'none';
                if (visible) {
                    shown += 1;
                }
            });

            if (empty) {
                empty.classList.toggle('show', shown === 0);
            }
        }

        ['input', 'change'].forEach(function (eventName) {
            filterForm.addEventListener(eventName, runFilter);
        });

        filterForm.addEventListener('submit', function (event) {
            event.preventDefault();
            runFilter();
        });

        runFilter();
    }
}());

function initPlayer(sourceUrl) {
    var video = document.querySelector('.movie-video');
    var poster = document.querySelector('.player-poster');
    var prepared = false;
    var hlsInstance = null;

    if (!video || !sourceUrl) {
        return;
    }

    function prepare() {
        if (prepared) {
            return;
        }

        prepared = true;

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = sourceUrl;
        } else if (window.Hls && window.Hls.isSupported()) {
            hlsInstance = new window.Hls({
                enableWorker: true,
                lowLatencyMode: true
            });
            hlsInstance.loadSource(sourceUrl);
            hlsInstance.attachMedia(video);
        } else {
            video.src = sourceUrl;
        }
    }

    function start() {
        prepare();
        if (poster) {
            poster.classList.add('hidden');
        }
        var result = video.play();
        if (result && typeof result.catch === 'function') {
            result.catch(function () {});
        }
    }

    if (poster) {
        poster.addEventListener('click', start);
    }

    video.addEventListener('click', function () {
        if (video.paused) {
            start();
        }
    });

    video.addEventListener('play', function () {
        if (poster) {
            poster.classList.add('hidden');
        }
    });

    window.addEventListener('beforeunload', function () {
        if (hlsInstance) {
            hlsInstance.destroy();
        }
    });
}
