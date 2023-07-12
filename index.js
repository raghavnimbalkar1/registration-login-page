let signuplink = document.getElementById("signuplink");  
let signinlink = document.getElementById("signinlink");  
let namefield = document.getElementById("namefield");   
let maintitle = document.getElementById("maintitle");
 
signinlink.onclick = function(){
    namefield.style.maxHeight = "0";
    title.innerHTML = "SIGN IN";
    signuplink.classList.add("disabled");
    signinlink.classList.remove("disabled");

}

signuplink.onclick = function(){
    namefield.style.maxHeight = "60px";
    title.innerHTML = "SIGN UP";
    signuplink.classList.remove("disabled");
    signinlink.classList.add("disabled");

}