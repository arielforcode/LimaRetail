//creacion de los functions para firebase y acceder mediante un endpoint para 
//guardar nuestros datos
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';


admin.initializeApp(functions.config().firebase);

exports.add=functions.https.onRequest((req,res)=>{
    admin.firestore().collection('Datos').add({
        idCuenta:req.query.idCuenta,
        idCamapana:req.query.idCamapana,
        name:req.query.name,
        averageCpc:req.query.averageCpc,
        averageCpm:req.query.averageCpm,
        clicks:req.query.clicks,
        impresiones:req.query.impresiones,
        costo:req.query.costo,
        ctr:req.query.ctr,
        fecha:req.query.fecha,
        nombreCuenta:req.query.nombreCuenta
    }).then(r=>{
        res.send('completado exitosamente')
    }).catch(err=>{
        res.send('Error en la transaccion')
    })
});


exports.add1=functions.https.onRequest((req,res)=>{
    admin.firestore().collection('Sprensheet').add({
        nombres:req.query.nombres,
        idcampanas:req.query.idcampanas,
        lead:req.query.lead,
        conversionS:req.query.conversionS,
        VentasLeadMes:req.query.VentasLeadMes,

        VentasMesFacturadas:req.query.VentasMesFacturadas,
        EfectividaddeLavVenta:req.query.EfectividaddeLavVenta,
        EfectividaddeVentaFacturada:req.query.EfectividaddeVentaFacturada,
        costoPorLead:req.query.costoPorLead,
        CostoPorVentaLeadMes:req.query.CostoPorVentaLeadMes,
        CostoPorVentaFacturada:req.query.CostoPorVentaFacturada,

        merma:req.query.merma,
        prioridad1:req.query.prioridad1,
        CostoPrioridad1:req.query.CostoPrioridad1,
        TimepoAtencionPrioridad:req.query.TimepoAtencionPrioridad,
        conversionpociento:req.query.conversionpociento,
        abiertoSinGestion:req.query.abiertoSinGestion,
        calificado:req.query.calificado,
        convertido:req.query.convertido,

        soloConsulta:req.query.soloConsulta,
        compraFutura:req.query.compraFutura,
        DatInvalida:req.query.DatInvalida,
        CostoAbierto:req.query.CostoAbierto,
        CostoCalificado:req.query.CostoCalificado,
        CostoConvertido:req.query.CostoConvertido,

        CostoSoloPrecio:req.query.CostoSoloPrecio,
        CostoCompraFutura:req.query.CostoCompraFutura,
        costoDataInvalida:req.query.costoDataInvalida,
        mesGestion:req.query.mesGestion
    }).then(r=>{
        res.send('completado exitosamente')
    }).catch(err=>{
        res.send('Error en la transaccion')
    })
});

exports.grupos=functions.https.onRequest((req,res)=>{
    admin.firestore().collection('Grupos').add({
        idcampanas:req.query.idcampanas,
        icuenta:req.query.icuenta,
        nrogrupo:req.query.nrogrupo    
    }).then(r=>{
        res.send('completado exitosamente')
    }).catch(err=>{
        res.send('Error en la transaccion')
    })
});


//ursl modelo para los endpoitn
//==============url de google ads
//"https://us-central1-cinebol2019.cloudfunctions.net/add?idCuenta=%idCuenta%&idCamapana=%idCamapana%&name=%name%&averageCpc=%averageCpc%&averageCpm=%averageCpm%&clicks=%clicks%&impresiones=%impresiones%&costo=%costo%&ctr=%ctr%&fecha=%fecha%"
//==============url para el sprensheet
//"https://us-central1-cinebol2019.cloudfunctions.net/add1?idcampanas=%idcampanas%&nombres=%nombres%&col1=%col1%&col2=%col2%&col3=%col3%&col4=%col4%&col5=%col5%&cpl=%cpl%&mes=%mes%"