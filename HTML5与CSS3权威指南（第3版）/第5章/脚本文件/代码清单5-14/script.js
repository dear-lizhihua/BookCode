function draw(id) 
{  
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    var context = canvas.getContext('2d');  
    var path1=new Path2D("M10 10 h 80 v 80 h -80 Z ");    
    context.fill(path1);
}




