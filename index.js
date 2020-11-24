const cards = document.querySelectorAll(".card");
console.log(cards);

//variables
var isFlipped =false;
var firstCard;
var secondCard;

cards.forEach((card)=> card.addEventListener("click",flip))
function flip(){
this.classList.add("flip");
if (!isFlipped) {
  isFlipped=true;
  firstCard=this;
}
else{
  secondCard=this;
  checkIt()
}
}
function checkIt(){
  if (firstCard.dataset.image === secondCard.dataset.image) {
      success();
  }
  else{
    fail();
  }
  
}
function success(){
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail(){
  setTimeout(() => {
    firstCard.classList.remove("flip");
  secondCard.classList.remove("flip");
  reset();
  }, 500);
 }
function reset(){
  isFlipped =false;
 firstCard= null;
 secondCard= null;
}
function shuffle(){
  cards.forEach((card)=>{
    var index= Math.floor(Math.random()*16)
    card.style.order= index;
  });
};
function restart(){
cards.forEach((card)=> card.classList.remove("flip"));
setTimeout(() => {
  shuffle();
  cards.forEach((card)=> card.addEventListener("click",flip))
}, 350);
}
const button = document.querySelector(".newBtn")
button.addEventListener("click",restart);

(function shuffle(){
  cards.forEach((card)=>{
    var index= Math.floor(Math.random()*16)
    card.style.order= index;
  });
})
();

