var images = new Array(5);  
    images[0] = "1.jpg";
    images[1] = "2.jpg";
    images[2] = "3.jpg";
    images[3] = "4.jpg";
    images[4] = "5.jpg";
    images[5] = "6.jpg";


    var numimg = 5;
    var curimg = 1;
    var t;
    function stop1(){
      clearTimeout(t);
    }
function slides(){
  var im=document.getElementById("image");
  if(curimg>=numimg)curimg=0;
  im.src = images[curimg++];
 t= setTimeout(slides,2000); 
}
  function  goback() {
    var im=document.getElementById("image");
    if(curimg>0)
   {
    im.src = images[curimg-1];
    curimg = curimg - 1;
   }else{
    alert("This is the first image");
   }
}

function gofwd(){
var im=document.getElementById("image");
    if(curimg < numimg){   
    im.src = images[curimg+1];
    curimg = curimg + 1;
   }else{
      alert("This is the last image");
      }


}