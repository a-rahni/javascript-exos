import { CreateColumn, CreateColumnButton } from "./js/components/create-column.js";
import { AddClickEventOnDeleteButton } from "./utils/AddEventListener.js";

const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const country = document.querySelector("#country");
const submitButton = document.querySelector("#submit_button");
const usersTableBody = document.querySelector("#users_list");
/*
const firstNameError = document.querySelector("#err_first_name");
const lastNameError = document.querySelector("#err_last_name");
const emailError = document.querySelector("#err_email");
const phoneNumberError = document.querySelector("#err_phone_number");
const countryError = document.querySelector("#err_country");
*/

const formFields = [firstName, lastName, email, country, phoneNumber];

// # Tant que tous les champs ne sont pas remplis, ne rien ajouter au tableau
// # Les messages d'erreurs doivent disparaitre pour les champs remplis
//     Si dans une précédente validation ces champs étaient vides

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    if (!isFormValid1(formFields)) {
      for (const field of formFields) {
        displayErrorMessages(field); // pour afficher les messages d'erreurs
      }
      return;
    }
  
    const row = document.createElement("tr");
    for (const field of formFields) {
      const column = CreateColumn(field.value);
      row.appendChild(column);
      displayErrorMessages(field); // pour supprimer le message d'erreur si existait avant
    }

    //const columnB = CreateColumnButton("supprimer",".deleteB");
    const columnB = CreateColumnButton("supprimer");
    AddClickEventOnDeleteButton(columnB);
    row.appendChild(columnB);

    usersTableBody.appendChild(row);
  
    emptyForm(formFields);
    //emptyErrors(formFields);
    
  });
  


  // dans l'html l'element erreur utilise id avec un nom err_name
// ce qui permet de deduire le nom de error element --> pas besoin de creer un const pour chaque error
  function displayErrorMessages(field) {
    const fieldDisplayName = field.getAttribute("data-name");
    const errorField = document.querySelector(`#err_${field.name}`);
    if (!field.value) {
      errorField.innerText = `${fieldDisplayName} cannot be empty`;
      errorField.classList.add("error");
    } else {
      errorField.innerText = "";
    }
  }
  
  function isFormValid1(formFields) {
    // return formFields.every((field) => field.value);
    return formFields.every((field) => field.value !== "");
  }
  
  function isFormValid2(formFields) {
    for (const field of formFields) {
      if (!field.value) {
        return false;
      }
    }
    return true;
  }
  
  function emptyForm(formFields) {
    for (const field of formFields) {
      field.value = "";
    }
  }

  /* utiliser a la place displayErrorMessage
  function emptyErrors(formFields) {
    for (const field of formFields) {
        const errorField = document.querySelector(`#err_${field.name}`);
        errorField.innerText = "";
        errorField.classList.remove("error");
    }
  }
*/








/*

const firstNameError = document.querySelector("#err_first_name");
const lastNameError = document.querySelector("#err_last_name");
const emailError = document.querySelector("#err_email");
const phoneNumberError = document.querySelector("#err_phone_number");
const countryError = document.querySelector("#err_country");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (!firstName.value) {
    firstNameError.innerText = "Prenom cannot be empty";
    firstNameError.style.color = "red";
  } else {
    firstNameError.innerText = "";
  }

  if (!lastName.value) {
    lastNameError.innerText = "Nom cannot be empty";
    lastNameError.style.color = "red";
  } else {
    lastNameError.innerText = "";
  }

  if (!email.value) {
    emailError.innerText = "Email cannot be empty";
    emailError.style.color = "red";
  } else {
    emailError.innerText = "";
  }

  if (!phoneNumber.value) {
    phoneNumberError.innerText = "Phone cannot be empty";
    phoneNumberError.style.color = "red";
  } else {
    phoneNumberError.innerText = "";
  }

  if (!country.value) {
    countryError.innerText = "Country ne peut pas être vide";
    countryError.style.color = "red";
  } else {
    countryError.innerText = "";
  }

  if (!formFields.some((field) => !field.value)) {
    const row = document.createElement("tr");
    for (const field of formFields) {
      const column = CreateColumn(field.value);
      row.appendChild(column);
    }

    usersTableBody.appendChild(row);
  }
  return;
});

*/



/*
// # Tant que tous les champs ne sont pas remplis, ne rien ajouter au tableau
// # Les messages d'erreurs doivent disparaitre pour les champs remplis
//     Si dans une précédente validation ces champs étaient vides

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

    //firstNameError.textContent=''
    firstNameError.innerText='';
    lastNameError.innerText='';
    emailError.innerText='';
    phoneNumberError.innerText='';
    countryError.innerText='';

    let error = false;

  if (!firstName.value) {
    firstNameError.innerText = "Prenom cannot be empty";
    firstNameError.style.color = "red";
    error = true;
  }

  if (!lastName.value) {
    lastNameError.innerText = "Nom cannot be empty";
    lastNameError.style.color = "red";
    error = true;
  }

  if (!email.value) {
    emailError.innerText = "Email cannot be empty";
    emailError.style.color = "red";
    error = true;
  }

  if (!phoneNumber.value) {
    phoneNumberError.innerText = "Phone cannot be empty";
    phoneNumberError.style.color = "red";
    error = true;
  }

  if (!country.value) {
    countryError.innerText = "Country ne peut pas être vide";
    countryError.style.color = "red";
    error = true;
  }

  if(!error){
    const row = document.createElement("tr");
    for (const field of formFields) {
        const column = CreateColumn(field.value);
        row.appendChild(column);
    }
     usersTableBody.appendChild(row);
  }

  
});

*/









/* 
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const row = document.createElement("tr");

  for (const field of formFields) {
    const column = CreateColumn(field.value);
    row.appendChild(column);
  }

  usersTableBody.appendChild(row);
});
 */


/*
function CreateColumn(textContent) {
  const column = document.createElement("td");
  column.innerText = textContent;
  return column;
}
*/



/*
let tabElements=[firstName,lastName,email,phoneNumber,country];
foreach ...creer des td
 */

/*
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const row = document.createElement("tr");
  const firstNameColumn = document.createElement("td");
  firstNameColumn.innerText = firstName.value;

  const lastNameColumn = document.createElement("td");
  lastNameColumn.innerText = lastName.value;

  const emailColumn = document.createElement("td");
  emailColumn.innerText = email.value;

  const phoneNumberColumn = document.createElement("td");
  phoneNumberColumn.innerText = phoneNumber.value;

  const countryColumn = document.createElement("td");
  countryColumn.innerText = country.value;

  row.append(
    lastNameColumn,
    firstNameColumn,
    emailColumn,
    countryColumn,
    phoneNumberColumn
  );

  usersTableBody.appendChild(row);
});
*/