var Title = document.getElementById("title");
var Price = document.getElementById("price");
var Languages = document.getElementById("lang");
var Email = document.getElementById("email");
var Name = document.getElementById("name");
var date = document.getElementById("date");
var Type = document.getElementsByClassName("type");
var print_div = document.getElementById("savet");
var table = document.getElementById("bklist");
var para = document.getElementById("paragraphe");
// var btnedit = docemont.getElementById("btnedit")
var listbook = [];
var no_valid = 0;

// localStorage.removeItem("listOuvrage");

// eroooooooooooryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy//

var errorTitle = document.getElementById("error1");
var errorPrice = document.getElementById("error2");
var errorLanguages = document.getElementById("error3");
var errorEmail = document.getElementById("error4");
var errorName = document.getElementById("error5");
var errorDate = document.getElementById("error6");
var errorType = document.getElementById("error7");

/* LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLANG */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  if (lang.value === "" || lang.value === null) {
    errorLanguages.innerHTML =
      " The language of book field is not filled out  *";
    no_valid++;
  } else {
    errorLanguages.innerHTML = "✔";
    errorLanguages.style.color = "green";
  }
});

//   ----- NAMEEEEEEEEEEEEEEEEEEEEEEE -----

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];

  if (Name.value === "" || Name.value === null) {
    errorName.innerHTML = " The Title field is not filled out  *";
    no_valid++;
  } else if (Name.value.length >= 30 || Name.value === "Number") {
    errorName.innerHTML =
      "Title must be Less than 30 characters and not contain just  numbers";
    errorName.style.color = "red";
    no_valid++;
  } else {
    errorName.innerHTML = "✔";
    errorName.style.color = "green";
  }
});
//  TITLLLLLLLLLLLLLLLLLLLLLLLLLLLLLE//
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  if (Title.value === "" || Title.value === null) {
    errorTitle.innerHTML = "Name of author field is not filled out  *";
    no_valid++;
  } else if (Title.value.length >= 30) {
    errorTitle.innerHTML = "Name must be Less than 30 characters";
    errorTitle.style.color = "red";
    no_valid++;
  } else {
    errorTitle.innerHTML = "✔";
    errorTitle.style.color = "green";
  }
});

//   Daaaaaaaaaaaaaaaaaaaaaaaaaateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee//

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  if (date.value == "") {
    errorDate.innerHTML = "The date field is not filled out*";
    no_valid++;
  } else {
    errorDate.innerHTML = "✔";
    errorDate.style.color = "green";
  }
});
// Priiiiiiiiiiiiiiiiiiiiiiiiiiiiiiice//
var regexPrice = /^((\d{1,3}|\s*){1})((\,\d{3}|\d)*)(\s*|\.(\d{2}))$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];

  if (price.value !== "") {
    if (regexPrice.test(price.value)) {
      errorPrice.innerHTML = "✔";
      price.style.border = "green";
    } else {
      errorPrice.innerHTML =
        "please enter price without /^(((w+)(.)(w+))|((w+)))(@)(w+)(.)(w+)$/ ";
      no_valid++;
    }
  } else {
    errorPrice.innerHTML = "The Title field is not filled out*";
    no_valid++;
  }
});

// typeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee//

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  if (!(Type[0].checked || Type[1].checked || Type[2].checked)) {
    errorType.innerHTML = "The Type field is not filled out  *";
    no_valid++;
  } else {
    errorType.innerHTML = "✔";
    errorType.style.color = "green";
  }
});

//   Emaillllllllllllllllllllll//

var regexEmail = /^(((\w+)(\.)(\w+))|((\w+)))(@)(\w+)(\.)(\w+)$/;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  if (Email.value !== "") {
    if (regexEmail.test(Email.value)) {
      errorEmail.innerHTML = "✔";
      Email.style.border = "green";
    } else {
      errorEmail.innerHTML =
        "please enter email contains /^(((w+)(.)(w+))|((w+)))(@)(w+)(.)(w+)$/, Or just Lutter ";
      no_valid++;
    }
  } else {
    errorEmail.innerHTML = "The Title field is not filled out*";
    no_valid++;
  }
});

// no_valide++
class Ouvrage {
  constructor(title, author, price, date, language, type, email) {
    this.Title = title;
    this.Author = author;
    this.Price = price;
    this.Date = date;
    this.Language = language;
    this.Type = type;
    this.Email = email;
  }
  DétailOuvrage() {
    return (
      "" +
      this.Title +
      "is" +
      this.Type +
      "in the" +
      this.Language +
      ", written by" +
      this.Author +
      "and published on the" +
      this.Date +
      " . The price of" +
      this.Title +
      "is" +
      this.Price +
      "Dhs"
    );
  }
}
var listOvrage = JSON.parse(localStorage.getItem("listOuvrage"));
if (listOvrage != null) {
  for (i = 0; i < listOvrage.length; i++) {
    var ouvrage = new Ouvrage(
      listOvrage[i].Title,
      listOvrage[i].Author,
      listOvrage[i].Price,
      listOvrage[i].Date,
      listOvrage[i].Language,
      listOvrage[i].Type,
      listOvrage[i].Email
    );
    listbook.push(ouvrage);
  }
}

// tableauuuuuuuuuuu//
var tbody = document.getElementById("bklist");
function insertNewRecord() {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  for (i = 0; i < listbook.length; i++) {
    var newRow = table.insertRow(table.length);
    newRow.insertCell(0).innerHTML = listbook[i].Title;
    newRow.insertCell(1).innerHTML = listbook[i].Author;
    newRow.insertCell(2).innerHTML = listbook[i].Price;
    newRow.insertCell(3).innerHTML = listbook[i].Date;
    newRow.insertCell(4).innerHTML = listbook[i].Language;
    newRow.insertCell(5).innerHTML = listbook[i].Type;
    newRow.insertCell(6).innerHTML = listbook[i].Email;
    newRow.insertCell(
      7
    ).innerHTML = `<input by type="button" onClick="onEdit(this)" value="Edit"  >
    <input by type="button" onClick="onDelete(this)" value="Delete">`;
  }
}

function sort_alpha() {
  listbook.sort(function (a, b) {
    if (a.Title.toUpperCase() < b.Title.toUpperCase()) {
      return -1;
    }
  });
}
insertNewRecord();
form.addEventListener("submit", (e) => {
  if (no_valid == 0) {
    var xType = "";
    for (i = 0; i < Type.length; i++) {
      if (Type[i].checked) {
        xType = Type[i].value;
      }
    }
    var mybook = new Ouvrage(
      Title.value,
      Name.value,
      Price.value,
      date.value,
      Languages.options[Languages.selectedIndex].value,
      xType,
      Email.value
    );
    paragraphe.innerHTML = mybook.DétailOuvrage();
    listbook.push(mybook);
    sort_alpha();
    localStorage.setItem("listOuvrage", JSON.stringify(listbook));
    tbody.innerHTML = "";
    insertNewRecord();

    // resetForm();
  }
});
var selectedRow = null;
function onFormSubmit(e) {
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
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
  formData["type"] = document.querySelector(
    'input[name="radio"]:checked'
  ).value;

  return formData;
}

// form.addEventListener("submit",function onEdit(td) {
function onEdit(btn) {
  var selectedRow = btn.parentElement.parentElement.rowIndex - 1;
  var X = table.rows[selectedRow];
  if (btn.value == "Edit") {
    Title.value = X.cells[0].innerHTML;
    Name.value = X.cells[1].innerHTML;
    Price.value = X.cells[2].innerHTML;
    date.value = X.cells[3].innerHTML;
    Languages.value = X.cells[4].innerHTML;
    for (i = 0; i < Type.length; i++) {
      if (X.cells[5].innerHTML == Type[i].value) {
        Type[i].checked = true;
      }
    }
    Email.value = X.cells[6].innerHTML;

    btn.value = "Save";
    document.getElementById("Done").setAttribute("disabled", "true");
  } else {
    listbook[selectedRow].Title = Title.value;
    listbook[selectedRow].Author = Name.value;
    listbook[selectedRow].Price = Price.value;
    listbook[selectedRow].Language = Languages.value;
    for (i = 0; i < Type.length; i++) {
      if ((Type[i].checked = true)) {
        listbook[selectedRow].Type = Type[i].value;
      }
    }
    listbook[selectedRow].Email = Email.value;
    table.innerHTML = "";
    sort_alpha();
    localStorage.setItem("listOuvrage", JSON.stringify(listbook));
    insertNewRecord();
    btn.value = "Edit";

    document.getElementById("Done").removeAttribute("disabled");
    resetForm();
  }
}

// function updateRecord(formData) {
//   selectedRow.cells[0].innerHTML = formData.title;
//   selectedRow.cells[1].innerHTML = formData.name;
//   selectedRow.cells[2].innerHTML  = formData.Price;
//   selectedRow.cells[3].innerHTML  = formData.date;
//   selectedRow.cells[4].innerHTML = formData.lang;
//   selectedRow.cells[5].innerHTML = formData.type;
//   selectedRow.cells[6].innerHTML = formData.email;
// }
function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("lang").value = "";
  document.getElementById("date").value = "";
  document.getElementsByClassName("type").value = "";
  document.getElementById("email").value = "";

  selectedRow = null;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement.rowIndex - 1;
    listbook.splice(row, 1);
    localStorage.setItem("listOuvrage", JSON.stringify(listbook));
    table.innerHTML = "";
    resetForm();
    insertNewRecord();
  }
}

// function validate() {
//   isValid = true;
//   if (document.getElementById("title").value == "") {
//     isValid = false;
//     document.getElementById("titleValidationError").classList.remove("hide");
//   } else {
//     isValid = true;
//     if (!document.getElementById("titleValidationError").classList.contains("hide"))
//     document.getElementById("titleValidationError").classList.add("hide");
//   }
//   return isValid;
// }

savet.addEventListener("click", function printData() {
  var div = document.getElementById("employeeList");
  newwin = window.open("");
  newwin.document.write(div.outerHTML);
  newwin.print();
  newwin.close();
});
