function draw(id) 
{  
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    var context = canvas.getContext('2d');  
    context.fillStyle = "#EEEEFF";  
    context.beginPath();
    context.lineWidth=5;
    context.setLineDash([5]);
    //context.setLineDash([5,10]);
    //context.setLineDash([5,10,15,20]);
    //context.setLineDash([5,10,15]);
    //console.log(context.getLineDash());
    context.moveTo(20,20);
    context.lineTo(200,20);
    context.stroke();    
}



