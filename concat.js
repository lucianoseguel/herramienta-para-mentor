
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

    let inform = `[${creadordate()}] Luciano Seguel: ${nuevo_cuerpo} %0A 
            Luciano Seguel %0A 
            Mentor %0A 
            Springboard %0A 
            Serving BYU-Pathway Worldwide`

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

    let inform = `[${creadordate()}] Luciano Seguel: ${nuevo_cuerpo} %0A 
            Luciano Seguel %0A 
            Mentor %0A 
            Springboard %0A 
            Serving BYU-Pathway Worldwide`

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
Mentor
Springboard
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
Mentor
Springboard
Serving BYU-Pathway Worldwide
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


function disccounter() {

    let contador = document.getElementById("contador")
    
    
    contando -= 1
    contador.textContent = "Contador: " + contando
}


const student_list = [
   ["Aaron Nathaniel Blakley", "sirorinar@gmail.com"],
  ["Amy Gamez", "luisjrgamez@gmail.com","19857743380"],
  ["Amy J Zullo", "amyjzullo@gmail.com" ],
  ["Amy Lynn Laurilla", "amylaurilla@gmail.com"],
  ["Ana Bessi Ortez Mendoza", "concord1988@gmail.com", "17042240215"],
  ["Andrea Arciniega Moring", "amoringgrl@gmail.com", "17194404366"],
    ["Andrea Leyva Blancas", "caroley1203@gmail.com", "522297165259"],
    ["Andrea Ruth Fisk", "dreafisk@gmail.com", "18014400069"],
    ["Andrew Call Swallow", "jediandrew@cox.net", "14805996568"],
    ["Andrew Mathews", "amathjam@gmail.com"],
    ["Andrew Moroni DeCamps", "andrew.decamps@gmail.com", "18325744481"],

  ["Aristhide Nobanza", "nobanza@gmail.com"],
  ["Aubrey Thayn", "aubreythayn@gmail.com"],
  ["Bailey Alves", "bailey.alves98@gmail.com", "12086958677"],
  ["Brinlee Cole", "brincole05@icloud.com"],
  ["Charlotte Davis", "charlottaunicorns@outlook.com",""],
  ["Cayla Bowen", "cayla.wheeler19@gmail.com", "15057160095"],
  ["Christina Mariko Campbell", "Christina@caryendo.com"],
  ["Cristy Wiser", "wisermama@gmail.com"],
  ["Cole Woolford","c.s.woolford@gmail.com","14694960256"],
  ["Cristina Loya", "cristinaloya9@gmail.com"],
  ["Crystal Gail Banks", "cghorning@gmail.com"],
  ["Collins Cobby","cobbycollins3@gmail.com","233204875306"],
  ["Crystal Ann Miller", "seabass1414@yahoo.com"],
  ["Crystal Eldredge", "c3around@aol.com"],
  ["Crystal Gail Moore", "moorecrystal8714@gmail.com"],
  ["Crystal Jean Dunn", "cjdbean007@gmail.com"],
  ["Crystal Parker", "puppyblueparker@gmail.com"],
  ["Curtis Larson", "cjlarson2001@gmail.com"],
  ["Cynthia Nicole Rohm", "cnbrown01@yahoo.com"],
  ["Cynthia Alice Price", "drjakesma@gmail.com"],
  ["Cynthia Michele Dayley", "cmdayley@gmail.com"],
  ["Cynthia Sue Pickett", "cynthiahatton@yahoo.com"],
  ["Cynthia Traci Niehues", "Cynthia.niehues@gmail.com"],
  ["Dallas Sawyer", "sickwillis52@gmail.com"],
  ["Dallin Ramos", "dwramos22@gmail.com"],
  ["Dallin Richard Garlick", "dallingarlick@gmail.com"],
  ["Dallin Gubernick", "dpgubernick@gmail.com", "17144542487"],
  ["Dalen Andrew James", "dalenjames0@gmail.com", "18016683677"],
  ["Damawa Clinton Rogers", "rogersdamawa2015@gmail.com"],
  ["Damon Chamberlain", "chamdam24@gmail.com"],
  ["Dan Valdes", "danvaldes001@gmail.com"],
  ["Dana Kathleen Dunyon", "ddunyon@gmail.com"],
  ["Dana Lynne Watt", "dl.watt@hotmail.com"],
  ["Dana Rachelle Jensen", "drachelleshular@gmail.com"],
  ["Danean Iona Johnson", "daneani@yahoo.com"],
  ["Danell Barton", "danibartonrda@gmail.com"],
  ["Dangely Thompson", "reyes.dangely1995@gmail.com", "17035991228"],
  ["Darcie Burrows", "darcieruvalcaba@gmail.com"],
  ["David Benjamin Hancock", "david16bh@gmail.com", "19282433054"],
  ["Deborah Anne Larson", "dizdeb3@msn.com"],
  ["Devin Lynn Merrell", "deviboi@gmail.com"],
  ["Douglas Christopher Orton","c121s@pm.me",""],
  ["Elizabeth Michelle Stoddard", "z_dog_90@hotmail.com", "14802581540"],
  ["Edna Sahev Lopez Ramirez","bonjour.sahev@gmail.com","15588345050"],
  ["Emmanuella Lorena Rogers", "rena27aj@icloud.com", "233550363277"],
  ["Ericka Martinez Olivares", "ericka_martinez27@yahoo.com"],
  ["Felipe Narcizo Leza", "f_leza@hotmail.com", "12104752540"],
  ["Francisco Manases Ipiña Herrera", "eslabon010@gmail.com"],
  ["Gabriela Joset Suarez", "Gabysu25@gmail.com", "18018352761"],
  ["Georgina Mendoza", "guzgina@gmail.com"],
  ["Harley Woolstenhulme", "Harleywoolstenhulme@gmail.com", "15305984828"],
  ["Jacob Robert Clark", "jakeclark426@gmail.com", "18015544152"],
  ["James Eric Leight", "james.e.leight@gmail.com"],
  ["Jennifer Daniel", "littlejendaniel@gmail.com"],
  ["Joe Isael Sercovich Velasquez", "joe.sercovich@gmail.com"],
  ["Jett Roche", "onehandcatch@outlook.com"],
  ["Johana Guadalupe Bravo", "johanabravo16@yahoo.com", "12138422702"],
  ["John Garrison Graham", "JohnGGraham@gmail.com"],
  ["John Clarke", "ejc201921@gmail.com", "15632496288"],
  ["Katerina Heddell","katerinaheddell@gmail.com"],
  ["Kyle Aaron Hafen", "hafenkyle@gmail.com", "17027713372"],
  ["Laura Arely Martinez Ontiveros", "lauraelizarraraz30@gmail.com", "13852088884"],
  ["Lindsay Ann Germer", "findserendipityadventures@gmail.com", "18016689496"],
  ["Lindsey Marie Peine", "peinelindsey@gmail.com"],
  ["Lorinda Field", "fishin.fields@gmail.com", "14357641686"],
  ["Manuia P Bridge", "anuhea2410@gmail.com", "18176097553"],
  ["Marc Aaron Guy The Younger", "theyoungerbear@cs.com"],
  ["Mark Nielson", "mnielson321@gmail.com"],

  ["Maryann Sunshine Perdomo Oro", "Maryannpalmer2010@yahoo.com"],
  ["Mason Bakker", "mvbakker@yahoo.com", "18018885296"],
  ["Mason Jarell Archie", "mason.archie3@gmail.com"],
["Mateus Rosa", "mateusedunr@gmail.com", "17404578684"],
["Matheus Da Silva Soares", "matiulesi@gmail.com", "13858664756"],
["Matthew David Harris", "mdh1110@live.com", "19096897130"],
["Matthew Joseph White", "matthewwhite22820@gmail.com", "15032687062"],
["Matthew Player", "embplayer@gmail.com"],
["Matthew Ryan Basham", "Mattbash02@outlook.com"],
["Matthew Schmidt", "mschmidty892@gmail.com"],
["Matthew Kofoed","mattkofoed06@gmail.com", "14357991235"],
["Matthew Chase Longeddy", "mattlongeddy@gmail.com"],
["Matthew Howcroft", "matthew@howcrofts.com", "18017170650"],
["Matthew Jay Gifford", "matthewjaygifford@gmail.com"],
["Matt Petersen", "petersenmatt442@gmail.com"],
  ["Matthew Landon Moulton", "moultonml8@gmail.com"],
  ["Matthew Blake Horsley", "mhorsleylax21@gmail.com", "18013811229"],
  ["Maryan Taka", "maryantaufa@gmail.com", "18019138109"],
  ["Maryana Molina", "maryannepina1986@gmail.com", "18018972358"],
  ["Mery Nalbandyan Khurshudyan", "Meri.rohm@gmail.com"],
  ["Micah Ann Stepan", "Micahstepan@gmail.com"],
  ["Mikaila Hansen", "hansenmikaila306@gmail.com"],
  ["Orlando Eliezer Vivas Ramirez", "oralvivas122@gmail.com"],
    ["Olha Victorovna Smyrnova", "olya35968@gmail.com"],
  ["Rebecca Ann Watson", "therealbeckywatson@gmail.com", "528132406242"],
  ["Rebecca Rose Garcia Voigt", "rebeccagarcia2007@gmail.com", "16086880497"],
  ["Sandra Marcela Mendoza", "sandymmg1@gmail.com", "18635109855"],
  ["Sarah Jane Lamb", "sarahlamb@ubtanet.com"],
  ["Shanna Aleta Wagner", "kountryfrog@gmail.com", "19723952549"],
  ["Shannon Allwood", "Shannon.allwood@gmail.com", "16412170270"],
  ["Shawni Lynn Thomas", "shawnilwiliams@gmail.com", "14358301229"],
  ["Sheryl Johnson", "GrannyEnchanted1@gmail.com"],
  ["Shellie Bates", "shelliebates@gmail.com"],
  ["Simone Bagni", "zime83@googlemail.com", "18014935651"],
  ["Susan Maria Cheatham", "susan.cheatham@imail.org"],
  

  ["Pamela Fontenele", "pamelacfontenele@gmail.com", "+18019701789"],
  ["Peter James Babcock", "peterb@saefl.com"],
  ["Sandra Chavez", "sandrachavez_3@hotmail.com", "18016167470"],
  ["Susanah Hyde", "shyde70@icloud.com"],
  ["Theresa Marie Pitts", "thempitts@gmail.com"],["Valishia Sue Hawkins", "valishiahawkins@gmail.com"],
  ["William Getchell", "willgetchell41@gmail.com", "12073038336"],
  ["William Guinn", "guinnlawrence@hotmail.com", "12066398477"],
  ["William Kirk Garrett", "wkirkgarrett@hotmail.com"],
  ["William Wyatt Mylan", "wmydrums@gmail.com", "15156572701"],
  
  ["Wilma Azucena Adams", "azuprtl@gmail.com"],
  ["Winifred Abigail Ashton", "winnie.ashton25@gmail.com", "15013508132"],
  ["Woodrow John Snow", "woodrow2021@outlook.com", "14358287669"],
  ["Xaidie Jain Campbell", "xaidie.campbell@gmail.com", "+15083099639"],
  ["Xereni Yamileth Garcia Alvarez", "xerenialvarez@outlook.com", "+13852235376"],
  ["Xiaobing Zhang", "shuhuaok@gmail.com", "19293914348"],
  ["Xiaomei Wang", "lisayang20114@gmail.com"],
  ["Zachary Jeffery", "zachjeffery13@gmail.com"],
  ["Zachary Schultz", "bassguy2344@gmail.com", "14792384597"],
  ["Zackary Lyman Munson", "zmunson2001@gmail.com", ""],
  ["Zoe Tully", "zbear108@gmail.com", "17606944133"],
  ["Zuhua Meng", "meng_zuhua@163.com", "+16468869689"]



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
        window.open(`https://api.whatsapp.com/send?phone=${student_list[i][2]}&text=${message} %0A 
            Luciano Seguel %0A 
            Mentor %0A 
            Springboard %0A 
            Serving BYU-Pathway Worldwide
             `, '_blank');
        
        
                
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
