console.log("test")
let vier=document.getElementById("vier")
let fuenf=document.getElementById("fuenf")
let sechs=document.getElementById("sechs")
let frei=document.getElementById("frei")
let runde=document.getElementById("runde")
let total=document.getElementById("total")
let customer_Nr=document.getElementById("customer_Nr")
let runde_Nr=document.getElementById("runde_Nr")
let input_Nr=document.getElementById("input_Nr")
let info = document.getElementById("info")


function result(){
    console.log("result")

    if(vier.checked){
        runde_Nr.innerHTML= vier.value
        runde.style.display = "block"
        customer_Nr.display = "none"
        console.log("vier.value")
    }else if(fuenf.checked){
        runde_Nr.innerHTML= fuenf.value
        runde.style.display = "block"
        customer_Nr.display = "none"

    
    } else if(fuenf.checked){
        runde_Nr.innerHTML= fuenf.value
        runde.style.display = "block"
        customer_Nr.display = "none"
    } else if(sechs.checked){
        runde_Nr.innerHTML= sechs.value
        runde.style.display = "block"
        customer_Nr.display = "none"
    }  else if(frei.checked){
        runde_Nr.innerHTML= frei.value
        runde.style.display = "block"
        customer_Nr.display = "block"

    }
}
function total_Round(){
    total_Round.innerHTML="total"
    console.log("total_Round")

 
   
}
function selectNumber(){
    customer_Nr.style.display = "block"
    

}