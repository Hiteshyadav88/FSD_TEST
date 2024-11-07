function jokes(){

     fetch("https://v2.jokeapi.dev/joke/Any").then(
        (response)=>{
            const data=response.json();
            console.log(data)
            return data
        }
    )
    .then((response)=>{
     document.getElementById("joke").innerHTML=response.setup;
        document.getElementById("answer").innerHTML=response.delivery;
const len=`${response.setup}`;
        document.getElementById("length").innerHTML=len.length;
    }).catch(
        alert("CONTENT CANNOT BE FATCHED FROM API")
    )
}
   

function cleared(){
     document.getElementById("joke").innerHTML='';
        document.getElementById("answer").innerHTML='';

        document.getElementById("length").innerHTML='';
}