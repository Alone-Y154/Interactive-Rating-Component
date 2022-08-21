

function clicked(num) {
   document.querySelector(".card-given-rating span").innerHTML = num;

}





function buttonClick() {
  if (document.querySelector(".new-state").classList.contains("thank-you")) {
    document.querySelector(".new-state").classList.remove("thank-you");
    document.querySelector(".landing-page").classList.add("thank-you");
  }
}
