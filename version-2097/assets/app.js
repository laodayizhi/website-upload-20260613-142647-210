(function () {
    function ready(fn) {
        if (document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }

    function initMenu() {
        var toggle = document.querySelector("[data-menu-toggle]");
        var panel = document.querySelector("[data-mobile-panel]");
        if (!toggle || !panel) return;
        toggle.addEventListener("click", function () {
            var open = panel.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
    }

    function initHero() {
        var slides = Array.prototype.slice.call(document.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
        if (!slides.length) return;
        var index = 0;
        var timer = null;
        function show(next) {
            index = (next + slides.length) % slides.length;
            slides.forEach(function (slide, i) {
                slide.classList.toggle("is-active", i === index);
            });
            dots.forEach(function (dot, i) {
                dot.classList.toggle("is-active", i === index);
            });
        }
        function play() {
            clearInterval(timer);
            timer = setInterval(function () {
                show(index + 1);
            }, 5600);
        }
        dots.forEach(function (dot, i) {
            dot.addEventListener("click", function () {
                show(i);
                play();
            });
        });
        show(0);
        play();
    }

    function initSearch() {
        var forms = Array.prototype.slice.call(document.querySelectorAll("[data-search-form]"));
        var index = window.siteMovieIndex || [];
        forms.forEach(function (form) {
            var input = form.querySelector("[data-site-search]");
            var shell = form.closest(".search-shell");
            var results = shell ? shell.querySelector("[data-search-results]") : null;
            if (!input || !results) return;
            function render() {
                var q = input.value.trim().toLowerCase();
                if (!q) {
                    results.classList.remove("is-open");
                    results.innerHTML = "";
                    return;
                }
                var matches = index.filter(function (item) {
                    return [item.title, item.region, item.type, item.year, item.category, item.tags].join(" ").toLowerCase().indexOf(q) !== -1;
                }).slice(0, 9);
                if (!matches.length) {
                    results.innerHTML = '<div class="search-result-item"><strong>暂无匹配影片</strong><span>换个片名、地区或类型试试</span></div>';
                    results.classList.add("is-open");
                    return;
                }
                results.innerHTML = matches.map(function (item) {
                    return '<a class="search-result-item" href="' + item.url + '"><strong>' + escapeHtml(item.title) + '</strong><span>' + escapeHtml(item.category + " · " + item.region + " · " + item.year) + '</span></a>';
                }).join("");
                results.classList.add("is-open");
            }
            input.addEventListener("input", render);
            input.addEventListener("focus", render);
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                var first = results.querySelector("a");
                if (first) {
                    window.location.href = first.href;
                }
            });
        });
        document.addEventListener("click", function (event) {
            document.querySelectorAll(".search-shell").forEach(function (shell) {
                if (!shell.contains(event.target)) {
                    var box = shell.querySelector("[data-search-results]");
                    if (box) box.classList.remove("is-open");
                }
            });
        });
    }

    function initFilters() {
        var box = document.querySelector("[data-card-filter]");
        if (!box) return;
        var input = box.querySelector("[data-filter-keyword]");
        var region = box.querySelector("[data-filter-region]");
        var type = box.querySelector("[data-filter-type]");
        var cards = Array.prototype.slice.call(document.querySelectorAll("[data-movie-card]"));
        var empty = document.querySelector("[data-filter-empty]");
        function apply() {
            var keyword = input ? input.value.trim().toLowerCase() : "";
            var regionValue = region ? region.value : "";
            var typeValue = type ? type.value : "";
            var shown = 0;
            cards.forEach(function (card) {
                var okKeyword = !keyword || card.dataset.title.toLowerCase().indexOf(keyword) !== -1;
                var okRegion = !regionValue || card.dataset.region === regionValue;
                var okType = !typeValue || card.dataset.type === typeValue;
                var visible = okKeyword && okRegion && okType;
                card.style.display = visible ? "block" : "none";
                if (visible) shown += 1;
            });
            if (empty) empty.classList.toggle("is-open", shown === 0);
        }
        [input, region, type].forEach(function (node) {
            if (node) node.addEventListener("input", apply);
            if (node) node.addEventListener("change", apply);
        });
    }

    function initPlayer() {
        var shell = document.querySelector("[data-player]");
        if (!shell) return;
        var video = shell.querySelector("video");
        var button = shell.querySelector("[data-start-play]");
        var message = shell.querySelector(".player-message");
        var source = shell.getAttribute("data-play");
        var started = false;
        var hls = null;
        function showMessage(text) {
            if (!message) return;
            message.textContent = text;
            message.classList.add("is-open");
        }
        function attach() {
            if (started || !video || !source) return;
            started = true;
            if (window.Hls && window.Hls.isSupported()) {
                hls = new window.Hls({ enableWorker: true, lowLatencyMode: true });
                hls.loadSource(source);
                hls.attachMedia(video);
                hls.on(window.Hls.Events.ERROR, function (event, data) {
                    if (data && data.fatal) showMessage("视频暂时无法播放");
                });
            } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = source;
            } else {
                showMessage("视频暂时无法播放");
            }
        }
        function play() {
            attach();
            shell.classList.add("is-playing");
            var result = video.play();
            if (result && result.catch) {
                result.catch(function () {});
            }
        }
        if (button) button.addEventListener("click", play);
        shell.addEventListener("click", function (event) {
            if (event.target === shell) play();
        });
        video.addEventListener("play", function () {
            shell.classList.add("is-playing");
        });
        window.addEventListener("beforeunload", function () {
            if (hls) hls.destroy();
        });
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, function (char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }[char];
        });
    }

    ready(function () {
        initMenu();
        initHero();
        initSearch();
        initFilters();
        initPlayer();
    });
})();
