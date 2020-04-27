function main() {
  
  
  //obteniendo todas las cuentas aociadas a el administrador
  var accountIterator = AdsManagerApp.accounts().get();
  var cuentaE = new Array();
  var NombresCuentas= new Array();
  //definiendo el array de los ids de las cuentas administradas
    while (accountIterator.hasNext()) {
      var account = accountIterator.next();
      var cuentaId=account.getCustomerId();
      var cuentita=account.getName();
      NombresCuentas.push(cuentita);
      cuentaE.push(cuentaId);
    }
  //generando reportes por la candidad de cuentas que existen actualmente administradas
  var nroCuentas=Math.round(cuentaE.length);
    for (var i=0; i < nroCuentas ; i++) {
      //llamando a la funcion que genera el reporte adquirido
      reporte(cuentaE[i],NombresCuentas[i]);  
    }
  
}


/**========================Funcion para generar los reportes de lasc uentas con el id cada cual que es administrada**/

function reporte(id,nombreCuenta){
  var mccAccount = AdsApp.currentAccount ();
  var childAccounts = AdsManagerApp.accounts (). withIds ([id]). get ();
  var childAccount = childAccounts.next ();
  AdsManagerApp.select(childAccount);
  var contador=0
  
  var grupoCapana=AdsApp.campaigns().get();
  Logger.log("=================================Datos de la cuenta=================================")
  while(grupoCapana.hasNext()){
    var tiempo="LAST_MONTH";
        var tipCuenta = grupoCapana.next();
        Logger.log("id de la cuenta :"+id)
        Logger.log("getId :"+tipCuenta.getId());
        Logger.log("getName :"+tipCuenta.getName());
        Logger.log("getAverageCpc :"+tipCuenta.getStatsFor(tiempo).getAverageCpc());
        Logger.log("getAverageCpm :"+tipCuenta.getStatsFor(tiempo).getAverageCpm());
        Logger.log("getClicks :"+tipCuenta.getStatsFor(tiempo).getClicks());
        Logger.log("getImpressions :"+tipCuenta.getStatsFor(tiempo).getImpressions());
        Logger.log("getCost :"+tipCuenta.getStatsFor(tiempo).getCost());
        Logger.log("getCtr :"+tipCuenta.getStatsFor(tiempo).getCtr());
        Logger.log(fecha())
        Logger.log("=======================================================================");
    contador=contador+1;
   
    
  
      var urlTemplate = "https://us-central1-cinebol2019.cloudfunctions.net/add?idCuenta=%idCuenta%&idCamapana=%idCamapana%&name=%name%&averageCpc=%averageCpc%&averageCpm=%averageCpm%&clicks=%clicks%&impresiones=%impresiones%&costo=%costo%&ctr=%ctr%&fecha=%fecha%&nombreCuenta=%nombreCuenta%";
         var url=urlTemplate.replace("%idCuenta%", encodeURIComponent(juan))
                    .replace("%idCamapana%", encodeURIComponent(.getId()))
                    .replace("%name%", encodeURIComponent(tipCuenta.getName()))
                    .replace("%averageCpc%",encodeURIComponent(tipCuenta.getStatsFor(tiempo).getAverageCpc()))
                    .replace("%averageCpm%", encodeURIComponent(tipCuenta.getStatsFor(tiempo).getAverageCpm()))
                    .replace("%clicks%",encodeURIComponent(tipCuenta.getStatsFor(tiempo).getClicks()))
                    .replace("%impresiones%", encodeURIComponent(tipCuenta.getStatsFor(tiempo).getImpressions()))
                    .replace("%costo%", encodeURIComponent(tipCuenta.getStatsFor(tiempo).getCost()))
         .replace("%ctr%", encodeURIComponent(tipCuenta.getStatsFor(tiempo).getCtr()))
         .replace("%fecha%",encodeURIComponent(fecha()))
         .replace("%nombreCuenta%",encodeURIComponent(nombreCuenta));
        Logger.log(url);
        var response = UrlFetchApp.fetch(url);
         //imprimir la peticion get del endpoint para el almacenamiento de los datos
        Logger.log(response.getContentText());
      
    
  }
  AdsManagerApp.select(childAccount);
  Logger.log(contador);
}
//construccion de la fecha pra el endpoint, uso el fistrado por fecha de tipo string
function fecha(){
  //generando la fecha para el acceso
  var now     = new Date();
  var year    = now.getFullYear();
  var month   = now.getMonth()+1;
  var day     = now.getUTCDate();
   //construyendo la fecha
  var FechaActual = day + "/" + month + "/" + year;
  return FechaActual;
}