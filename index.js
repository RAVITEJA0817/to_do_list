document.getElementById("btn1").addEventListener("click",myfunct)

function myfunct(){
var a = document.getElementById("ipt1").value
 document.getElementById("p1").innerHTML += a + "<br>" + "<br>"
 document.getElementById("ipt1").value="";
}


document.getElementById("ipt1").addEventListener("keypress",function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        myfunct();
    }
})

document.getElementById("btn2").addEventListener("click",rel)
function rel(){
    window.location.reload()
}