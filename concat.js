
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
    navigator.clipboard.writeText(reemplazar_0A( nuevo_cuerpo));

  


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

   navigator.clipboard.writeText(reemplazar_0A( inform));

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

   navigator.clipboard.writeText(reemplazar_0A( inform));

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

   navigator.clipboard.writeText(reemplazar_0A( inform));

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

   navigator.clipboard.writeText(reemplazar_0A( inform));

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

function reemplazar_0A (texto){
    text_array = texto.split(" ")
    console.log(text_array)
    for (let i = 0; i < text_array.length; i++) {

        if (text_array[i] == "%0A" ) {

            text_array[i] =  " "
            console.log(text_array[i])
        }
        
        
    }  

    return text_array.join(" ")
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
    ["Aaron Nathaniel Blakley", "sirorinar@gmail.com"],
    ["Amy Gamez", "luisjrgamez@gmail.com","19857743380"],
    ["Brittyn Lee Werner", "brittyn.owens@outlook.com",""],
    ["Aimoto Tammy Mata'utia", "anoaloifale4life.pa@gmail.com",""],
    ["Alexandra Lopez Hernandez", "alexmnrlopez@gmail.com"],
    ["Alexandra Paige Nielsen", "alliecat811@icloud.com"],
    ["Alexandria Christine Alles", "alexandriaalles@yahoo.com"],
    ["Aristhide Nobanza", "nobanza@gmail.com"],
    ["Ashton McKenney Morris", "mhbelliston@comcast.net"],
    ["Aubrey Thayn", "aubreythayn@gmail.com"],
    ["Bailey Alves", "bailey.alves98@gmail.com", "12086958677"], 
    ["Bianca de Oliveira Souza", "biancaosouzaz@gmail.com", "14357206088"],
    ["Brinlee Cole", "brincole05@icloud.com"],
    ["Charlotte Davis", "charlottaunicorns@outlook.com",""],
    ["Cayla Bowen", "cayla.wheeler19@gmail.com", "15057160095"],
    ["Christina Mariko Campbell", "Christina@caryendo.com"],
    ["Claudia Liliana Canelas Lobo", "claudiacanelaslobo@gmail.com"],
    ["Dalen Andrew James", "dalenjames0@gmail.com", "18016683677"],
    ["Dana Taimalelagi Yamauchi", "lagijosh@gmail.com"],
    ["Darcie Burrows", "darcieruvalcaba@gmail.com"],
    ["Deborah Anne Larson", "dizdeb3@msn.com"],
    ["Devin Lynn Merrell", "deviboi@gmail.com"],
    ["Drelyn Tate Roker", "briefinglaw@gmail.com"],
    ["Eliza Charlene Awong", "charleneawong01@gmail.com"],
    ["Elizabeth Michelle Stoddard", "z_dog_90@hotmail.com", "14802581540"],
    ["Emmanuella Lorena Rogers", "rena27aj@icloud.com", "233550363277"],
    ["Ericka Martinez Olivares", "ericka_martinez27@yahoo.com"],
    ["Felipe Narcizo Leza", "f_leza@hotmail.com", "12104752540"],
    ["Francisco Manases Ipiña Herrera", "eslabon010@gmail.com"],
    ["Gabriela Joset Suarez", "Gabysu25@gmail.com", "18018352761"],
    ["Georgina Mendoza", "guzgina@gmail.com"],
    ["Icmer Moises Rodriguez", "moises.franco702@gmail.com", "15056598112"],
    ["Jacob Robert Clark", "jakeclark426@gmail.com", "18015544152"],
    ["Jacob Thompson", "jacobethompson18@gmail.com"],
    ["James Eric Leight", "james.e.leight@gmail.com"],
    ["Jennifer Ann Toledo", "jenniferatoledo19@gmail.com"],
    ["Jennifer Daniel", "littlejendaniel@gmail.com"],
    ["Jessica Rosales", "Jessixarosales@gmail.com"],
    ["Joe Isael Sercovich Velasquez", "joe.sercovich@gmail.com"],
    ["Jett Roche", "onehandcatch@outlook.com"],
    ["Johana Guadalupe Bravo", "johanabravo16@yahoo.com", "12138422702"],
    ["John Christopher Kleckner", "johnklcknr@gmail.com"],
    ["John Clarke", "ejc201921@gmail.com"],
    ["John Garrison Graham", "JohnGGraham@gmail.com"],
    ["Kayla Marie Olsen", "KaylaOlsen@comcast.net"],
    ["Kennia Andrea Veizaga Teran", "kenniaavt@gmail.com", "59161685110"],
    ["Laura Arely Martinez Ontiveros", "lauraelizarraraz30@gmail.com", "13852088884"],
    ["Lavinia Dean", "Laviniadean26@gmail.com"],
    ["Liliana Rebecca McKenzie", "lilimcknz@gmail.com"],
    ["Lindsay Ann Germer", "findserendipityadventures@gmail.com", "18016689496"],
    ["Lindsey Marie Peine", "peinelindsey@gmail.com"],
    ["Losaline Lili Latu", "iluvmyboats@yahoo.com"],
    ["Manuia P Bridge", "anuhea2410@gmail.com", "18176097553"],
    ["Marc Aaron Guy The Younger", "theyoungerbear@cs.com"],
    ["Marina Lima de Souza", "marinalimadesouza1@gmail.com", "13855494730"],
    ["Mark Nielson", "mnielson321@gmail.com"],
    ["Matthew Landon Moulton", "moultonml8@gmail.com"],
    ["Merari Edem", "r.edem0508@gmail.com", "18019194988"],
    ["Mery Nalbandyan Khurshudyan", "Meri.rohm@gmail.com"],
    ["Micah Ann Stepan", "Micahstepan@gmail.com"],
    ["Mikaila Hansen", "hansenmikaila306@gmail.com"],
    ["Natali Seidmann Banuelos", "nataliseidmann@hotmail.com"],
    ["Orlando Eliezer Vivas Ramirez", "oralvivas122@gmail.com"],
    ["Pablo Christopher Hinojosa Iturra", "p.hinojosa2511@gmail.com", "18013859506"],
    ["Quin Luke Woolstenhulme", "quinwools88@gmail.com", "12083604690"],
    ["Rebecca Ann Watson", "therealbeckywatson@gmail.com", "528132406242"],
    ["Rebecca Rose Garcia Voigt", "rebeccagarcia2007@gmail.com", "16086880497"],
    ["Renan Laurentis", "renan.laurentis@hotmail.com"],
    ["Sandra Marcela Mendoza", "sandymmg1@gmail.com", "18635109855"],
    ["Sarah Ashlie Patterson", "sarahashlierandall@gmail.com"],
    ["Shanna Aleta Wagner", "kountryfrog@gmail.com", "19723952549"],
    ["Shannon Allwood", "Shannon.allwood@gmail.com", "16412170270"],
    ["Shawni Lynn Thomas", "shawnilwiliams@gmail.com", "14358301229"],
    ["Sheryl Johnson", "GrannyEnchanted1@Gmail.Com"],
    ["Simone Bagni", "zime83@googlemail.com", "18014935651"],
    ["Susan Maria Cheatham", "susan.cheatham@imail.org"],
    ["Uriel Coria", "urielfotos2001@gmail.com", "18016697786"],
    ["Valishia Sue Hawkins", "valishiahawkins@gmail.com"],
    ["Wilma Azucena Adams", "azuprtl@gmail.com"],
    ["Yvette Azucena Flores", "yvette458@gmail.com"],
    ["Lesly Susset Menacho Pino de Alfaro", "leslymenacho@hotmail.com"],
    ["Lorinda Field", "fishin.fields@gmail.com", "14357641686"],
    ["Macey Branson", "Maceybranson@gmail.com"],
    ["Michael Joseph Smith", "mike@smith8.org"],
    ["Olha Victorovna Smyrnova", "olya35968@gmail.com"],
    ["Pamela Fontenele", "pamelacfontenele@gmail.com", "+18019701789"],
    ["Peter James Babcock", "peterb@saefl.com"],
    ["Rodrigo Toledo Garcés", "rodrigo.toledo.garces@gmail.com"],
    ["Sandra Chavez", "sandrachavez_3@hotmail.com", "18016167470"],
    ["Sierra Nicole Eldredge", "sierraeldredge34@gmail.com"],
    ["Susanah Hyde", "shyde70@icloud.com"],
    ["Theresa Marie Pitts", "thempitts@gmail.com"],




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
