
const btnAgregarCD = document.querySelector('#AgregarCD');
const btnEliminarCD = document.querySelector('#eliminarCD');
const btnAgregarCI = document.querySelector('#AgregarCI');
const btnEliminarCI = document.querySelector('#EliminarCI');
const btnResetear = document.getElementById('resetear');
const btnCalcular=document.getElementById('btnCalcular');
var selectElegirCalculo=document.querySelector('#selectInicio');

var contadorCD=0;
var contadorCI=0;
btnAgregarCD.addEventListener('click', e => {
    let newForm = document.getElementById('formCostoDirecto');
    let newInput=document.createElement('input');
    newInput.className='inputs';
    newInput.required;
    let newInput2=document.createElement('input');
    newInput2.required;
    newInput2.className='inputs';
    let newSelect=document.createElement('select');
    let newOption=document.createElement('option');
    newSelect.className='select'
    let NewOptionText=document.createTextNode('Costo Fijo');
    newOption.value='costoFijo';
    newOption.appendChild(NewOptionText);
    let newOption2=document.createElement('option');
    newOption2.value='costoVariable';
    let NewOption2Text=document.createTextNode('Costo variable');
    newOption2.appendChild(NewOption2Text);
    let newOption3=document.createElement('option');
    newOption3.value='costoAdministrativo';
    let newOption3Text=document.createTextNode('costo Admin');
    newOption3.appendChild(newOption3Text);
    newSelect.appendChild(newOption);
    newSelect.appendChild(newOption2);
    newSelect.appendChild(newOption3);
    newInput2.id='TCD'+contadorCD;
    newInput.id='CD'+contadorCD;
    newSelect.id='S'+newInput.id;
    newInput.type="number";
    newInput2.type='text';
    newInput.value=0;
    newInput2.placeholder='Ingrese el nombre del costo';
    newForm.appendChild(newInput2);
    newForm.appendChild(newInput);
    newForm.appendChild(newSelect);
    contadorCD+=1;
    console.log(contadorCD);
    })

btnEliminarCD.addEventListener('click', e=>{

    var inputBorrar=document.getElementById('CD'+contadorCD-1);
    let selectBorrar=document.getElementById('SCD'+contador1);
    let input2Borrar=document.getElementById('TCD'+contador1);
 

    if(inputBorrar==null){
        var contador1=contadorCD;
        do{        
        contador1-=1;
        inputBorrar=document.getElementById('CD'+contador1);
        selectBorrar=document.getElementById('SCD'+contador1);
        input2Borrar=document.getElementById('TCD'+contador1);
        if(inputBorrar!=null){
            inputBorrar.remove();
            selectBorrar.remove();
            input2Borrar.remove();
            contadorCD=contadorCD-1;
            console.log('se borro el imput cd numero' + contador1);
            break;
        }
        if(contador1=='CD'+0){
            break;
        }
        }   
        while(inputBorrar==null && contador1!=-1 );
    }
    else{
        inputBorrar.remove()
        selectBorrar.remove();
        input2Borrar.remove();
        contadorCD=contadorCD-1;


    }

})


btnAgregarCI.addEventListener('click', e => {
    let newForm = document.getElementById('formCostoIndirecto');
    let newInput=document.createElement('input');
    newInput.className='inputs';
    newInput.required;
    let newInput2=document.createElement('input');
    newInput2.className='inputs';
    newInput2.required;
    let newSelect=document.createElement('select');
    let newOption=document.createElement('option');
    newSelect.className='select'
    let NewOptionText=document.createTextNode('Costo Fijo');
    newOption.value='costoFijo';
    newOption.appendChild(NewOptionText);
    let newOption2=document.createElement('option');
    newOption2.value='costoVariable';
    let NewOption2Text=document.createTextNode('Costo variable');
    newOption2.appendChild(NewOption2Text);
    let newOption3=document.createElement('option');
    newOption3.value='costoAdministrativo';
    let newOption3Text=document.createTextNode('costo Admin');
    newOption3.appendChild(newOption3Text);
    newSelect.appendChild(newOption);
    newSelect.appendChild(newOption2);
    newSelect.appendChild(newOption3);
    newInput2.id='TCI'+contadorCI;
    newInput.id='CI'+contadorCI;
    newSelect.id='S'+newInput.id;
    newInput.type="number";
    newInput2.type='text';
    newInput.value=0;
    newInput2.placeholder='Ingrese el nombre del costo';
    newForm.appendChild(newInput2);
    newForm.appendChild(newInput);
    newForm.appendChild(newSelect);
    contadorCI+=1;
    console.log(contadorCI)
 })
 

 btnEliminarCI.addEventListener('click', e=>{
 
    var inputBorrar=document.getElementById('CI'+contadorCI-1);
    let selectBorrar=document.getElementById('SCI'+contador1);
    let input2Borrar=document.getElementById('TCI'+contador1);
 

    if(inputBorrar==null){
        var contador1=contadorCI;
        do{        
        contador1-=1;
        inputBorrar=document.getElementById('CI'+contador1);
        selectBorrar=document.getElementById('SCI'+contador1);
        input2Borrar=document.getElementById('TCI'+contador1);
        if(inputBorrar!=null){
            inputBorrar.remove();
            selectBorrar.remove();
            input2Borrar.remove();
            contadorCI=contadorCI-1;
            console.log('se borro el imput ci numero' + contador1);
            break;
        }
        if(contador1=='CI'+0){
            break;
        }
        }   
        while(inputBorrar==null && contador1!=-1 );
    }
    else{
        inputBorrar.remove()
        selectBorrar.remove();
        input2Borrar.remove();
        contadorCI=contadorCI-1;

    }
})

btnResetear.addEventListener('click', e=>{
    let inputsResets1=document.getElementById('nombreProducto');
    inputsResets1.value="";
    let inputsResets2=document.getElementById('PPP');
    inputsResets2.value="1";
    inputsResets2.reset();
    let select=document.getElementById('selectInicio');
    select.value='puntoEquilibrio';
   

})

btnCalcular.addEventListener('click', e=>{
    if(document.getElementById('selectInicio').value=='puntoEquilibrio'){
        eliminarPrecioUnitario();
        mostraPuntoEquilibrio();
    }
    else{
        if(document.getElementById('selectInicio').value=='precioUnitario'){
            eliminarPuntoEquilibrio();
            mostrarPrecioUnitario();
        }
    }





})


selectElegirCalculo.addEventListener('change',e=>{
    
    if(document.getElementById('selectInicio').value=='puntoEquilibrio'){
        let text=document.getElementById('labelIngreso');
        text.textContent='Ingrese el precio unitario';
    }
    else{
        let text=document.getElementById('labelIngreso');
        text.textContent='Ingrese los productos producidos';
    }


})


function eliminarPrecioUnitario() {
    if(document.getElementById('inputTotal')){
        let eliminar=document.getElementById('inputTotal');
        let textoeliminar=document.getElementById('labelTotal');
        eliminar.remove();
        textoeliminar.remove();
    }

}
function eliminarPuntoEquilibrio(){
    if(document.getElementById('inputPuntoEquilibro')){
        let eliminar=document.getElementById('inputPuntoEquilibro')
        let textoeliminar=document.getElementById('labelPuntoEquilibrio');
        eliminar.remove();
        textoeliminar.remove();
    }

}


function sumaDirectos(){
    let total=0;
    let valor;
    for(let i=0;i<=(contadorCD-1);i++){
       valor=parseFloat(document.getElementById("CD"+i).value);
       total=total+valor;
    }
    console.log("total de los gastos directos es "+total);
    return total;
}

function sumaIndirectos(){
    let total=0;
    let valor;
    for(let i=0;i<=(contadorCI-1);i++){
       valor=parseFloat(document.getElementById("CI"+i).value);
       total=total+valor;
    }
    console.log("total de los gastos indirectos es "+total);
    return total;
}

function CalcularPrecioUnitario(){
    let PU=sumaDirectos()+sumaIndirectos();
    let PPP=parseFloat(document.getElementById('PPP').value);
    PU=PU/PPP;
    console.log(PU);
    return PU;
}
function mostrarPrecioUnitario(){
    if(!document.getElementById('inputTotal')){
    let PU=CalcularPrecioUnitario();
    let newTotal=document.createElement('input');
    newTotal.className='inputs';
    newTotal.id='inputTotal';
    newTotal.value=PU;
    var labelTotal=document.createElement('label');
    labelTotal.id='labelTotal';
    labelTotal.textContent='El precio unitario del producto es: ';
    let divResultado=document.getElementById('resultado');
    divResultado.appendChild(labelTotal);
    divResultado.appendChild(newTotal);
    }
    else{
     let PU=CalcularPrecioUnitario();
    let newTotalBorrar=document.getElementById('inputTotal');
    newTotalBorrar.value=PU;
    }

}

function sumarCostosFijos(){
    let totalFijos=0;
    let input;
    let i=0
    do{
       
        if(document.getElementById('SCD'+i)!=null && document.getElementById('SCD'+i).value=='costoFijo'){
            input=parseFloat(document.getElementById('CD'+i).value);
            totalFijos=totalFijos+input;  
        }
        i=i+1;
    }while(!!document.getElementById('SCD'+i));
    i=0;
    do{
       
        if(document.getElementById('SCI'+i)!=null && document.getElementById('SCI'+i).value=='costoFijo'){
            input=parseFloat(document.getElementById('CI'+i).value);
            totalFijos=totalFijos+input;
        }
        i=i+1;
    }while(!!document.getElementById('SCD'+i));
    console.log(totalFijos);
    return totalFijos;
}

function sumarCostosVariables(){
    let totalVariable=0;
    let input;
    let i=0
    do{
       
        if(document.getElementById('SCD'+i)!=null && document.getElementById('SCD'+i).value=='costoVariable'){
            input=parseFloat(document.getElementById('CD'+i).value);
            totalVariable=totalVariable+input;  
        }
        i=i+1;
    }while(!!document.getElementById('SCD'+i));
    i=0;
    do{
       
        if(document.getElementById('SCI'+i)!=null && document.getElementById('SCI'+i).value=='costoVariable'){
            input=parseFloat(document.getElementById('CI'+i).value);
            totalVariable=totalVariable+input;
        }
        i=i+1;
    }while(!!document.getElementById('SCD'+i));
    console.log("total variable "+totalVariable);
    return totalVariable;
}



function calcularPuntoEquilibrio(){
    let PE;
    let PU=parseFloat(document.getElementById('PPP').value);
    let costoFijo=sumarCostosFijos();
    let CV=sumarCostosVariables();
    PE=costoFijo/(PU-CV);
    return PE;
}

function mostraPuntoEquilibrio(){
    if(!document.getElementById('inputPuntoEquilibro')){
        let PE
        if(calcularPuntoEquilibrio()<0){
            PE='El producto no es rentable'
        }
        else{
            PE=calcularPuntoEquilibrio();
        }
        let newTotal=document.createElement('input');
        newTotal.className='inputs';
        newTotal.id='inputPuntoEquilibro';
        newTotal.value=PE;
        var labelTotal=document.createElement('label');
        labelTotal.id='labelPuntoEquilibrio';
        labelTotal.textContent='El punto de equilibrio del producto es: ';
        let divResultado=document.getElementById('resultado');
        divResultado.appendChild(labelTotal);
        divResultado.appendChild(newTotal);
    }
    else{
        let PE=calcularPuntoEquilibrio();
        let newTotal=document.getElementById('inputPuntoEquilibro');
        newTotal.value=PE;
    }

}