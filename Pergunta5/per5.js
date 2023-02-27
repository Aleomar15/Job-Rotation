const res = document.getElementById("res");
const res2 = document.getElementById("res2");
const txt = document.getElementById("str");
let texto = String(txt.value);
console.log(typeof(texto))

function inverter(){
    let aux = texto;
    let tam = texto.length;
    let i;
    let j =0;
    for(i=tam;i>=0;i--){
        j++;
        aux[j] = texto[i];
    }
    res.innerHTML = `${texto}`;
    res2.innerHTML = `${aux}`;
    console.log(texto)
}
