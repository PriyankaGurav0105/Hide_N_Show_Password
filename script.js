let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type === "password"){
        password.type = "text";
        eyeicon.src = "/hide&show_password/eye-open.png";
    }else{
        password.type = "password";
        eyeicon.src = "/hide&show_password/eye-close.png";


    }
}