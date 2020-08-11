document.getElementById("createpin").addEventListener("click", function(){
    var createpin = Math.round(1000+Math.random()*9000);
    document.getElementById("pin").value = createpin;
})
//Get number
function calculate(x){
    document.getElementById("inputpin").value += x;
 }

 //Clear button
 document.getElementById("clear").addEventListener("click", function(){
     document.getElementById("inputpin").value = "";
 })

 //backSpace button
 document.getElementById("backSpace").addEventListener("click", function(){
     var str = document.getElementById("inputpin").value;
      str = str.substr(0,str.length-1);
      document.getElementById("inputpin").value = str;
     
     
 })

 //Pin matcher function 
 document.getElementById("submit").addEventListener("click", function(){
     var input = document.getElementById("inputpin").value;
     var pin = document.getElementById("pin").value;
     if(input == pin){
         const pinarea = document.getElementById("rightPinNotify");
         pinarea.style.display = "block";
         const rightarea = document.getElementById("wrongPinNotify");
         rightarea.style.display = "none";
         document.getElementById("inputpin").value = "";
         document.getElementById("pin").value = "";
     }
     else if(input != pin){
        const rightarea = document.getElementById("wrongPinNotify");
         rightarea.style.display = "block";
         const pinarea = document.getElementById("rightPinNotify");
         pinarea.style.display = "none";
         document.getElementById("inputpin").value = "";
       
         

         
     }
    
 })