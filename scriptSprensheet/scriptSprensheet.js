function myFunction() {
  var sps=SpreadsheetApp.openById("198bkGoduuQqGCMQIqlfyGOrGJGIhMqIBh6m7SqUtcwI");
  var sheet=sps.getSheets();
  var hoja=2;
  var data=sheet[hoja].getDataRange().getValues();
  var tama=Math.round(data.length)
  
  
  for (var i=1 ;i<tama;i++){
    
    
    var row=data[i]
    //seccion para le nombre y el id
    var file1=row[0]
    var file2=row[1]
    //seccion para el resto de datos considerando las columnas
    var file3=row[2]
    var file4=row[3]
    var file5=row[4]
    var file6=row[5]
    var file7=row[6]
    var file8=row[7]
    var file9=row[8]
    var file10=row[9]
    var file11=row[10]
    var file12=row[11]
    var file13=row[12]
    var file14=row[13]
    var file15=row[14]
    var file16=row[15]
    var file17=row[16]
    var file18=row[17]
    var file19=row[18]
    var file20=row[19]
    var file21=row[20]
    var file22=row[21]
    var file23=row[22]
    var file24=row[23]
    var file25=row[24]
    var file26=row[25]
    var file27=row[26]
    var file28=row[27]
    
    
    Logger.log(file1,file2,file3,file4,file5,file6,file7,file8);
   
    var urlTemplate = "https://us-central1-cinebol2019.cloudfunctions.net/add1?nombres=%nombres%&idcampanas=%idcampanas%&lead=%lead%&conversionS=%conversionS%&VentasLeadMes=%VentasLeadMes%&VentasMesFacturadas=%VentasMesFacturadas%&EfectividaddeLavVenta=%EfectividaddeLavVenta%&EfectividaddeVentaFacturada=%EfectividaddeVentaFacturada%&costoPorLead=%costoPorLead%&CostoPorVentaLeadMes=%CostoPorVentaLeadMes%&CostoPorVentaFacturada=%CostoPorVentaFacturada%&merma=%merma%&prioridad1=%prioridad1%&CostoPrioridad1=%CostoPrioridad1%&TimepoAtencionPrioridad=%TimepoAtencionPrioridad%&conversionpociento=%conversionpociento%&abiertoSinGestion=%abiertoSinGestion%&calificado=%calificado%&convertido=%convertido%&soloConsulta=%soloConsulta%&compraFutura=%compraFutura%&DatInvalida=%DatInvalida%&CostoAbierto=%CostoAbierto%&CostoCalificado=%CostoCalificado%&CostoConvertido=%CostoConvertido%&CostoSoloPrecio=%CostoSoloPrecio%&CostoCompraFutura=%CostoCompraFutura%&costoDataInvalida=%costoDataInvalida%&mesGestion=%mesGestion%";
         var url=urlTemplate.replace("%nombres%", encodeURIComponent(file1))
                    .replace("%idcampanas%", encodeURIComponent(file2))
                    .replace("%lead%",encodeURIComponent(file3))
                    .replace("%conversionS%", encodeURIComponent(file4))
                    .replace("%VentasLeadMes%",encodeURIComponent(file5))
                    .replace("%VentasMesFacturadas%", encodeURIComponent(file6))
                    .replace("%EfectividaddeLavVenta%", encodeURIComponent(file7))
                    .replace("%EfectividaddeVentaFacturada%", encodeURIComponent(file8))
                    .replace("%costoPorLead%", encodeURIComponent(file9))
                     .replace("%CostoPorVentaLeadMes%", encodeURIComponent(file10))
                     .replace("%CostoPorVentaFacturada%", encodeURIComponent(file11))
         .replace("%merma%", encodeURIComponent(file12))
         .replace("%prioridad1%", encodeURIComponent(file13))
         .replace("%CostoPrioridad1%", encodeURIComponent(file14))
         .replace("%TimepoAtencionPrioridad%", encodeURIComponent(file15))
         .replace("%conversionpociento%", encodeURIComponent(file16))
         .replace("%abiertoSinGestion%", encodeURIComponent(file17))
         .replace("%calificado%", encodeURIComponent(file18))
         .replace("%convertido%", encodeURIComponent(file19))
         .replace("%soloConsulta%", encodeURIComponent(file20))
         .replace("%compraFutura%", encodeURIComponent(file21))
         .replace("%DatInvalida%", encodeURIComponent(file22))
         .replace("%CostoAbierto%", encodeURIComponent(file23))
         .replace("%CostoCalificado%", encodeURIComponent(file24))
         .replace("%CostoConvertido%", encodeURIComponent(file25))
         .replace("%CostoSoloPrecio%", encodeURIComponent(file26))
         .replace("%CostoCompraFutura%", encodeURIComponent(file27))
         .replace("%costoDataInvalida%", encodeURIComponent(file28))
         .replace("%mesGestion%", encodeURIComponent(hoja))
         
        //Logger.log(url);
        var response = UrlFetchApp.fetch(url);
         //imprimir la peticion get del endpoint para el almacenamiento de los datos
        Logger.log(response.getContentText());
  }
}