/**
 * Site behaviour: theme, navigation, scroll reveal, project filtering,
 * directory rendering, footer year, back-to-top.
 *
 * Progressive enhancement only — every page remains readable and
 * navigable with JavaScript disabled. The open-source section is static
 * markup (verified data), so there is no API call or loading state.
 */
(function () {
  "use strict";

  var doc = document.documentElement;

  /* ------------------------------------------------------------------
     Theme
     ------------------------------------------------------------------ */
  function safeGet(k) {
    try {
      return localStorage.getItem(k);
    } catch (e) {
      return null;
    }
  }
  function safeSet(k, v) {
    try {
      localStorage.setItem(k, v);
    } catch (e) {
      /* ignore */
    }
  }

  var saved = safeGet("sn-theme");
  if (saved === "dark" || saved === "light") {
    doc.setAttribute("data-theme", saved);
  }

  function toggleTheme() {
    var next = doc.getAttribute("data-theme") === "dark" ? "light" : "dark";
    doc.setAttribute("data-theme", next);
    safeSet("sn-theme", next);
  }

  document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
    btn.addEventListener("click", toggleTheme);
  });

  /* ------------------------------------------------------------------
     Nav: scrolled state, active section, mobile menu
     ------------------------------------------------------------------ */
  var nav = document.querySelector(".nav");
  var mobilePanel = document.getElementById("mobile-panel");
  var mobileToggle = document.getElementById("mobile-toggle");

  function onScroll() {
    var y = window.scrollY || doc.scrollTop;
    if (nav) nav.classList.toggle("is-scrolled", y > 8);

    var toTop = document.getElementById("to-top");
    if (toTop) toTop.classList.toggle("show", y > 640);

    /* Active nav link for same-page section links */
    var sections = document.querySelectorAll("main section[id], header[id]");
    var links = document.querySelectorAll('.nav-links a[href^="#"]');
    var current = null;
    sections.forEach(function (sec) {
      if (sec.offsetTop - 140 <= y) current = sec.id;
    });
    links.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener("click", function () {
      var open = mobilePanel.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobilePanel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobilePanel.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobilePanel.classList.contains("open")) {
        mobilePanel.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle.focus();
      }
    });
  }

  var toTopBtn = document.getElementById("to-top");
  if (toTopBtn) {
    toTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ------------------------------------------------------------------
     Scroll reveal
     ------------------------------------------------------------------ */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal, .reveal-stagger");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     Project filtering (search + category chips)
     ------------------------------------------------------------------ */
  var grid = document.querySelector("[data-project-grid]");
  if (grid) {
    var search = document.querySelector("[data-project-search]");
    var chips = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
    var noResults = document.querySelector("[data-no-results]");
    var counter = document.querySelector("[data-visible-count]");
    var totalCount = document.querySelector("[data-total-count]");
    var activeFilter = "all";
    var debounce = null;

    function applyFilter() {
      /* Re-query: directory cards may be rendered after first paint */
      var cards = Array.prototype.slice.call(grid.querySelectorAll("[data-project]"));
      var q = search ? search.value.toLowerCase().trim() : "";
      var visible = 0;
      cards.forEach(function (card) {
        var cats = (card.getAttribute("data-cats") || "").split(/\s+/);
        var hay = (card.getAttribute("data-search") || "").toLowerCase();
        var matchCat = activeFilter === "all" || cats.indexOf(activeFilter) !== -1;
        var matchQ = !q || hay.indexOf(q) !== -1;
        var show = matchCat && matchQ;
        card.hidden = !show;
        if (show) visible++;
      });
      if (noResults) noResults.classList.toggle("show", visible === 0);
      if (counter) counter.textContent = String(visible);
      if (totalCount) totalCount.textContent = String(cards.length);
    }

    if (search) {
      search.addEventListener("input", function () {
        clearTimeout(debounce);
        debounce = setTimeout(applyFilter, 140);
      });
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) {
          c.classList.remove("active");
          c.setAttribute("aria-pressed", "false");
        });
        chip.classList.add("active");
        chip.setAttribute("aria-pressed", "true");
        activeFilter = chip.getAttribute("data-filter");
        applyFilter();
      });
    });

    applyFilter();
  }

  /* ------------------------------------------------------------------
     Directory rendering from projects-data (projects.html only)
     ------------------------------------------------------------------ */
  var dirMount = document.querySelector("[data-directory]");
  if (dirMount && window.PROJECTS) {
    var frag = document.createDocumentFragment();

    window.PROJECTS.forEach(function (p, i) {
      var art = document.createElement("article");
      art.className = "pcard reveal";
      art.setAttribute("data-project", "");
      art.setAttribute("data-cats", p.cats.join(" "));
      art.setAttribute(
        "data-search",
        [p.name, p.category, p.summary, p.stack.join(" ")].join(" ")
      );

      var head = document.createElement("div");
      head.className = "pcard-head";
      var titleWrap = document.createElement("div");
      var idx = document.createElement("div");
      idx.className = "pcard-index";
      idx.textContent = String(i + 1).padStart(2, "0") + " · " + p.year;
      var nameEl = document.createElement("h2");
      nameEl.className = "pcard-name";
      nameEl.textContent = p.name;
      var cat = document.createElement("div");
      cat.className = "pcard-cat";
      cat.textContent = p.category;
      titleWrap.appendChild(idx);
      titleWrap.appendChild(nameEl);
      titleWrap.appendChild(cat);
      head.appendChild(titleWrap);
      if (p.demo) {
        var live = document.createElement("span");
        live.className = "badge badge--live";
        live.textContent = "Live demo";
        head.appendChild(live);
      }
      art.appendChild(head);

      var desc = document.createElement("p");
      desc.className = "pcard-desc";
      desc.textContent = p.summary;
      art.appendChild(desc);

      if (p.note) {
        var note = document.createElement("p");
        note.className = "pcard-desc";
        note.style.fontStyle = "italic";
        note.textContent = p.note;
        art.appendChild(note);
      }

      var stack = document.createElement("div");
      stack.className = "pcard-stack";
      p.stack.forEach(function (t) {
        var tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = t;
        stack.appendChild(tag);
      });
      art.appendChild(stack);

      var links = document.createElement("div");
      links.className = "pcard-links";
      links.appendChild(makeRepoLink(p.repo));
      if (p.repo2) links.appendChild(makeRepoLink(p.repo2, "Backend repo"));
      if (p.demo) links.appendChild(makeDemoLink(p.demo));
      art.appendChild(links);

      frag.appendChild(art);
    });

    dirMount.appendChild(frag);

    /* Newly rendered cards need reveal registration */
    if (!reduceMotion && typeof io !== "undefined" && io) {
      dirMount.querySelectorAll(".reveal").forEach(function (el) {
        io.observe(el);
      });
    } else {
      dirMount.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("in");
      });
    }

    /* Re-run filter now that cards exist */
    var searchEl = document.querySelector("[data-project-search]");
    if (searchEl) searchEl.dispatchEvent(new Event("input"));
  }

  function makeRepoLink(href, label) {
    var a = document.createElement("a");
    a.className = "plink";
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = label || "Repository";
    a.setAttribute("aria-label", (label || "Repository") + " (opens in new tab)");
    return a;
  }

  function makeDemoLink(href) {
    var a = document.createElement("a");
    a.className = "plink";
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = "Live demo";
    a.setAttribute("aria-label", "Live demo (opens in new tab)");
    return a;
  }

  /* ------------------------------------------------------------------
     Footer year
     ------------------------------------------------------------------ */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
