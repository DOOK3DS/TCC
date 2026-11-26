// Cronômetro geral, cronômetro por slide, navegação e painéis (roteiro e perguntas).
(function () {
  var SLIDES = window.SLIDES;
  var MIN_TOTAL = 2 * 60;
  var MAX_TOTAL = 3 * 60;
  var current = 0;
  var running = false;
  var totalSec = 0;
  var spent = SLIDES.map(function () { return 0; });
  var timer = null;

  var $ = function (id) { return document.getElementById(id); };

  function mmss(s) {
    var neg = s < 0;
    s = Math.abs(Math.round(s));
    var m = Math.floor(s / 60);
    var r = s % 60;
    return (neg ? "-" : "") + (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r;
  }

  var suggestedTotal = SLIDES.reduce(function (acc, s) { return acc + s.time; }, 0);
  var mineIdx = [];
  SLIDES.forEach(function (s, i) { if (s.mine) mineIdx.push(i); });
  var mineTarget = mineIdx.reduce(function (acc, i) { return acc + SLIDES[i].time; }, 0);

  function renderTotal() {
    $("totalClock").textContent = mmss(totalSec);
    var pct = Math.min(100, (totalSec / MAX_TOTAL) * 100);
    $("totalBar").style.width = pct + "%";

    var st = $("totalStatus");
    st.className = "status";
    if (totalSec < MIN_TOTAL) {
      st.classList.add("low");
      st.textContent = "Faltam " + mmss(MIN_TOTAL - totalSec) + " para o mínimo";
    } else if (totalSec <= MAX_TOTAL) {
      st.classList.add("ok");
      st.textContent = "Dentro da meta";
    } else {
      st.classList.add("high");
      st.textContent = "Passou " + mmss(totalSec - MAX_TOTAL) + " do máximo";
    }
    $("totalNote").textContent =
      "Sua parte: mínimo 2:00 · máximo 3:00 · sugerido " + mmss(suggestedTotal) + ". O grupo inteiro tem de 15 a 20 min.";
    $("startBtn").textContent = running ? "Pausar" : "Iniciar";
  }

  function renderMine() {
    var spentMine = mineIdx.reduce(function (acc, i) { return acc + spent[i]; }, 0);
    $("mineTarget").textContent = mmss(mineTarget);
    $("mineSpent").textContent = mmss(spentMine);
    var diff = mineTarget - spentMine;
    var left = $("mineLeft");
    if (diff >= 0) {
      left.innerHTML = "Restam: <strong>" + mmss(diff) + "</strong>";
    } else {
      left.innerHTML = "Acima do sugerido: <strong>" + mmss(-diff) + "</strong>";
    }
  }

  function renderDots() {
    var wrap = $("dots");
    wrap.innerHTML = "";
    SLIDES.forEach(function (s, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "dot";
      if (s.mine) b.classList.add("mine");
      if (i === current) b.classList.add("current");
      else if (spent[i] > 0) b.classList.add("done");
      b.textContent = String(i + 1);
      b.setAttribute("aria-label", "Ir para o slide " + (i + 1) + ": " + s.title);
      if (i === current) b.setAttribute("aria-current", "step");
      b.addEventListener("click", function () { go(i); });
      wrap.appendChild(b);
    });
  }

  function wirePanels() {
    var btns = $("slideCard").querySelectorAll(".open-btn");
    Array.prototype.forEach.call(btns, function (b) {
      b.addEventListener("click", function () {
        var panel = document.getElementById(b.getAttribute("data-panel"));
        var willOpen = panel.hidden;
        panel.hidden = !willOpen;
        b.setAttribute("aria-expanded", String(willOpen));
        b.textContent = willOpen ? b.getAttribute("data-close") : b.getAttribute("data-open");
      });
    });
  }

  function renderSlide() {
    var s = SLIDES[current];
    var sp = spent[current];
    var remaining = s.time - sp;
    var over = remaining < 0;
    var pct = Math.min(100, (sp / s.time) * 100);

    var bullets = s.bullets.map(function (b) { return "<li>" + b + "</li>"; }).join("");
    var sources = s.sources.length
      ? '<div class="sources"><strong>Fontes</strong><ul>' +
        s.sources.map(function (x) { return "<li>" + x + "</li>"; }).join("") +
        "</ul></div>"
      : "";

    var actions =
      '<div class="actions">' +
        '<button class="open-btn" type="button" data-panel="roteiro" aria-expanded="false" ' +
          'data-open="Ver roteiro de fala" data-close="Ocultar roteiro de fala">Ver roteiro de fala</button>' +
        (s.qa
          ? '<button class="open-btn" type="button" data-panel="qa" aria-expanded="false" ' +
            'data-open="Ver perguntas da banca" data-close="Ocultar perguntas da banca">Ver perguntas da banca</button>'
          : "") +
      "</div>";

    var roteiro =
      '<div class="panel" id="roteiro" hidden><p class="panel-title">Roteiro de fala</p>' +
        s.script.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
      "</div>";

    var qa = s.qa
      ? '<div class="panel" id="qa" hidden><p class="panel-title">Perguntas que a banca pode fazer</p>' +
        s.qa.map(function (x) { return "<p><strong>" + x.q + "</strong><br>" + x.a + "</p>"; }).join("") +
        "</div>"
      : "";

    $("slideCard").innerHTML =
      '<div class="slide-head">' +
        '<div class="slide-num">Slide ' + (current + 1) + " de " + SLIDES.length + "</div>" +
        "<h1>" + s.title + "</h1>" +
        '<span class="tag">' + s.tag + "</span>" +
      "</div>" +
      '<div class="slide-body"><ul>' + bullets + "</ul></div>" +
      '<div class="timer-box' + (over ? " over" : "") + '">' +
        "<div><small>Tempo sugerido para este slide: " + mmss(s.time) + "</small>" +
        '<div class="big">' + (over ? "+" + mmss(-remaining) : mmss(remaining)) + "</div>" +
        "<small>" + (over ? "acima do sugerido" : "restante para falar") + "</small></div>" +
      "</div>" +
      '<div class="slide-bar"><div class="slide-bar-fill" style="width:' + pct + '%"></div></div>' +
      actions + roteiro + qa + sources +
      '<div class="slide-foot"></div>';

    wirePanels();
    $("prevBtn").disabled = current === 0;
    $("nextBtn").disabled = current === SLIDES.length - 1;
    renderDots();
    renderMine();
  }

  function go(i) {
    if (i < 0 || i >= SLIDES.length) return;
    current = i;
    renderSlide();
    renderTotal();
    var card = $("slideCard");
    if (card.scrollIntoView) card.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  function tick() {
    if (!running) return;
    totalSec += 1;
    spent[current] += 1;
    renderTotal();
    renderMine();
    var s = SLIDES[current];
    var remaining = s.time - spent[current];
    var over = remaining < 0;
    var box = document.querySelector(".timer-box");
    if (box) {
      box.className = "timer-box" + (over ? " over" : "");
      box.querySelector(".big").textContent = over ? "+" + mmss(-remaining) : mmss(remaining);
      box.querySelectorAll("small")[1].textContent = over ? "acima do sugerido" : "restante para falar";
    }
    var fill = document.querySelector(".slide-bar-fill");
    if (fill) fill.style.width = Math.min(100, (spent[current] / s.time) * 100) + "%";
    renderDots();
  }

  function toggle() {
    running = !running;
    if (running && !timer) timer = setInterval(tick, 1000);
    if (!running && timer) { clearInterval(timer); timer = null; }
    renderTotal();
  }

  function reset() {
    running = false;
    if (timer) { clearInterval(timer); timer = null; }
    totalSec = 0;
    spent = SLIDES.map(function () { return 0; });
    renderTotal();
    renderSlide();
  }

  $("startBtn").addEventListener("click", toggle);
  $("resetBtn").addEventListener("click", reset);
  $("prevBtn").addEventListener("click", function () { go(current - 1); });
  $("nextBtn").addEventListener("click", function () { go(current + 1); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") go(current + 1);
    if (e.key === "ArrowLeft") go(current - 1);
  });

  var touchX = null;
  var card = $("slideCard");
  card.addEventListener("touchstart", function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
  card.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? current + 1 : current - 1);
  }, { passive: true });

  renderTotal();
  renderSlide();
})();
