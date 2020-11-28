var chcone = 0;
var chctwo = 0;
var chcthree = 0;
var chcfour = 0;
var cone = 0;
var ctwo = 0;
var cthree = 0;
var cfour = 0;

function ChocoOne(){
  document.getElementById("image-1").src= "https://cdn.shopify.com/s/files/1/0256/3797/8165/products/sugar-free-chocolate-truffles_580x.jpg?v=1596212544";
  
  chcone = chcone + 150;
  cone = cone + 1;
  document.getElementById("c").innerHTML=
    "ChocoOne : X" + chcone + "(" + cone +")";
    
}

function ChocoTwo(){
  document.getElementById("image-1").src= "https://images.squarespace-cdn.com/content/v1/54e1536ae4b0ef0a3e3f3bc2/1427494260609-RHJXP5PALRYJOO4ZPSE1/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/sfcdirecotry.jpg?format=1500w";
  
  chctwo = chctwo + 250;
  ctwo = ctwo + 1;
  document.getElementById("ch").innerHTML=
    "ChocoTwo : X" + chctwo + "(" + ctwo +")"; 
  
  
  
  
  
  
  
}


  function ChocoThree(){
  document.getElementById("image-1").src= "https://5.imimg.com/data5/FD/GU/MY-12564583/sugar-free-chocolate-500x500.jpg";
    
    chcthree = chcthree + 200;
  cthree = cthree + 1;
  document.getElementById("cho").innerHTML=
    "ChocoThree : X" + chcthree+ "(" + cthree +")"; 
    
    
    
    
  }



function Chocofour(){
  document.getElementById("image-1").src= "https://www.confectionsbyjoel.com/wp-content/uploads/2013/08/sugar-free-chocolate-meltaways.jpg";
  chcfour = chcfour + 190;
  cfour = cfour + 1;
  document.getElementById("choc").innerHTML=
    "Chocofour : X" + chcfour+ "(" + cfour +")"; 
  
}

function total(){

  var total = chcone + chctwo + chcthree + chcfour;
  var overall = cone + ctwo + cthree + cfour;
document.getElementById("ttl").innerHTML= "Total: " + total + " (" + overall + ")";
  
}



function blank(){
  
 
  document.getElementById("image-1").src = "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.0-0/p526x296/125376476_2745202295744829_6613726428705533787_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeErYSc-_a9b-R28p3Rxk8VfMNms6wNXO3cw2azrA1c7dy3mujGfUwAcvP_36C69Ye6qhQGr7ZhP1AMZZeU3gQYH&_nc_ohc=EDI-0tcOSgIAX_gqvwc&_nc_ht=scontent.fmnl17-2.fna&tp=6&oh=c49d64dda4864f89384ed38cdd2ac97e&oe=5FD4E0AA";
  document.getElementById("c").innerHTML = " ";
  document.getElementById("ch").innerHTML = " ";
  document.getElementById("cho").innerHTML = " ";
  document.getElementById("choc").innerHTML = " ";
  document.getElementById("ttl").innerHTML = " ";
  
  
  
}