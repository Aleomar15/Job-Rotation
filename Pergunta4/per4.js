let SP = 67836.43;
let RJ = 36678.66;
let MG = 29229.88;
let ES = 27165.48;
let outros = 19849.53;
const res = document.getElementById('res');
function total(){
    let t = SP+RJ+MG+ES+outros;
    let pSP = (SP*100)/t;
    let pRJ = (RJ*100)/t;
    let pMG = (MG*100)/t;
    let pES = (ES*100)/t;
    let pOt = (outros*100)/t;
    console.log(pES);
    res.innerHTML= `<h3>SP: ${pSP}% <br>RJ: ${pRJ}% <br>MG: ${pMG}% <br>ES: ${pES}% <br>Outros: ${pOt}% <br> </h3>`;
}