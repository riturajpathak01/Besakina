window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".topbar").style.padding = "5px 4rem";
   
  } else {
    document.querySelector(".topbar").style.padding = "10px 4rem";
   
  }
}

function closesidebar(){
    document.getElementById('sidebarid').classList.add("hidesidebar")
    document.body.classList.remove("stopscroll")
   
  }
  function opensidebar(){
    document.getElementById('sidebarid').classList.remove("hidesidebar")
    document.body.classList.add("stopscroll")

  }

//   function submitHandler(){
//     const name = document.querySelector('.fullname').value;
//     const email = document.querySelector('.emailid').value;
//     const phnum = document.querySelector('.phnnum').value;
//     const message = document.querySelector('.message').value;


//     fetch("https://formsubmit.co/ajax/riturajpabc@gmail.com", {
//     method: "POST",
//     headers: { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//         name: name,
//         email: email,
//         phone_number: phnum,
//         message: message
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
  

//   }
  