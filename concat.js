
//* Funcion para mandar al mail

function to_mail (){
    let nombre = document.getElementById("name")
    let cuerpo = document.getElementById("textbody")
    console.log(nombre.value)
    console.log(cuerpo.value)

    cuerpo_split = cuerpo.value.split(" ") //Funcion para separar el texto en array
    console.log(cuerpo_split)
    
    //Leer y reemplazar el name por el nombre del estudiante

    cuerpo_split = reemplazar(cuerpo_split, nombre.value)


    // Todo el texto concatenado
    nuevo_cuerpo = cuerpo_split.join(" ")   // Texto deuelto otra vez como string
    console.log(nuevo_cuerpo)


    navigator.clipboard.writeText(nuevo_cuerpo);
}

//*Funcion para indormar y pegar en el roaster */

function to_inform () {

    let nombre = document.getElementById("name").value
    let cuerpo = document.getElementById("textbody").value
    console.log(nombre)
    console.log(cuerpo)

    cuerpo_split = cuerpo.split(" ") //Funcion para separar el texto en array
    console.log(cuerpo_split)

    cuerpo_split = reemplazar(cuerpo_split, nombre)
    
    // Todo el texto concatenado
    nuevo_cuerpo = cuerpo_split.join(" ")   // Texto deuelto otra vez como string
    console.log(nuevo_cuerpo)

    let inform = `----Luciano Seguel----
${creadordate()}
${nuevo_cuerpo}

Warmly,
Luciano Seguel
Mentor Serving BYU-Pathway Worldwide
  WhatsApp: +54 9 2615894553
Schedule a chat: https://calendly.com/lucianitoseguel/luciano-seguel-mentoring`

   console.log (inform)
   navigator.clipboard.writeText(inform);

}





function reemplazar ( texto, nombre) {
//Leer y reemplazar el name por el nombre del estudiante

    for (let i = 0; i < texto.length; i++) {

        if (texto[i] == "[name]") {

            texto[i] =  nombre
            console.log(texto[i])
        }
        
        
    
    }  

    return texto
}


function creadordate  (){

    let weekdays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]

    let fecha = new Date()
    let weekday = fecha.getDay()
    if (weekday == 0) {
        weekday = "Dom"
    } else if (weekday == 1) {
        weekday = "Lun"
    } else if (weekday == 2) {
        weekday = "Mar"
    } else if (weekday == 3) {
        weekday = "Mie"
    } else if (weekday == 4) {
        weekday = "Jue"
    } else if (weekday == 5) {
        weekday = "Vie"
    } else if (weekday == 6) {
        weekday = "Sab"
    }
   
    let dia = fecha.getDate()
    let mes = fecha.getMonth() + 1
    let anio = fecha.getFullYear()
    let hora = fecha.getHours()
    let minuto = fecha.getMinutes()
    if (minuto < 10) {
        minuto = "0" + minuto
    }


    let fecha_formateada = weekday + " " +  dia + "/" + mes + "/" + anio + " " + hora + ":" + minuto

    console.log(fecha_formateada)
    return fecha_formateada
    

}