
function AUTO(){
    var audio = new Audio('pARENTAL.mp3');

    audio.loop = true
    audio.play();
}
function Registrar(){

    var user ="";
    var password ="";
    if(document.getElementById("USER").value == "" || document.getElementById("PASSWORD").value == "")
    {
    alert("INGRESE LOS VALORES")
    }
else
{
    alert("Se registro el usuario")
    user = document.getElementById("USER").value;
    password = document.getElementById("PASSWORD").value;

    sessionStorage.setItem("user", user)
    sessionStorage.setItem("password", password)
   window.location.href ="Login.html"

    console.log(user, password)


    
    return;

    
}
    
}
let i =1;
function login()
 {
       

var user = sessionStorage.getItem("user");
var password = sessionStorage.getItem("password");


    var userlOG = document.getElementById("USERLog").value
    var PassLog = document.getElementById("PasswordLog").value

    console.log(i)


   if(i!==3&&userlOG !== user)
   {
    do
    {
    
    i++
    alert("LAS CREDENCIALES NO COINiCIDEN")
    
    break;

    }

while(userlOG !== user&&i!==3);
   }
   else
   
   

if(i!==3&&PassLog !== password)
{
do
{
i++
alert("LAS CREDENCIALES NO COINaCIDEN")
break;
}
while(i!==3&&PassLog !== password);
}
else

if(i=3)
{
 window.location.href= "BLOCK.HTML"
}

if(userlOG == user && PassLog == password)
{
    alert("Bienvenido")
    window.location.href ="index.html"
}
}
