
function displaysignin(){
    document.getElementById('signup').style.display="none";
    document.getElementById('signinn').style.display="block";
    document.getElementById('container').rotate(20*Math.PI/90);
}
function displaysignup(){
    document.getElementById('signup').style.display="block";
    document.getElementById('signinn').style.display="none";
    document.getElementById('container').classList.toggle('hover_effect');
}