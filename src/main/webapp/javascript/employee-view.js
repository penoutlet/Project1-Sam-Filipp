let form = document.getElementById("reimbursementForm")
let fancyRadios = document.getElementsByClassName("fancy-radios")
function getFancyRadios(){
    let checked=""
    for(i=0;i<fancyRadios.length;i++){
      if(fancyRadios[i].checked){
      checked += fancyRadios[i].value
      }
    }
    // console.log(checked)
    return checked;
  }
form.addEventListener("submit", function(e){
    e.preventDefault()
    let description = document.getElementById("descriptionInput").value;
    let reimburse_amount = document.getElementById("reimbursement-amount").value
    let reimbursement_type = getFancyRadios();

    let reimbursement = {}
    reimbursement.description = description;
    reimbursement.amount = reimburse_amount;
    reimbursement.type = reimbursement_type;
    // alert(reimbursement)
    console.log(reimbursement)
    appendReimbursement(reimbursement)
})

function addListeners(){
    let option1 = document.getElementById("option1")
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
  
  }
  addListeners()

  function appendReimbursement(reimbursement){
      let longCard = `<div class="card text-center ticket-panel" style="width: 60rem;">
      <div class="card-body">
        <h5 class="card-title border">$${reimbursement.amount}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${reimbursement.type}</h6>
        <p class="card-text">${reimbursement.description}.</p>
        <a href="#" class="card-link">More Info</a>
      </div>
    </div>`;

    let ticketArea = document.getElementById("tickets")
      ticketArea.insertAdjacentHTML('beforeend', longCard )

  }
  