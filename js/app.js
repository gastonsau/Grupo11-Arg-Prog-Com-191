// Java Script



// -------------------------------------------------------------------
// FORMULARIO SERVICIOS
// -------------------------------------------------------------------

// Obtener info páginas de formulario
const form01 = document.getElementById("formPag1");
const form02 = document.getElementById("formPag2");
const form03 = document.getElementById("formPag3");

// Obtener info botones de formulario
const btnFormServ = document.getElementsByClassName("btn-move");
for (let i = 0; i < btnFormServ.length; i++){
    btnFormServ[i].addEventListener("click", handleForms);
}

// Obtener valores campos formulario
const fullNameServ = document.getElementById("fullNameServ");
const emailServ = document.getElementById("emailServ");
const phoneServ = document.getElementById("phoneServ");

const type = document.getElementById("type");
const address = document.getElementById("address");
const photoFile = document.getElementById("photoFile");
const extraInfoServ = document.getElementById("extraInfoServ");




// Función que maneja la botonera
function handleForms(e){
    e.preventDefault();
    var msgAlerttxt = document.getElementById("msgAlert");
    // Chequea que haya cargado el mail para poder enviar el formulario
    if (emailServ.value !== "" && fullNameServ.value !== "" && phoneServ.value !== "" && type.value !== "" && address.value !== "") {
        btnFormServ[btnFormServ.length-1].removeAttribute('disabled');
        msgAlerttxt.classList.toggle("d-none");
        
    }else{
        btnFormServ[btnFormServ.length-1].setAttribute('disabled','')
        msgAlerttxt.innerHTML = "There are incomplete required fields (*). Please complete them.";
    }

   switch (e.target.id){
        case "btn-next-form01":
            form01.classList.toggle("d-none");
            form02.classList.toggle("d-none");
            break;
        case "btn-prev-form02":
            form02.classList.toggle("d-none");
            form01.classList.toggle("d-none");
            break;
        case "btn-next-form02":
            form02.classList.toggle("d-none");
            form03.classList.toggle("d-none");
            break;                            
        case "btn-prev-form03":
            form03.classList.toggle("d-none");
            form02.classList.toggle("d-none");
            break;
        case "btn-send":
            form03.classList.toggle("d-none");
            form01.classList.toggle("d-none");
            handleSend();
            break;
        default:
            break;
    }
}

// función que devuelve un mensaje con la info cargada
function handleSend(){
    var modaltxt = document.getElementById("modal-txt");
    var typeTxt = type.options[type.selectedIndex].text;

    modaltxt.innerHTML = `The form was sent successfully:<br> 
    Full Name: ${fullNameServ.value}<br> 
    Email    : ${emailServ.value}<br> 
    Phone    : ${phoneServ.value}<br> 
    Type     : ${typeTxt}<br> 
    Photo    : ${photoFile.value}<br> 
    Add. Info: ${extraInfoServ.value}<br> 
    `;
    resetFormsServ();
}
// función que limpia el formulario
function resetFormsServ(){
    form01.reset();
    form02.reset();
    form03.reset();
}



