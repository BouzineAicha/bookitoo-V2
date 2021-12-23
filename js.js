var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function validation() {
  var form = document.getElementsByClassName("formations");
  var email = document.getElementByI("email").value;

  var text = document.getElementById("error4");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "✔";
    text.style.color = "#00ff00";
  } else {
    form.classList.remove("invalid");
    form.classList.add("valid");
    text.innerHTML = "❌";
    text.style.color = "red";
  }
}
                              //claaaaaaaaaaaaaaaaaaaaaaaass//
// var book = newOuvrage ("title","author","price","date","language","type","email")
class Ouvrage {
            constructor(title, author,price,date,language,type,email){
                this.Title=title;
                this.Author=author;
                this.Price=price;
                this.Date=date;
                this.Language=language;
                this.Type=type;
                this.Email=email; 
            }
      //  DétailOuvrage(){
      //    return "the book" + Title + "is" + Type + "her language" +Language+
      //  }
          }


const Title = document.getElementById("title");
const Price = document.getElementById("price");
const Languages = document.getElementById("lang");
const Email = document.getElementById("email");
const Name = document.getElementById("name");
const date = document.getElementById("date");
const Type = document.getElementsByClassName("type");
var listbook =[]


// eroooooooooooryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy//


const errorTitle = document.getElementById("error1");
const errorPrice = document.getElementById("error2");
const  errorLanguages= document.getElementById("error3");
const  errorEmail= document.getElementById("error4");
const errorName = document.getElementById("error5");
const errorDate = document.getElementById("error6");
const errorType = document.getElementById("error7");




/* LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLANG */
form.addEventListener("submit", (e) => {
    let messages = [];
    if (lang.value === "" || lang.value === null) {
      messages.push(" The language of book field is not filled out  *");
    }
  
    if (lang.value.length >= 30) {
      messages.push("Title must be Less than 30 characters");
  
      errorLanguages.style.color = "red";
    }
  
    if (messages.length > 0) {
      e.preventDefault();
      errorLanguages.innerText = messages.join(", ");
    } else {
        errorLanguages.innerHTML = "✔";
        errorLanguages.style.color = "green";
    }
  });

//   ----- NAMEEEEEEEEEEEEEEEEEEEEEEE -----

form.addEventListener("submit", (e) => {
  let messages = [];
  if (Name.value === "" || Name.value === null) {
    messages.push(" The Title field is not filled out  *");
  }
 
    if (Name.value.length >= 30  ||Name. value==="Number") {
    messages.push("Title must be Less than 30 characters and not contain just  numbers");

    errorName.style.color = "red";
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorName.innerText = messages.join(", ");
    errorName.style.color = "red";
  }
else {
  errorName.innerHTML = "✔";
  errorName.style.color = "green";
  }
});
//  TITLLLLLLLLLLLLLLLLLLLLLLLLLLLLLE//
form.addEventListener("submit", (e) => {
  let messages = [];
  if (Title.value === "" || Title.value === null) {
    messages.push("Name of author field is not filled out  *");
  }
 
  if (Title.value.length >= 30) {
    messages.push("Name must be Less than 30 characters");
    errorTitle.style.color = "red";
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorTitle.innerText = messages.join(", ");
  } else {
    errorTitle.innerHTML = "✔";
    errorTitle.style.color = "green";
  }
});




//   Daaaaaaaaaaaaaaaaaaaaaaaaaateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee//
form.addEventListener("submit", (e) => {
    let messages = [];
    if (date.value === "" || date.value === null) {
      messages.push("The date field is not filled out *");
    }
  
    if (messages.length > 0) {
      e.preventDefault();
      errorDate.innerText = messages.join(", ");
    } else {
        errorDate.innerHTML = "✔";
        errorDate.style.color = "green";
    }
  });
// Priiiiiiiiiiiiiiiiiiiiiiiiiiiiiiice//
form.addEventListener("submit", (e) => {
    let messages = [];
    if (price.value === "" || price.value === null) {
      messages.push(" The Title field is not filled out  *");
    }
  
    if (price.value<= 0) {
      messages.push("Your Price is imposible");
      errorPrice.style.color = "red";
    }
  
    if (messages.length > 0) {
      e.preventDefault();
      errorPrice.innerText = messages.join(", ");
    } else {
        errorPrice.innerHTML = "✔";
        errorPrice.style.color = "green";
    }
  });
//   Radiiiiiiiiiiiiiiiiiiiiiiiiio//



form.addEventListener("submit", (e) => {
  let messages = [];
  if (email.value === "" || email.value === null) {
    messages.push(" The Title field is not filled out  *");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorEmail.innerText = messages.join(", ");
  } else {
    errorEmail.innerHTML = "✔";
      errorEmail.style.color = "green";
     
      
  }

});


form.addEventListener("submit", (e) => {
var mybook =new Ouvrage(title.value,author.value,price.value,date.value,language.value,type.value,email.value)
listbook.push(mybook)
  

});













var selectedRow = null;
function onFormSubmit(e){
 
    var formData = readFormData();
    if(selectedRow === null){

        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
    }


function readFormData() {
  var formData = {};
  formData["title"] = document.getElementById("title").value;
  formData["price"] = document.getElementById("price").value;
  formData["lang"] = document.getElementById("lang").value;
  formData["email"] = document.getElementById("email").value;
  formData["name"] = document.getElementById("name").value;
  formData["date"] = document.getElementById("date").value;
  formData['type'] = document.querySelector('input[name="radio"]:checked').value;
 
  return formData;

}

function insertNewRecord(data) {
  var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.title;
  cell5 = newRow.insertCell(1);
  cell5.innerHTML = data.name;
  cell2 = newRow.insertCell(2);
  cell2.innerHTML = data.price;
  cell6 = newRow.insertCell(3);
  cell6.innerHTML = data.date;
  cell3 = newRow.insertCell(4);
  cell3.innerHTML = data.lang;
  cell7 = newRow.insertCell(5);
  cell7.innerHTML = data.type;
  cell4 = newRow.insertCell(6);
  cell4.innerHTML = data.email;
  
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = `<input by type="button" onClick="onEdit(this)" value="Edit"  >
                     <input by type="button" onClick="onDelete(this)" value="Delete">`;
}


function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("title").value = selectedRow.cells[0].innerHTML;
  document.getElementById("price").value = selectedRow.cells[1].innerHTML;
  document.getElementById("lang") .value = selectedRow.cells[2].innerHTML;
  document.getElementById("email") .value = selectedRow.cells[3].innerHTML;
  document.getElementById("name").value = selectedRow.cells[4].innerHTML;
  document.getElementById("date").value = selectedRow.cells[5].innerHTML;
  document.getElementsByClassName("type").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.title;
  selectedRow.cells[1].innerHTML = formData.price;
  selectedRow.cells[2].innerHTML  = formData.lang;
  selectedRow.cells[3].innerHTML  = formData.email;
  selectedRow.cells[4].innerHTML = formData.name;
  selectedRow.cells[5].innerHTML = formData.date;
  selectedRow.cells[6].innerHTML = formData.type;
}
function resetForm()
{
    document.getElementById('title').value = '';
    document.getElementById('price').value = '';
    document.getElementById('lang').value = '';
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementsByClassName('type').value = '';


    selectedRow = null;
}
function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
      row = td.parentElement.parentElement;
      document.getElementById("employeeList").deleteRow(row.rowIndex);
       resetForm();
  }
}


function validate() {
  isValid = true;
  if (document.getElementById("title").value == "") {
      isValid = false;
      document.getElementById("titleValidationError").classList.remove("hide");
  } else {
      isValid = true;
      if (!document.getElementById("titleValidationError").classList.contains("hide"))
          document.getElementById("titleValidationError").classList.add("hide");
  }
  return isValid;
}





 


