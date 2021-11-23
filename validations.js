function signup(){
    let x=document.getElementById("username").value;
    let l=x.length;
    let a=document.getElementById("pass1").value;
    let b=document.getElementById("pass2").value;
    let k=true;
    if(l<8)
    {
        k=false;
        document.getElementById("u1").innerHTML="Username must be of atleast 8 characters";
    }
    if(a.length<8)
    {
        k=false;
        document.getElementById("u2").innerHTML="Password must be of atleast 8 characters";
    }
    if(a.length!=b.length)
    {
        k=false;
        document.getElementById("u3").innerHTML= "Entered wrong password";
    }
    if(k==true){
        location.href="index2.html";
    }
}