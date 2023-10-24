let winbutton = document.querySelector(".winbutton")
let winmenu = document.querySelector(".winmenu")

winbutton.addEventListener("click", () => {
  if (winmenu.style.bottom == "-100%") {
    winmenu.style.bottom = "7%"
  } else winmenu.style.bottom = "-100%"
})

const spotifymenu = document.querySelector(".spotifymenu")
const spotifybutton = document.querySelector(".spotifybutton")

spotifybutton.addEventListener("click", () => {
  if (spotifymenu.style.bottom == "-100%") {
    spotifymenu.style.bottom = "22%"
  } else spotifymenu.style.bottom = "-100%"
})
