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
        msgAlerttxt.innerHTML = "Falta completar algunos campos";
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

    modaltxt.innerHTML = `Se ha enviado el formulario con la siguiente información:<br> 
    Nombre: ${fullNameServ.value}<br> 
    emailServ: ${emailServ.value}<br> 
    Tel.: ${phoneServ.value}<br> 
    Tipo.: ${typeTxt}<br> 
    Foto: ${photoFile.value}<br> 
    Info Adic.: ${extraInfoServ.value}<br> 
    `;
    resetFormsServ();
}
// función que limpia el formulario
function resetFormsServ(){
    form01.reset();
    form02.reset();
    form03.reset();
}





// --------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------
// FORMULARIO CONTACTO
// -------------------------------------------------------------------

// Obtener info p�ginas de formulario
const form1 = document.getElementById("step1");
const form2 = document.getElementById("step2");
const form3 = document.getElementById("step3");

// Obtener info botones de formulario
const btnForm = document.getElementsByClassName("btn-form");
for (let i = 0; i < btnForm.length; i++){
    btnForm[i].addEventListener("click", handleMultiStep);
}
// Referencia de los campos
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const fullName =document.getElementById("fullName");
const locationInput = document.getElementById("location");
const extraInfo = document.getElementById("extrainfo");
const disclaimer = document.getElementById("disclaimer");
const check = document.getElementById("check");
check.addEventListener ("change", function () {
    btnForm[btnForm.length - 1].toggleAttribute ("disabled");
});


function handleMultiStep(e) {
    switch (e.target.id) {
        case"btn-sig-form1":
          form1.classList.toggle("d-none");
          form2.classList.toggle("d-none");
          break;
        case"btn-prev-form2":
          form2.classList.toggle("d-none");
          form1.classList.toggle("d-none");
          break;
        case"btn-sig-form2":
          form2.classList.toggle("d-none");
          form3.classList.toggle("d-none");
          break;
        case"btn-prev-form3":
          form3.classList.toggle("d-none");
          form2.classList.toggle("d-none");
          break;
        case"btn-submit":
          form3.classList.toggle("d-none");
          form1.classList.toggle("d-none");
          handleSubmit();
          break;
        default:
          break;    
    }
}

function handleSubmit() {
    // template strings
    console.log(`
    datos para procesar form
    - - - 
    /datos pesonales/
    email: ${email.value} 
    phone: ${phone.value} 
    fullName: ${fullName.value} 

    /mensaje/
    Ubicacion: ${locationInput.value}   
    Info extra: ${extraInfo.value} 

    /acuerdo/
    acuerdo: ${disclaimer.value} 
    firrma: ${check.checked} 
    `);
    resetForms()
  }
    
function resetForms() {
    form1.reset();
    form2.reset();
    form3.reset();
    btnForm[btnForm.length - 1].toggleAttribute ("disabled");
}


