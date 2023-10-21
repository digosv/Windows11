// Função Dark Light Mode //
function toggleMode() {
  const html = document.documentElement
  if (html.classList.contains("dark")) {
    html.classList.remove("dark")
  } else html.classList.add("dark")
}
