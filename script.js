
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


    const username = document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const telegramToken = '6958858749:AAG4ROlK27c4w-iPugbeKQq7iq9mmVQ7lhk';
    const chatId = '1625414298';
    const text = `Name: ${username}\n Email: ${email} Message: ${message}`;

   

