const form = document.getElementById("formulario");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let formFormData = new FormData(form);
    let convertToObjet = convertDataToObjet(formFormData)
    saveObjet(convertToObjet)
    insertRowTablaRef(convertToObjet)

    } )

    function convertDataToObjet(formFormData){
        let nombre = formFormData.get("nombre");
        let apellido  = formFormData.get("apellido");
        let clave = formFormData.get("clave");
        let ciudad = formFormData.get("ciudad");
        let pais = formFormData.get("pais");
        return{
            "nombre":nombre, 
            "apellido":apellido,
            "clave":clave,  
            "ciudad":ciudad, 
            "pais":pais
        }
    }
    
    
    
    function insertRowTablaRef(convertToObjet){
    let tablaRef = document.getElementById("tabla");
    let nuevaFila = tablaRef.insertRow(-1);
    
    let nuevaCelda = nuevaFila.insertCell(0);
    nuevaCelda.textContent = convertToObjet["nombre"];

    nuevaCelda = nuevaFila.insertCell(1);
    nuevaCelda.textContent = convertToObjet["apellido"];

    nuevaCelda = nuevaFila.insertCell(2);
    nuevaCelda.textContent = convertToObjet["clave"];

    nuevaCelda = nuevaFila.insertCell(3);
    nuevaCelda.textContent = convertToObjet["ciudad"];

    nuevaCelda = nuevaFila.insertCell(4);
    nuevaCelda.textContent = convertToObjet["pais"];
    }

    function saveObjet(convertToObjet){
        let myArray= JSON.parse( localStorage.getItem("pasoData"));
        myArray.push(convertToObjet);
        let convertToArrayJSON = JSON.stringify(myArray);
        localStorage.setItem("pasoData",convertToArrayJSON);
    }
