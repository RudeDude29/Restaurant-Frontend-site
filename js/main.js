
// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 

// pop up for subscribe
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".newsletter").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      // Get the value of the email input
      var email = document.querySelector('input[name="email"]').value;
      
      // Check if the email is empty
      if (email === "") {
        // Show popup with warning for empty email
        openPopup("Please enter your email address.");
      } else {
        // Show popup with success message for valid email
        openPopup("Thank you for subscribing!");
      }
    });
  });
  
  // Function to open the popup
  function openPopup(message) {
    document.getElementById("subscribe").style.display = "block";
    document.getElementById("subscribe").textContent = message;
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById("subscribe").style.display = "none";
  }



const counterbtn=document.getElementById('btncnt')
let ctr=0
const show=document.getElementById('counting')
function counter()
{
  
  counterbtn.setAttribute('class','red')
  
    
  ctr++
  counterbtn.innerHTML="Order no" + ctr
}
function cancel()
{
  counterbtn.setAttribute('class','yellow')
  if(ctr<=0)
  {
    att.remove()
    counterbtn.innerHTML="No Order"
    return counterbtn.innerText="Order now"
  }
  ctr--
  counterbtn.innerHTML="Order no" + ctr
}
counterbtn.addEventListener('click',counter)
show.addEventListener('click',cancel)
const att=document.getElementById('setAtt')
function New()
{
  setAtt.style.backgroundColor='black'
}
setAtt.addEventListener('click',New)

//Create element 
//document.createElement(Write here typeof element such as li etc.)
//Append element 
//.appendChild()
//All this can also be done with the help of innerHTML
//ES6 very use for destructuring : it used to merge arrays and objects together respectively;
//such as array1=[1,2,3] array2=[4,5,6] then array3=[...array1,...array2] will produce  something like
//this array3=[1,2,3,4,5,6] similarly obj1={name:'Ashish'} obj2={age:21} obj3={...obj1,...obj2}
//then we have something like this obj3={name:'Ashish',Age:21} if obj2={name:'Ram',Age:21}
//then obj3={name:'Ram',Age:21}