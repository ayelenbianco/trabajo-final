const btnWarning=document.getElementById('btn-warning');




btnWarning.addEventListener('click',function(){

    iziToast.warning({
    title: 'ATENCION',
    message: 'No podrás resistirte a comprar todo!',
});
 })


const cambiarFondo=document.getElementById('cambiarFondo');
const body=document.body;

body.classList.add('tema-claro');

cambiarFondo.addEventListener('click',function(){
const icono=cambiarFondo.querySelector('i');
if(body.classList.contains('tema-claro')){
body.classList.remove('tema-claro');
body.classList.add('tema-oscuro');
icono.className="bi bi-brightness-high-fill";
cambiarFondo.innerHTML='<i class="bi bi-brightness-high-fill"></i>';


}
else{
body.classList.remove('tema-oscuro');
body.classList.add('tema-claro');
icono.className="bi bi-moon-stars-fill";
cambiarFondo.innerHTML='<i class="bi bi-moon-stars-fill"></i>';


}
}
);

function precioFinal(){
let precio=document.getElementById('precioInput').value;

precio=parseFloat(precio);


if(!isNaN(precio) && precio>0){
let iva= precio * 0.1735;
let total= precio + iva;

document.getElementById('resultado').innerText='Su producto con iva es de: $'+total;}

else{
    document.getElementById('resultado').innerText='INGRESE UN NUMERO VALIDO.'

}}
function calcularTotal(){
let p1=parseInt(document.getElementById('producto1').value);
let p2=parseInt(document.getElementById('producto2').value);
let totalDiv=document.getElementById('total');
if(isNaN(p1)||isNaN(p2)){
totalDiv.innerText='Por favor, poner un numero entero';
totalDiv.style.color='red';
totalDiv.style.fontWeight='bold';
}else{
let total=p1+p2;
totalDiv.innerText='El total es $'+ total;
totalDiv.style.color='green';
totalDiv.style.fontWeight='bold';

}

}

document.getElementById('calcular').addEventListener('click',calcularTotal);

