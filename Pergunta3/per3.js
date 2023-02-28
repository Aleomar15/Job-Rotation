const pJson = require('./dados.json');//Necesserio ter Node instalado
const express = require('express');
const app =  express();
console.log(pJson.mesX[0].dia);
const resMA = document.getElementById('maior');
const resMN = document.getElementById('menor');
const resME = document.getElementById('media');
app.get("/",(req,res)=>{
    res.render('per3')
});
function maiorF(){
    let n = pJson.mesX[0].faturamento;;
    let nAux = pJson.mesX[1].faturamento;
    let i=1;
    pJson.forEach(element => {
        
       if(nAux>n){
        n=nAux;
       }
       i++;
       nAux = pJson.mesX[i].faturamento;
    });
    
    return n;
}
function menorF(){
    let n = pJson.mesX[0].faturamento;
    let nAux = pJson.mesX[1].faturamento;
    let i=1;
    pJson.forEach(element => {
        
       if(nAux<n){
        n=nAux;
       }
       i++;
       nAux = pJson.mesX[i].faturamento;
    });
    return n;
}
function mediaF(){
    let n ;
    let md = 0;
    let i=0;

    pJson.forEach(element => {
       n += pJson.mesX[i].faturamento;
       i++;
    });
    md=n/(i+1);
    return md;
}
function carregar(){
    resMA.innerHTML = `${maiorF()}`;
    resMN.innerHTML = `${menorF()}`;
    resME.innerHTML = `${mediaF()}`;
}
app.listen(8080,()=>{
    console.log("App rodando!")
});