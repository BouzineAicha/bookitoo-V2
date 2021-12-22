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
                              // claaaaaaaaaaaaaaaaaaaaaaaass//

// class Ouvrage {
//             constructor(title, author,price,date,language,type,email){
//                 this.Title=title;
//                 this.Author=author;
//                 this.Price=price;
//                 this.Date=date;
//                 this.Language=language;
//                 this.Type=type;
//                 this.Email=email; 
//             }
       
// }
// var book = new Ouvrage ("aicha","omare","price","date","language","type","email")
// document.getElementById("employeeList").innerHTML="The new book is " + book.title(aicha) + ".";

const Title = document.getElementById("title");
const Price = document.getElementById("price");
const Languages = document.getElementById("lang");
const Email = document.getElementById("email");
const Name = document.getElementById("name");
const date = document.getElementById("date");
const Type = document.getElementsByClassName("type");


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
  if (Namne.value === "" || Namne.value === null) {
    messages.push(" The Title field is not filled out  *");
  }
 
    if (Namne.value.length >= 30  ||Namne. value==="Number") {
    messages.push("Title must be Less than 30 characters and not contain just  numbers");

    errorNamne.style.color = "red";
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorNamne.innerText = messages.join(", ");
    errorNamne.style.color = "red";
  }
else {
  errorNamne.innerHTML = "✔";
  errorNamne.style.color = "green";
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
if (!(Radio[0].checked||Radio[1].checked||Radio[2].checked)){

    errorRadio.innerHTML = "The Type field is not filled out  *";
    
}
else{

errorRadio.innerHTML = "✔";
errorRadio.style.color = "green";
}

});




 


