function login(){
    const userName=document.getElementById("user").value;
const password=document.getElementById("pwd").value;
if(userName==="AIMLC" && password==="AIMLC"){
    window.location.href="generator.html";
    return false;
} else{
    alert("User not found!!")
    return false;
}
}