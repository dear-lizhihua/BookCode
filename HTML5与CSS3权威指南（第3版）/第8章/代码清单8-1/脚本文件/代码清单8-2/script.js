//sessionStorage示例 
function saveStorage(id)
{  
    var target = document.getElementById(id);  
    var str = target.value;  
    sessionStorage.setItem("message",str); 
    //或sessionStorage.message=str; 
}  
function loadStorage(id)
{  
    var target = document.getElementById(id);  
    var msg = sessionStorage.getItem("message");
    //或var msg=sessionStorage.message;  
    target.innerHTML = msg;  
}  
//localStorage示例 
function saveStorage(id)
{  
    var target = document.getElementById(id);  
    var str = target.value;  
    localStorage.setItem("message",str);
    //或localStorage.message=str;  
}  
function loadStorage(id)
{  
    var target = document.getElementById(id);  
    var msg = localStorage.getItem("message"); 
    //或var msg=localStorage.message;  
    target.innerHTML = msg;  
}

