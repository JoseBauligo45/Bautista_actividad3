function login(){
    var user,password
    user=document.getElementById("usuario").value;
    password=document.getElementById("contraseña").value;
    if(user == "jose123" && password== "prueba"){
        window.location="index2.html";
    }
    else{
          alert("Datos Incorrectos")
    }
}