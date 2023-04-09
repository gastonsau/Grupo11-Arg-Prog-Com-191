// Java Script

// Obtener info páginas de formulario
const form1 = document.getElementById("formPag1");
const form2 = document.getElementById("formPag2");
const form3 = document.getElementById("formPag3");

// Obtener info botones de formulario
const btnForm = document.getElementsByClassName("btn-move");
for (let i = 0; i < btnForm.length; i++){
    btnForm[i].addEventListener("click", handleForms);
}


// Obtener valores campos formulario
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const type = document.getElementById("type");
const address = document.getElementById("address");
const photoFile = document.getElementById("photoFile");
const extraInfo = document.getElementById("extraInfo");


    


// Función que maneja la botonera
function handleForms(e){
    e.preventDefault();

// Chequea que haya cargado el mail para poder enviar el formulario
if (email.value !== "" && fullName.value !== "" && phone.value !== "" && type.value !== "" && address.value !== "") {
    btnForm[btnForm.length-1].removeAttribute('disabled');
}else{
    btnForm[btnForm.length-1].setAttribute('disabled','')
}


   switch (e.target.id){
        case "btn-next-form1":
            form1.classList.toggle("d-none");
            form2.classList.toggle("d-none");
            break;
        case "btn-prev-form2":
            form2.classList.toggle("d-none");
            form1.classList.toggle("d-none");
            break;
        case "btn-next-form2":
            form2.classList.toggle("d-none");
            form3.classList.toggle("d-none");
            break;                            
        case "btn-prev-form3":
            form3.classList.toggle("d-none");
            form2.classList.toggle("d-none");
            break;
        case "btn-send":
            form3.classList.toggle("d-none");
            form1.classList.toggle("d-none");
            handleSend();
            break;
        default:
            break;
    }
}

function handleSend(){
    var modaltxt = document.getElementById("modal-txt");
    var typeTxt = type.options[type.selectedIndex].text;

    modaltxt.innerHTML = `Se ha enviado el formulario con la siguiente información:<br> 
    Nombre: ${fullName.value}<br> 
    Email: ${email.value}<br> 
    Tel.: ${phone.value}<br> 
    Tipo.: ${typeTxt}<br> 
    Foto: ${photoFile.value}<br> 
    Info Adic.: ${extraInfo.value}<br> 
    `;

    resetForms();
}


function resetForms(){

    form1.reset();
    form2.reset();
    form3.reset();

}
