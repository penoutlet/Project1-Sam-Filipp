// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })
let addbtn = document.getElementById("add-new-ticket");
addbtn.addEventListener("click", function(){

})

let submitBtn = document.getElementById("submit-btn")
  
submitBtn.addEventListener("click", function(){
  let description = document.getElementById("descriptionInput").value
  let radios = document.getElementsByName("exampleRadios")
  let checked = ""
  for(i=0;i<radios.length;i++){
    if(radios[i].checked){
    checked += radios[i].value
    }
  }
  alert("Submitted!")
  let ticketObj = {}
  ticketObj.description = description;
  ticketObj.reimbursement_type = checked;
  alert(ticketObj)
  console.log(JSON.stringify(ticketObj))

})
