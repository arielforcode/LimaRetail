//creacion de los functions para firebase y acceder mediante un endpoint para 
//guardar nuestros datos
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';


admin.initializeApp(functions.config().firebase);

//creacion del endpoint que recibe datos del google ads
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
        fecha:req.query.fecha
    }).then(r=>{
        res.send('completado exitosamente')
    }).catch(err=>{
        res.send('Error en la transaccion')
    })
});

//endpoitn para recibir datos del sprensheet
exports.add1=functions.https.onRequest((req,res)=>{
    admin.firestore().collection('Sprensheet').add({
        idcampanas:req.query.idcampanas,
            nombres:req.query.nombres,
            col1:req.query.col1,
            col2:req.query.col2,
            col3:req.query.col3,
            col4:req.query.col4,
            col5:req.query.col5,
            cpl:req.query.cpl,
            mes:req.query.mes
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