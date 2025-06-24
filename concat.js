
//* Funcion para mandar al mail
let contando = 0



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

    counter()
    navigator.clipboard.writeText(nuevo_cuerpo);

  


}

//Esta funicion es para renderizar el mensaje desde la tabla 
function final_text_table(nombre){

    firstname = nombre.split(" ")
    firstname = firstname[0]
    console.log(firstname)
    
   
    let cuerpo = document.getElementById("textbody")
   
    console.log(cuerpo.value)

    cuerpo_split = cuerpo.value.split(" ") //Funcion para separar el texto en array
    console.log(cuerpo_split)
    
    //Leer y reemplazar el name por el nombre del estudiante

    cuerpo_split = reemplazar(cuerpo_split, firstname)


    // Todo el texto concatenado
    nuevo_cuerpo = cuerpo_split.join(" ")   // Texto deuelto otra vez como string
    console.log(nuevo_cuerpo)

    counter()
  
   return (nuevo_cuerpo)

}

function to_whatsapp_table(nombre) {

    //Adquiere el primer nombre del estudiante
   firstname = nombre.split(" ")
    firstname = firstname[0]
    console.log(firstname)
    
    
    let cuerpo = document.getElementById("textbody").value
 
    console.log(cuerpo)

    cuerpo_split = cuerpo.split(" ") //Funcion para separar el texto en array
    console.log(cuerpo_split)

    cuerpo_split = reemplazar(cuerpo_split, firstname)
    
    // Todo el texto concatenado
    nuevo_cuerpo = cuerpo_split.join(" ")   // Texto deuelto otra vez como string
    console.log(nuevo_cuerpo)

    let inform = `[${creadordate()}] Luciano Seguel: ${nuevo_cuerpo}`

   console.log (inform)

   navigator.clipboard.writeText(inform);

}

//Funcion para informar whatsapp enviados

function to_whatsapp() {

   
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

    let inform = `[${creadordate()}] Luciano Seguel: ${nuevo_cuerpo}`

   console.log (inform)

   navigator.clipboard.writeText(inform);

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


//Funcion para informar correos enviados
function to_inform_mail_table (nombre) {

    firstname = nombre.split(" ")
    firstname = firstname[0]
    console.log(firstname)

    let cuerpo = document.getElementById("textbody").value
    console.log(nombre)
    console.log(cuerpo)

    cuerpo_split = cuerpo.split(" ") //Funcion para separar el texto en array
    console.log(cuerpo_split)

    cuerpo_split = reemplazar(cuerpo_split, firstname)
    
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

        if (texto[i] == "[name]," ) {

            texto[i] =  nombre + ","
            console.log(texto[i])
        } else if (texto[i] == "[name]"){
            texto[i] =  nombre 
            console.log(texto[i])
        } else if (texto[i] == "[name]!"){
            texto[i] =  nombre + "!"
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


    let fecha_formateada = dia + "/" + mes + "/" + anio + " " + hora + ":" + minuto

    console.log(fecha_formateada)
    return fecha_formateada
    

}

function counter() {

    let contador = document.getElementById("contador")
    
    
    contando += 1
    contador.textContent = "Contador: " + contando
}


const student_list = [
    ["Luciano Seguel", "luciano.seguel@outlook.com","5492615894553"],
    ["Luciano Seguel", "luciano.seguel@outlook.com","46654654"]
]


let table_body = document.getElementById("tbody")
 
for (let i = 0; i < student_list.length; i++){

    let row = document.createElement("tr")

    let namecell = document.createElement("td")
    namecell.textContent = student_list[i][0];
    

    let emailcell = document.createElement("td")
    emailcell.textContent = student_list[i][1];

    let phonecell = document.createElement("td")
    phonecell.textContent = student_list[i][2];


    //Whatsapp button sender
    let sendWhatsapp = document.createElement("td")
    sendWhatsapp.textContent = "Send WSP"
    sendWhatsapp.addEventListener("click", function(){
        //Open window to send Whatsapp
       let message = final_text_table(student_list[i][0]) //renderiza el mensaje para copiarlo y enviarlo
        console.log(message)
        to_whatsapp_table(student_list[i][0]) //Copia para informar
        window.open(`https://api.whatsapp.com/send?phone=${student_list[i][2]}&text=${message}`, '_blank');
        
        
                
    })


    //EMAIL button sender
    let sendEmail = document.createElement("td")
    sendEmail.textContent = "Send Mail"
    sendEmail.addEventListener("click", function(){
        //Open window to send Mail
       let message = final_text_table(student_list[i][0]) //renderiza el mensaje para copiarlo y enviarlo
        console.log(message)
        to_inform_mail_table(student_list[i][0]) //Copia para informar
        
        let subjet = document.getElementById("subject").value
        
        window.open(`mailto:${student_list[i][1]}?subject=${subjet}&body=${message}`, '_blank');
        
        
                
    })


    row.appendChild(namecell)
    row.appendChild(emailcell)
    row.appendChild(phonecell)

    row.appendChild(sendWhatsapp)
    row.appendChild(sendEmail)
    



   table_body.appendChild(row)
}
