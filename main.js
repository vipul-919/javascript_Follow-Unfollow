/*const istatus = document.querySelector("h5")
const btn = document.querySelector(".btn-1")
var check = 0

btn.addEventListener("click",function(){
  if(check ==0){
    istatus.innerHTML ="Friend"
    istatus.style.color = "green"
    btn.innerHTML ="Unfollow"
    check =1
  } else{
    istatus.innerHTML ="Strander"
    istatus.style.color = "red"
    btn.innerHTML ="Follow"
    check =0
  }

});*/





// Select all h5 elements and buttons with class "btn-1"
const buttons = document.querySelectorAll(".btn-1");

buttons.forEach((btn) => {
  // Add event listener to each button
  btn.addEventListener("click", function () {
    const istatus = this.parentElement.previousElementSibling; // Select the corresponding h5 element
    if (istatus.innerHTML === "Not Follow") {
      istatus.innerHTML = "Friend";
      istatus.style.color = "green";
      this.innerHTML = "Unfollow";
    } else {
      istatus.innerHTML = "Not Follow";
      istatus.style.color = "black";
      this.innerHTML = "Follow";
    }
  });
});
