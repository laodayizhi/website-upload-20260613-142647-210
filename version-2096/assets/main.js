(() => {
    function ready(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    }

    function setupMenu() {
        const button = document.querySelector("[data-menu-button]");
        const menu = document.querySelector("[data-mobile-nav]");
        if (!button || !menu) {
            return;
        }
        button.addEventListener("click", () => {
            const open = menu.classList.toggle("is-open");
            button.setAttribute("aria-expanded", open ? "true" : "false");
        });
    }

    function setupHero() {
        const root = document.querySelector("[data-hero]");
        if (!root) {
            return;
        }
        const slides = Array.from(root.querySelectorAll("[data-hero-slide]"));
        const dots = Array.from(root.querySelectorAll("[data-hero-dot]"));
        const prev = root.querySelector("[data-hero-prev]");
        const next = root.querySelector("[data-hero-next]");
        if (slides.length < 2) {
            return;
        }
        let index = 0;
        let timer = null;

        function show(nextIndex) {
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach((slide, position) => {
                slide.classList.toggle("is-active", position === index);
            });
            dots.forEach((dot, position) => {
                dot.classList.toggle("is-active", position === index);
            });
        }

        function start() {
            timer = window.setInterval(() => show(index + 1), 5200);
        }

        function restart() {
            if (timer) {
                window.clearInterval(timer);
            }
            start();
        }

        prev && prev.addEventListener("click", () => {
            show(index - 1);
            restart();
        });
        next && next.addEventListener("click", () => {
            show(index + 1);
            restart();
        });
        dots.forEach((dot, position) => {
            dot.addEventListener("click", () => {
                show(position);
                restart();
            });
        });
        start();
    }

    function setupFilters() {
        const panels = Array.from(document.querySelectorAll("[data-filter-panel]"));
        panels.forEach((panel) => {
            const input = panel.querySelector("[data-search-input]");
            const buttons = Array.from(panel.querySelectorAll("[data-filter-value]"));
            const root = panel.closest("main") || document;
            const cards = Array.from(root.querySelectorAll(".searchable-card"));
            const empty = root.querySelector("[data-empty-state]");
            let filterValue = "all";

            function apply() {
                const query = input ? input.value.trim().toLowerCase() : "";
                let visible = 0;
                cards.forEach((card) => {
                    const text = (card.dataset.search || card.textContent || "").toLowerCase();
                    const category = card.dataset.category || "";
                    const matchText = !query || text.includes(query);
                    const matchCategory = filterValue === "all" || category === filterValue;
                    const shouldShow = matchText && matchCategory;
                    card.style.display = shouldShow ? "" : "none";
                    if (shouldShow) {
                        visible += 1;
                    }
                });
                if (empty) {
                    empty.classList.toggle("is-visible", visible === 0);
                }
            }

            input && input.addEventListener("input", apply);
            buttons.forEach((button) => {
                button.addEventListener("click", () => {
                    filterValue = button.dataset.filterValue || "all";
                    buttons.forEach((item) => item.classList.toggle("is-active", item === button));
                    apply();
                });
            });
            apply();
        });
    }

    function initPlayer(options) {
        const video = document.querySelector("[data-player-video]");
        const overlay = document.querySelector("[data-player-overlay]");
        const button = document.querySelector("[data-player-button]");
        const message = document.querySelector("[data-player-message]");
        if (!video || !options || !options.source) {
            return;
        }
        let started = false;
        let hls = null;

        function setMessage(text) {
            if (message) {
                message.textContent = text || "";
            }
        }

        function begin() {
            if (started) {
                video.play().catch(() => undefined);
                return;
            }
            started = true;
            overlay && overlay.classList.add("is-hidden");
            setMessage("");

            if (window.Hls && window.Hls.isSupported()) {
                hls = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true
                });
                hls.loadSource(options.source);
                hls.attachMedia(video);
                hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
                    video.play().catch(() => undefined);
                });
                hls.on(window.Hls.Events.ERROR, (_event, data) => {
                    if (data && data.fatal) {
                        setMessage("视频加载失败，请刷新后重试");
                    }
                });
            } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = options.source;
                video.addEventListener("loadedmetadata", () => {
                    video.play().catch(() => undefined);
                }, { once: true });
                video.load();
            } else {
                setMessage("此浏览器暂时无法播放");
            }
        }

        overlay && overlay.addEventListener("click", begin);
        button && button.addEventListener("click", (event) => {
            event.stopPropagation();
            begin();
        });
        video.addEventListener("click", () => {
            if (!started) {
                begin();
            }
        });
        window.addEventListener("beforeunload", () => {
            if (hls) {
                hls.destroy();
            }
        });
    }

    ready(() => {
        setupMenu();
        setupHero();
        setupFilters();
    });

    window.MovieSite = {
        initPlayer
    };
})();
