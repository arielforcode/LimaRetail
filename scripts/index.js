// DOM elements
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
    if (user) {
        // account info
        db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
        <div>Entro con el usuario : ${user.email}</div>
        <div>Sus Cuentas Asociadas son :${doc.data().bio}</div>
      `;
            accountDetails.innerHTML = html;
        });
        // toggle user UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        // clear account info
        accountDetails.innerHTML = '';
        // toggle user elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
};


// setup guides
const setupGuides = (user) => {

    if (user) {
        // account info
        db.collection('users').doc(user.uid).get().then(doc => {

            var ariel = `${doc.data().bio}`;
            cargar(ariel)

        });

    } else {
        guideList.innerHTML = '';
    }




};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});

var grupito=0;
function cargar(ariel) {

    if(ariel=="clavemaestraAlfa"){
            //==================================================

            var tabla = document.getElementById('tabla')
    var numero=3;
    var lex=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosoto","Septiembre","Noviembre","Diciembre"]
    document.getElementById('mesActual').innerHTML=`<center>${(lex[numero])}</center>`;
    var names = "";
    let fruta = new Array();

    

    db.collection("Datos").get().then((querySnapshot) => {
        tabla.innerHTML = '';

        querySnapshot.forEach((doc) => {
            
                fruta.push(`${doc.data().name}`)
            
            
        });
        let sinRepetir = [...new Set(fruta)];
    
    
            
                
                for (var i = 0; i < sinRepetir.length; i++) {
                    names = sinRepetir[i];
                    var contador = 0;
                    var contador1 = 0;
                    var contador2 = 0;
                    var contador3 = 0;
                    var idcamp="";
                    var nomCuenta="";
                    var ise=0;
                    var ise1=0;
                    var ise2=0;
                    var ise3=0;
                    var alguito=0;
                    
                    
                    querySnapshot.forEach((doc) => {
                        var ari = `${doc.data().idCuenta}`
                        
                        if( names == `${doc.data().name}` ){
                              
                                var mec = meses(`${doc.data().fecha}`)
                                if (numero == mec) {
                                    

                                    var s = parseFloat(`${doc.data().impresiones}`);
                                    var s1 = parseFloat(`${doc.data().clicks}`);
                                    var s2 = parseFloat(`${doc.data().costo}`);
                                    var s3 = parseFloat(`${doc.data().ctr}`);
                                    contador = contador + s
                                    contador1 = contador1 + s1
                                    contador2 = contador2 + s2
                                    contador3 = contador3 + s3
                                    idcamp=idcamp+`${doc.data().idCamapana}`
                                    
                                }
                            
                        }
                      
                    });
                    
                    querySnapshot.forEach((doc) => {
                        var ari2 = `${doc.data().idCuenta}`
                        if ( names == `${doc.data().name}`){
                             
                                var mec = meses(`${doc.data().fecha}`)
                                if ((numero+1) == mec) {
                                    
                                    var a = parseFloat(`${doc.data().impresiones}`);
                                    var a1 = parseFloat(`${doc.data().clicks}`);
                                    var a2 = parseFloat(`${doc.data().costo}`);
                                    var a3 = parseFloat(`${doc.data().ctr}`);
                                    ise = ise + a
                                    ise1 = ise1 + a1
                                    ise2 = ise2 + a2
                                    ise3 = ise3 + a3
                                    nomCuenta=nomCuenta+`${doc.data().nombreCuenta}`
                                }
                            
                        }
                        
                    });
                    
                   
                    escribir(numero,idcamp,contador,contador1,contador2,contador3,ise,ise1,ise2,ise3,names,nomCuenta);
                    
                    
                   
                   
                }
                
                    
            

                    
        
    });
            //==================================================





    }else{
        var tabla = document.getElementById('tabla')
        var numero=3;
        var lex=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosoto","Septiembre","Noviembre","Diciembre"]
        document.getElementById('mesActual').innerHTML=`<center>${(lex[numero])}</center>`;
        var names = "";
        let fruta = new Array();
    
        
    
        db.collection("Datos").get().then((querySnapshot) => {
            tabla.innerHTML = '';
    
            querySnapshot.forEach((doc) => {
                var ari = `${doc.data().idCuenta}`
                if(ariel == ari){
                    fruta.push(`${doc.data().name}`)
                }
                
            });
            let sinRepetir = [...new Set(fruta)];
        
        
                
                    
                    for (var i = 0; i < sinRepetir.length; i++) {
                        names = sinRepetir[i];
                        var contador = 0;
                        var contador1 = 0;
                        var contador2 = 0;
                        var contador3 = 0;
                        var idcamp="";
                        var nomCuenta="";
                        var ise=0;
                        var ise1=0;
                        var ise2=0;
                        var ise3=0;
                        var alguito=0;
                        
                        
                        querySnapshot.forEach((doc) => {
                            var ari = `${doc.data().idCuenta}`
                            
                            if(ariel == ari & names == `${doc.data().name}` ){
                                  
                                    var mec = meses(`${doc.data().fecha}`)
                                    if (numero == mec) {
                                        
    
                                        var s = parseFloat(`${doc.data().impresiones}`);
                                        var s1 = parseFloat(`${doc.data().clicks}`);
                                        var s2 = parseFloat(`${doc.data().costo}`);
                                        var s3 = parseFloat(`${doc.data().ctr}`);
                                        contador = contador + s
                                        contador1 = contador1 + s1
                                        contador2 = contador2 + s2
                                        contador3 = contador3 + s3
                                        idcamp=idcamp+`${doc.data().idCamapana}`
                                        nomCuenta=nomCuenta+`${doc.data().nombreCuenta}`
                                        console.log(nomCuenta)
                                        
                                    }
                                
                            }
                            
                        });
                        
                        querySnapshot.forEach((doc) => {
                            var ari2 = `${doc.data().idCuenta}`
                            if (ariel==ari2 & names == `${doc.data().name}`){
                                 
                                    var mec = meses(`${doc.data().fecha}`)
                                    if ((numero+1) == mec) {
                                        
                                        
                                        var a = parseFloat(`${doc.data().impresiones}`);
                                        var a1 = parseFloat(`${doc.data().clicks}`);
                                        var a2 = parseFloat(`${doc.data().costo}`);
                                        var a3 = parseFloat(`${doc.data().ctr}`);
                                        ise = ise + a
                                        ise1 = ise1 + a1
                                        ise2 = ise2 + a2
                                        ise3 = ise3 + a3
                                    }
                                
                            }
                            
                        });
                        
                       
                        escribir(numero,idcamp,contador,contador1,contador2,contador3,ise,ise1,ise2,ise3,names,nomCuenta);
                        
                        
                       
                        
                        }
                    
                        
                
    
    
                         
        });

    }
    
   
}

function meses(fecha) {
    separador = "/", // un espacio en blanco
        limite = 2,
        arregloDeSubCadenas = fecha.split(separador, limite);
    return arregloDeSubCadenas[1]
}








function escribir(mes, idCampana,los,los1,los2,los3,las,las1,las2,las3,name,nomCuenta){
    db.collection("Sprensheet").get().then((querySnapshot) => {
    

        var a1=0;
        var a2=0;
        var a3=0;
        var a4=0;
        var a5=0;
        var a6=0;
        var a7=0;
        var a8=0;
        var a9=0;
        var a10=0;
        var a11=0;
        var a12=0;
        var a13=0;
        var a14=0;
        var a15=0;
        var a16=0;
        var a17=0;
        var a18=0;
        var a19=0;
        var a20=0;
        var a21=0;
        var a22=0;
        var a23=0;
        var a24=0;
        var a25=0;
        var a26=0;
       

        var b1=0;
        var b2=0;
        var b3=0;
        var b4=0;
        var b5=0;
        var b6=0;
        var b7=0;
        var b8=0;
        var b9=0;
        var b10=0;
        var b11=0;
        var b12=0;
        var b13=0;
        var b14=0;
        var b15=0;
        var b16=0;
        var b17=0;
        var b18=0;
        var b19=0;
        var b20=0;
        var b21=0;
        var b22=0;
        var b23=0;
        var b24=0;
        var b25=0;
        var b26=0;
        




        querySnapshot.forEach((doc) => {
            if(mes==`${doc.data().mesGestion}`){
                if(idCampana==`${doc.data().idcampanas}`){

                    var lead =parseFloat(`${doc.data().lead}`);
                    var conversionS=parseFloat(`${doc.data().conversionS}`);
                    var VentasLeadMes=parseFloat(`${doc.data().VentasLeadMes}`);
                    var VentasMesFacturadas=parseFloat(`${doc.data().VentasMesFacturadas}`);
                    var EfectividaddeLavVenta=parseFloat(`${doc.data().EfectividaddeLavVenta}`);
                    var EfectividaddeVentaFacturada=parseFloat(`${doc.data().EfectividaddeVentaFacturada}`);
                    var costoPorLead=parseFloat(`${doc.data().costoPorLead}`);
                    var CostoPorVentaLeadMes=parseFloat(`${doc.data().CostoPorVentaLeadMes}`);
                    var CostoPorVentaFacturada=parseFloat(`${doc.data().CostoPorVentaFacturada}`);
            
                    var merma=parseFloat(`${doc.data().merma}`);
                    var prioridad1=parseFloat(`${doc.data().prioridad1}`);
                    var CostoPrioridad1=parseFloat(`${doc.data().CostoPrioridad1}`);
                    var TimepoAtencionPrioridad=parseFloat(`${doc.data().TimepoAtencionPrioridad}`);
                    var conversionpociento=parseFloat(`${doc.data().conversionpociento}`);
                    var abiertoSinGestion=parseFloat(`${doc.data().abiertoSinGestion}`);
                    var calificado=parseFloat(`${doc.data().calificado}`);
                    var convertido=parseFloat(`${doc.data().convertido}`);
            
                    var soloConsulta=parseFloat(`${doc.data().soloConsulta}`);
                    var compraFutura=parseFloat(`${doc.data().compraFutura}`);
                    var DatInvalida=parseFloat(`${doc.data().DatInvalida}`);
                    var CostoAbierto=parseFloat(`${doc.data().CostoAbierto}`);
                    var CostoCalificado=parseFloat(`${doc.data().CostoCalificado}`);
                    var CostoConvertido=parseFloat(`${doc.data().CostoConvertido}`);
            
                    var CostoSoloPrecio=parseFloat(`${doc.data().CostoSoloPrecio}`);
                    var CostoCompraFutura=parseFloat(`${doc.data().CostoCompraFutura}`);
                    var costoDataInvalida=parseFloat(`${doc.data().costoDataInvalida}`);
                    
                    a1=a1+lead;
                    a2=a2+conversionS;
                    a3=a3+VentasLeadMes;
                    a4=a4+VentasMesFacturadas;
                    a5=a5+EfectividaddeLavVenta;
                    a6=a6+EfectividaddeVentaFacturada;
                    a7=a7+costoPorLead;
                    a8=a8+CostoPorVentaLeadMes;
                    a9=a9+CostoPorVentaFacturada;

                    a10=a10+merma;
                    a11=a11+prioridad1;
                    a12=a12+CostoPrioridad1;
                    a13=a13+TimepoAtencionPrioridad;
                    a14=a14+conversionpociento;
                    a15=a15+abiertoSinGestion;
                    a16=a16+calificado;
                    a17=a17+convertido;

                    a18=a18+soloConsulta;
                    a19=a19+compraFutura;
                    a20=a20+DatInvalida;
                    a21=a21+CostoAbierto;
                    a22=a22+CostoCalificado;
                    a23=a23+CostoConvertido;

                    a24=a24+CostoSoloPrecio;
                    a25=a25+CostoCompraFutura;
                    a26=a26+costoDataInvalida;
                    
                }

            }
            
    
        });
      

        querySnapshot.forEach((doc) => {
            if((mes-1)==`${doc.data().mesGestion}`){
                if(idCampana==`${doc.data().idcampanas}`){
                    
                    var lead =parseFloat(`${doc.data().lead}`);
                    var conversionS=parseFloat(`${doc.data().conversionS}`);
                    var VentasLeadMes=parseFloat(`${doc.data().VentasLeadMes}`);
                    var VentasMesFacturadas=parseFloat(`${doc.data().VentasMesFacturadas}`);
                    var EfectividaddeLavVenta=parseFloat(`${doc.data().EfectividaddeLavVenta}`);
                    var EfectividaddeVentaFacturada=parseFloat(`${doc.data().EfectividaddeVentaFacturada}`);
                    var costoPorLead=parseFloat(`${doc.data().costoPorLead}`);
                    var CostoPorVentaLeadMes=parseFloat(`${doc.data().CostoPorVentaLeadMes}`);
                    var CostoPorVentaFacturada=parseFloat(`${doc.data().CostoPorVentaFacturada}`);
            
                    var merma=parseFloat(`${doc.data().merma}`);
                    var prioridad1=parseFloat(`${doc.data().prioridad1}`);
                    var CostoPrioridad1=parseFloat(`${doc.data().CostoPrioridad1}`);
                    var TimepoAtencionPrioridad=parseFloat(`${doc.data().TimepoAtencionPrioridad}`);
                    var conversionpociento=parseFloat(`${doc.data().conversionpociento}`);
                    var abiertoSinGestion=parseFloat(`${doc.data().abiertoSinGestion}`);
                    var calificado=parseFloat(`${doc.data().calificado}`);
                    var convertido=parseFloat(`${doc.data().convertido}`);
            
                    var soloConsulta=parseFloat(`${doc.data().soloConsulta}`);
                    var compraFutura=parseFloat(`${doc.data().compraFutura}`);
                    var DatInvalida=parseFloat(`${doc.data().DatInvalida}`);
                    var CostoAbierto=parseFloat(`${doc.data().CostoAbierto}`);
                    var CostoCalificado=parseFloat(`${doc.data().CostoCalificado}`);
                    var CostoConvertido=parseFloat(`${doc.data().CostoConvertido}`);
            
                    var CostoSoloPrecio=parseFloat(`${doc.data().CostoSoloPrecio}`);
                    var CostoCompraFutura=parseFloat(`${doc.data().CostoCompraFutura}`);
                    var costoDataInvalida=parseFloat(`${doc.data().costoDataInvalida}`);
                    
                    b1=b1+lead;
                    b2=b2+conversionS;
                    b3=b3+VentasLeadMes;
                    b4=b4+VentasMesFacturadas;
                    b5=b5+EfectividaddeLavVenta;
                    b6=b6+EfectividaddeVentaFacturada;
                    b7=b7+costoPorLead;
                    b8=b8+CostoPorVentaLeadMes;
                    b9=b9+CostoPorVentaFacturada;

                    b10=b10+merma;
                    b11=b11+prioridad1;
                    b12=b12+CostoPrioridad1;
                    b13=b13+TimepoAtencionPrioridad;
                    b14=b14+conversionpociento;
                    b15=b15+abiertoSinGestion;
                    b16=b16+calificado;
                    b17=b17+convertido;

                    b18=b18+soloConsulta;
                    b19=b19+compraFutura;
                    b20=b20+DatInvalida;
                    b21=b21+CostoAbierto;
                    b22=b22+CostoCalificado;
                    b23=b23+CostoConvertido;

                    b24=b24+CostoSoloPrecio;
                    b25=b25+CostoCompraFutura;
                    b26=b26+costoDataInvalida;
                }
            }

             
    
        });
       
    

        /**if(b1!=0 & b2!=0 & b3!=0 & b4!=0 & b5!=0 & b6!=0 & b7!=0 & b8!=0 & b9!=0 & b10!=0 & b11!=0 & b12!=0 & b13!=0  & b14!=0 & b15!=0 & b16!=0 & b17!=0 & b18!=0 & b19!=0 & b20!=0 & b21!=0 & b22!=0 & b23!=0 & b24!=0 & b25!=0 & b26!=0  ){

        }else{

        }**/

        if (los!=0 & los1!=0 & los2!=0 & los3!=0){
            tabla.innerHTML += `
            <tr >
            
                    <td  class="sticky" >${name}</td>
                    <td> ${nomCuenta}</td>
                    <td style="text-align: right;">${Number(las.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(los.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((las-los)/los)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(las1.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(los1.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((las1-los1)/los1)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(las2.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(los2.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((las2-los2)/los2)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(las3.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(los3.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((las3-los3)/los3)*100).toFixed(2))}</td>
                    

                    <td style="text-align: right;">${Number(a1.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b1.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a1-b1)/b1)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a2.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b2.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a2-b2)/b2)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a3.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b3.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a3-b3)/b3)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a4.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b4.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a4-b4)/b4)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a5.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b5.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a5-b5)/b5)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a6.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b6.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a6-b6)/b6)*100).toFixed(2))}</td>
                    
                    <td style="text-align: right;">${Number(a7.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b7.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a7-b7)/b7)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a8.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b8.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a8-b8)/b8)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a9.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b9.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a9-b9)/b9)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a10.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b10.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a10-b10)/b10)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a11.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b11.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a11-b11)/b11)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a12.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b12.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a12-b12)/b12)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a13.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b13.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a13-b13)/b13)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a14.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b14.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a14-b14)/b14)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a15.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b15.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a15-b15)/b15)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a16.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b16.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a16-b16)/b16)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a17.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b17.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a17-b17)/b17)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a18.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b18.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a18-b18)/b18)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a19.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b19.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a19-b19)/b19)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a20.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b20.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a20-b20)/b20)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a21.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b21.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a21-b21)/b21)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a22.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b22.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a22-b22)/b22)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a23.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b23.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a23-b23)/b23)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a24.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b24.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a24-b24)/b24)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a25.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b25.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a25-b25)/b25)*100).toFixed(2))}</td>

                    <td style="text-align: right;">${Number(a26.toFixed(2))}</td>
                    <td style="text-align: right;">${Number(b26.toFixed(2))}</td>
                    <td style="text-align: right;">${Number((((a26-b26)/b26)*100).toFixed(2))}</td>

                    
            
            </tr>
        `


        }else{
            tabla.innerHTML += `
        <tr >
            <td class="sticky" >${name}</td>
            <td> ${nomCuenta}</td>
            <td style="text-align: right;">${Number(las.toFixed(2))}</td>
            <td style="text-align: right;">${Number(los.toFixed(2))}</td>
            <td style="text-align: right;">${"-"}</td>

            <td style="text-align: right;">${Number(las1.toFixed(2))}</td>
            <td style="text-align: right;">${Number(los1.toFixed(2))}</td>
            <td style="text-align: right;">${"-"}</td>

            <td style="text-align: right;">${Number(las2.toFixed(2))}</td>
            <td style="text-align: right;">${Number(los2.toFixed(2))}</td>
            <td style="text-align: right;">${"-"}</td>

            <td style="text-align: right;">${Number(las3.toFixed(2))}</td>
            <td style="text-align: right;">${Number(los3.toFixed(2))}</td>
            <td style="text-align: right;">${"-"}</td>

            
            <td style="text-align: right;">${Number(a1.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b1.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a1-b1)/b1)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a2.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b2.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a2-b2)/b2)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a3.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b3.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a3-b3)/b3)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a4.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b4.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a4-b4)/b4)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a5.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b5.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a5-b5)/b5)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a6.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b6.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a6-b6)/b6)*100).toFixed(2))}</td>
            
            <td style="text-align: right;">${Number(a7.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b7.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a7-b7)/b7)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a8.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b8.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a8-b8)/b8)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a9.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b9.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a9-b9)/b9)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a10.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b10.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a10-b10)/b10)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a11.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b11.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a11-b11)/b11)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a12.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b12.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a12-b12)/b12)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a13.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b13.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a13-b13)/b13)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a14.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b14.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a14-b14)/b14)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a15.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b15.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a15-b15)/b15)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a16.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b16.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a16-b16)/b16)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a17.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b17.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a17-b17)/b17)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a18.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b18.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a18-b18)/b18)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a19.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b19.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a19-b19)/b19)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a20.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b20.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a20-b20)/b20)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a21.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b21.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a21-b21)/b21)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a22.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b22.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a22-b22)/b22)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a23.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b23.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a23-b23)/b23)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a24.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b24.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a24-b24)/b24)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a25.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b25.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a25-b25)/b25)*100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(a26.toFixed(2))}</td>
            <td style="text-align: right;">${Number(b26.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((a26-b26)/b26)*100).toFixed(2))}</td>
            
        </tr>
        `

          }

          
    });
    
}

function AgrugarCuentas(){

    db.collection("Grupos").get().then((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {
            
    
        });

    });

    grupito= grupito+1;
    console.log("==========================esta es la segunda iteracion",grupito)

}


