
function result(){ 
    let nu = document.getElementById('num');
    let n1 = Number(nu.value);
    let res = document.getElementById('result');
    res.innerHTML = `${n1}`
    var z = 0;
    let x = 0;
    let y =  1;
    let resp = false;
    for(var i=0;i<n1;i++){
        z = x + y;
        x = y;
        y = z;
        if(n1 == z){
            resp = true;
            break;
        }
       console.log(z)
    }
    if(resp == true){
        res.innerHTML="<h3>Faz parte</h3>"
    }else{
        res.innerHTML="<h3>Não faz parte</h3>"
    }
}