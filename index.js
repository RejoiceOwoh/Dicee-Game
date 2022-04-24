
let randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber)
// imgChange () => {
//    document.querySelector('img').setAttribute()
// }

document.querySelector('.img1').setAttribute("src", "images/dice" + randomNumber +".png")

randomNumber2 = Math.floor(Math.random() * 6) + 1
console.log(randomNumber + " 2nd")
document.querySelector('.img2').setAttribute("src", "images/dice" + randomNumber2 +".png")

if (randomNumber > randomNumber2) {
   document.querySelector(".container h1").textContent = "💫Player 1 Wins"
} else if (randomNumber2 > randomNumber) {
   document.querySelector(".container h1").textContent = "💨Player 2 Wins"
} else {
   document.querySelector(".container h1").textContent = "Draw"
}