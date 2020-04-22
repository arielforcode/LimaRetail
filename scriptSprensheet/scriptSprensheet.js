function myFunction() {
    //definimos el id del sprensheet del cual queremos jalr los datos
    var sps=SpreadsheetApp.openById("1MiqZIIYj1MTRlcnX5PegdsXcDU88pjziiSH7QSA_bqw");
    var sheet=sps.getSheets();
    // la variable hoja hace referencia a la hora del sprensheet que queremos sacr sus datos
    // cabe recalcar que el mismo hara referencia al mes
    // ejecutar el script por cada mes para que se almacene en la base de datos
    var hoja=1
    var data=sheet[hoja].getDataRange().getValues();
    var tama=Math.round(data.length)
    Logger.log(data.length)
    for (var i=1 ;i<tama;i++){
      var row=data[i]
      var file1=row[0]
      var file2=row[1]
      var file3=row[2]
      var file4=row[3]
      var file5=row[4]
      var file6=row[5]
      var file7=row[6]
      var file8=row[7]
      //subiendo los datos a firestore en al coleciion Sprensheet
      var urlTemplate = "https://us-central1-cinebol2019.cloudfunctions.net/add1?idcampanas=%idcampanas%&nombres=%nombres%&col1=%col1%&col2=%col2%&col3=%col3%&col4=%col4%&col5=%col5%&cpl=%cpl%&mes=%mes%";
           var url=urlTemplate.replace("%idcampanas%", encodeURIComponent(file2))
                      .replace("%nombres%", encodeURIComponent(file1))
                      .replace("%col1%",encodeURIComponent(file3))
                      .replace("%col2%", encodeURIComponent(file4))
                      .replace("%col3%",encodeURIComponent(file5))
                      .replace("%col4%", encodeURIComponent(file6))
                      .replace("%col5%", encodeURIComponent(file7))
                      .replace("%cpl%", encodeURIComponent(file8))
                      .replace("%mes%", encodeURIComponent(hoja));
          //Logger.log(url);
          var response = UrlFetchApp.fetch(url);
           //imprimir la peticion get del endpoint para el almacenamiento de los datos
           Logger.log(response.getContentText());
  
    }
  }