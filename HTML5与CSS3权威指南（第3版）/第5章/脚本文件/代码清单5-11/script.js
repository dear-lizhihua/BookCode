function draw(id) 
{  
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    var context = canvas.getContext('2d');  
    context.fillStyle = "#EEEEFF";  
    context.fillRect(0, 0, 400, 300);  
    var n = 0; 
    for(var i = 0; i < 10; i++) 
    {  
        var path=new Path2D();  
        path.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true);  
        path.closePath();  
        context.fillStyle = 'rgba(255, 0, 0, 0.25)';  
        context.fill(path);  
    }     
}




