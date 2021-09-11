function save (){
var x = document.getElementById("show").value;
var y = localStorage.length;
return localStorage.setItem(y,x) + window.location.reload();


}
 
function show (){
//var x= localStorage.getItem("name");  
//document.getElementById("box").innerHTML = x;
var y =[];
for (let i=0; i<localStorage.length;i++){
    y.push(localStorage.getItem(i))
}
document.getElementById("box").innerHTML = y;
}
function del (){

localStorage.removeItem("name")
document.getElementById("box").innerHTML = ` `;
}