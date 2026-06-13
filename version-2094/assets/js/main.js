(function() {
    var menuButton = document.querySelector('.menu-toggle');
    var mobileNav = document.querySelector('.mobile-nav');

    if (menuButton && mobileNav) {
        menuButton.addEventListener('click', function() {
            var isOpen = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', String(!isOpen));
            mobileNav.hidden = isOpen;
        });
    }

    var hero = document.querySelector('[data-hero]');

    if (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
        var dots = Array.prototype.slice.call(hero.querySelectorAll('.hero-dot'));
        var previous = hero.querySelector('.hero-prev');
        var next = hero.querySelector('.hero-next');
        var current = 0;
        var timer = null;

        function showSlide(index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function(slide, slideIndex) {
                var active = slideIndex === current;
                slide.classList.toggle('active', active);
                slide.setAttribute('aria-hidden', active ? 'false' : 'true');
            });
            dots.forEach(function(dot, dotIndex) {
                dot.classList.toggle('active', dotIndex === current);
            });
        }

        function startTimer() {
            stopTimer();
            timer = window.setInterval(function() {
                showSlide(current + 1);
            }, 5200);
        }

        function stopTimer() {
            if (timer) {
                window.clearInterval(timer);
            }
        }

        dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
                showSlide(Number(dot.getAttribute('data-slide')) || 0);
                startTimer();
            });
        });

        if (previous) {
            previous.addEventListener('click', function() {
                showSlide(current - 1);
                startTimer();
            });
        }

        if (next) {
            next.addEventListener('click', function() {
                showSlide(current + 1);
                startTimer();
            });
        }

        hero.addEventListener('mouseenter', stopTimer);
        hero.addEventListener('mouseleave', startTimer);
        startTimer();
    }

    var filterPanel = document.querySelector('[data-filter-panel]');

    if (filterPanel) {
        var keywordInput = filterPanel.querySelector('[data-filter-keyword]');
        var categorySelect = filterPanel.querySelector('[data-filter-category]');
        var yearSelect = filterPanel.querySelector('[data-filter-year]');
        var items = Array.prototype.slice.call(document.querySelectorAll('.search-item'));
        var params = new URLSearchParams(window.location.search);
        var query = params.get('q');

        if (query && keywordInput) {
            keywordInput.value = query;
        }

        function applyFilters() {
            var keyword = keywordInput ? keywordInput.value.trim().toLowerCase() : '';
            var category = categorySelect ? categorySelect.value : '';
            var year = yearSelect ? yearSelect.value : '';

            items.forEach(function(item) {
                var text = ((item.getAttribute('data-title') || '') + ' ' + (item.getAttribute('data-meta') || '') + ' ' + (item.getAttribute('data-tags') || '')).toLowerCase();
                var itemCategory = item.getAttribute('data-category') || '';
                var itemYear = item.getAttribute('data-year') || '';
                var visible = true;

                if (keyword && text.indexOf(keyword) === -1) {
                    visible = false;
                }

                if (category && itemCategory !== category) {
                    visible = false;
                }

                if (year && itemYear.indexOf(year) === -1) {
                    visible = false;
                }

                item.classList.toggle('is-hidden', !visible);
            });
        }

        [keywordInput, categorySelect, yearSelect].forEach(function(control) {
            if (control) {
                control.addEventListener('input', applyFilters);
                control.addEventListener('change', applyFilters);
            }
        });

        applyFilters();
    }
})();
