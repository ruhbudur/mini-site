// Kopyala butonları
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-copy-target]");
  if (!btn) return;
  const id = btn.getAttribute("data-copy-target");
  const el = document.getElementById(id);
  if (!el) return;
  const text = el.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const old = btn.textContent;
    btn.textContent = "Kopyalandı!";
    setTimeout(() => (btn.textContent = old), 1000);
  });
});

// Basit scroll-to-top (isteğe bağlı)
export function scrollTopSmooth() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
