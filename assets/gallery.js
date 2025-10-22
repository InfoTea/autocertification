document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector(".gslider");
  if (!root) return;
  const track = root.querySelector(".gslides");
  const slides = Array.from(root.querySelectorAll(".gslide"));
  const prev = root.querySelector(".g-prev");
  const next = root.querySelector(".g-next");
  let i = 0;

  function show(n) {
    i = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${i * 100}%)`;
  }
  prev.addEventListener("click", () => show(i - 1));
  next.addEventListener("click", () => show(i + 1));

  let x0 = null;
  track.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX));
  track.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) show(i + (dx < 0 ? 1 : -1));
    x0 = null;
  });
});
