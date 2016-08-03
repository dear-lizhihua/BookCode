function draw(id) 
{  
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    var context = canvas.getContext('2d');  
    context.fillStyle = "#EEEEFF";  
    context.beginPath();
    context.lineWidth=10;
    context.lineCap="round";
    context.moveTo(20,20);
    context.lineTo(20,200);
    context.stroke();    
}



