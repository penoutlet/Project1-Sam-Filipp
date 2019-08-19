
// import navHover from 'hover_modules.js';
let addbtn = document.getElementById("add-new-ticket");
addbtn.addEventListener("click", function(){

})

let submitBtn = document.getElementById("submit-btn")
submitBtn.addEventListener("click", function(e){
  e.preventDefault();
  let ticketArea = document.getElementById("ticket-area");
  let ticketObj = {}
  let description = document.getElementById("descriptionInput").value
  let ticketAuthor;
  let ticketAmount = document.getElementById("reimbursement-amount").value;

  let fancyRadios = document.getElementsByClassName("fancy-radios")
  let radios = document.getElementsByClassName("checkme")
  console.log(fancyRadios)
  let checked = ""
  let checkedName = ""
  // for(i=0;i<radios.length;i++){
  //   if(radios[i].checked){
  //     checked += radios[i].value
  //     checkedName += radios[i].name
  //     // console.log(radios[i].hasAttribute('fancy-radios'))
  //   }
  // }
  let option1 = document.getElementById("option1")
  console.log(option1)
  let option2 = document.getElementById("option2")
  let option3 = document.getElementById("option3")
  let option4 = document.getElementById("option4")
  option1.addEventListener("click", function(){
     option2.classList.remove("rounded-circle");
     option3.classList.remove("rounded-circle")
     option4.classList.remove("rounded-circle")
     option1.classList.add("rounded-circle")
  })
  option2.addEventListener("click", function(){
    option1.classList.remove("rounded-circle")
    option3.classList.remove("rounded-circle")
    option4.classList.remove("rounded-circle")
   option2.classList.add("rounded-circle")
  })
  
  option3.addEventListener("click", function(){
    option1.classList.remove("rounded-circle")
    option2.classList.remove("rounded-circle")
    option4.classList.remove("rounded-circle")
   option3.classList.add("rounded-circle")
  })

  
  option4.addEventListener("click", function(){
    option1.classList.remove("rounded-circle")
    option2.classList.remove("rounded-circle")
    option3.classList.remove("rounded-circle")
   option4.classList.add("rounded-circle")
  })
  function getFancyRadios(){
    // let checked=""
    console.log(fancyRadios[1].value)
    for(i=0;i<fancyRadios.length;i++){
      console.log(fancyRadios[i].value)
      if(fancyRadios[i].checked){
      checked += fancyRadios[i].value
      checkedName += fancyRadios[i].name
      }
    }
    console.log(checked.value)
    return checked;
  }
  console.log(checked + "Checked")
  ticketObj.description = description;
  ticketObj.reimbursement_type = getFancyRadios();
  ticketObj.author = 1;
  ticketObj.ticketAmount = ticketAmount;
  console.log(ticketObj)
  // alert(ticketObj)
  let longCard = `<div class="card text-center" style="width: 60rem;">
  <div class="card-body">
    <h5 class="card-title border">${checkedName} $${ticketObj.ticketAmount}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${ticketObj.author}</h6>
    <p class="card-text">${ticketObj.description}.</p>
    <a href="#" class="card-link">More Info</a>
  </div>
</div>`;
  // ticketObj = JSON.stringify(ticketObj)
  // console.log(JSON.stringify(ticketObj))
  // console.log(longCard)
  ticketArea.insertAdjacentHTML('beforeend', longCard )


 
})
let newTicketForm = document.getElementById("ticketForm");

newTicketForm.addEventListener("submit", function(e){
  e.preventDefault();
  let ticketArea = document.getElementById("ticket-area");
  let ticketObj = {}
  let description = document.getElementById("descriptionInput").value
  let ticketAuthor;
  let ticketAmount = document.getElementById("reimbursement-amount").value;


  ticketObj.description = description;
  ticketObj.reimbursement_type = checked;
  ticketObj.author = 1;
  ticketObj.ticketAmount = ticketAmount;
  console.log(ticketObj)
  // alert(ticketObj)
  let longCard = `<div class="card" style="width: 60rem;">
  <div class="card-body">
    <h5 class="card-title">${ticketObj.reimbursement_type} $${ticketObj.ticketAmount}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${ticketObj.author}</h6>
    <p class="card-text">${ticketObj.description}.</p>
    <a href="#" class="card-link">More Info</a>
  </div>
</div>`;
  // ticketObj = JSON.stringify(ticketObj)
  // console.log(JSON.stringify(ticketObj))
  console.log(longCard)
  ticketArea.insertAdjacentHTML('beforeend', longCard )


 
});

// function createTicket(e) {
//   e.preventDefault();
//   let ticketArea = document.getElementById("ticket-area");
//   let ticketObj = {}
//   let description = document.getElementById("descriptionInput").value
//   let ticketAuthor;
//   let ticketAmount = document.getElementById("reimbursement-amount").value;

//   let radios = document.getElementsByName("exampleRadios")
//   let checked = ""
//   for(i=0;i<radios.length;i++){
//     if(radios[i].checked){
//       checked += radios[i].value
//     }
//   }
//   ticketObj.description = description;
//   ticketObj.reimbursement_type = checked;
//   ticketObj.author = 1;
//   ticketObj.ticketAmount = ticketAmount;
//   console.log(ticketObj)
//   // alert(ticketObj)
//   let longCard = `<div class="card" style="width: 60rem;">
//   <div class="card-body">
//     <h5 class="card-title">${ticketObj.reimbursement_type} $${ticketObj.ticketAmount}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">${ticketObj.author}</h6>
//     <p class="card-text">${ticketObj.description}.</p>
//     <a href="#" class="card-link">More Info</a>
//   </div>
// </div>`;
//   // ticketObj = JSON.stringify(ticketObj)
//   // console.log(JSON.stringify(ticketObj))
//   console.log(longCard)
//   ticketArea.insertAdjacentHTML('beforeend', longCard )


 
  
  
// };

// attempting to modularize the event listeners

// let newTicketForm = document.getElementById('ticketForm')
// newTicketForm.addEventListener("submit", createTicket())
// // let submitBtn = document.getElementById("submit-btn")
// submitBtn.addEventListener("click", createTicket());
// function createTicket(){
//   let ticketArea = document.getElementById("ticket-area");
//   let ticketObj = {}
//   let description = document.getElementById("descriptionInput").value
//   let ticketAuthor;
//   let ticketAmount = document.getElementById("reimbursement-amount").value;

//   let radios = document.getElementsByName("exampleRadios")
//   let checked = ""
//   for(i=0;i<radios.length;i++){
//     if(radios[i].checked){
//       checked += radios[i].value
//     }
//   }
//   ticketObj.description = description;
//   ticketObj.reimbursement_type = checked;
//   ticketObj.author = "Sam Jones"
//   ticketObj.ticketAmount = ticketAmount;
//   console.log(ticketObj)
//   // alert(ticketObj)
//   appendTicket(ticketObj,ticketArea)
  
// }

// function appendTicket(ticketObj,ticketArea){
//   if(ticketObj.description == null || ticketObj.ticketAmount == null){
//     ticketArea.innerHTML = `<div class="card" style="width: 60rem;">
//     <div class="card-body">
//       <h5 class="card-title">No tickets yet</h5>
      
//   </div>`;
//   }
//   let longCard = `<div class="card" style="width: 60rem;">
//   <div class="card-body">
//     <h5 class="card-title">${ticketObj.reimbursement_type} $${ticketObj.ticketAmount}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">${ticketObj.author}</h6>
//     <p class="card-text">${ticketObj.description}.</p>
//     <a href="#" class="card-link">More Info</a>
//   </div>
// </div>`;
//   // ticketObj = JSON.stringify(ticketObj)
//   // console.log(JSON.stringify(ticketObj))

//   ticketArea.insertAdjacentHTML('beforeend', longCard )


// }
// experimenting below


// let shortCard = ` <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">${ticketObj.reimbursement_type}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">Sam Jones</h6>
//     <p class="card-text">${ticketObj.description}</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>`;

let navLinks = document.getElementsByClassName("nav-link")
let cards = document.getElementsByClassName("card")
console.log(navLinks)
function navHover(){
  for(let i = 0; i<navLinks.length;i++){
    // console.log(item)
  
   
    navLinks[i].addEventListener("mouseenter",function(){
      this.style.opacity = 1;
    })
    
    
  
    navLinks[i].addEventListener("mouseleave", function(){
      this.style.opacity = .6;
    })
  }
}
navHover()

function cardsHover(){
  for(let i = 0; i<cards.length;i++){
  
  cards[i].addEventListener("mouseenter",function(){
    this.style.opacity = 1;
  })

  cards[i].addEventListener("mouseleave",function(){
    this.style.opacity = .6;
  })
}
}
cardsHover()
  // export function navHover();
  // export function cardsHover();
