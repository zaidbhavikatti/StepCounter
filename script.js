var countZer=document.getElementById("count");
var buttonInc=document.getElementById("button-in");
var saveBut=document.getElementById("button-sa");
var enteries= document.getElementById("enter");
var count=0;
function increment(){

count=count+1;
countZer.textContent=count;
}

function save(){
count==countZer;
var tern = count +  "  - ";
 enteries.textContent+=tern;


 countZer.textContent= 0;

}