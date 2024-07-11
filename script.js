
const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)
  
      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
  }
  
  showMenu('nav_toggle','NavLinks')
// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('NavLinks')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

var loader=document.getElementById("preloader");

window.addEventListener("load",function(){
      loader.style.display="none";
})

// telegram bot
const form = document.querySelector("#form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

  var name=document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var message=document.querySelector("#message").value;

    var token = '6958858749:AAG4ROlK27c4w-iPugbeKQq7iq9mmVQ7lhk';
    var chat_id="-4289545610";
    var my_text=`Name is : ${name} Email is : ${email} Message is : ${message}`
    var url=`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}/`

    let api=new XMLHttpRequest();
    api.open("GET",url,true);
    api.send()
    console.log("message was send succesfully")
});


   

