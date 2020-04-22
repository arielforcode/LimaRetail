# LimaRetail
Repositorio de Lima Retail para administrar cuentas de google Ads mediante la visualizacion de una interfaz web 

## Crear un modo offline de la pagina web

Los pasos a seguir son los siguientes para la construccion.
* Descarga y apartar los archivos de scripts y el index.html.
* Posteriormente compilarlo y abrir el index en un navegador web
* Al abrir el codigo verificar la configuracion remota para las configuraciones de la cuenta con la que se creo y agregar el remoto.
* Poner el mes anterior para que pueda recolertar los registros de la base de datos con respecto a este mes y el anterior.

## Crear el Sprensheet
* Crear un nuevo sprensheet con el modelo que se proporciono
* ir a la secion de heramientas y ver en el menu la seccion que dice secuencia de comando,(crear uno nuevo) y pregar el codigo de la carpeta del sprensheet ahi para guardar los datos en firesbase.
* Nota verificar mucho el id del sprensheet.
* Verificar el numero de hoja que se proporciona

## Crear el function
* primeramente descargar las tools de firebase
* loguearse a firebase con el comando.
    - firebase login
* iniciar fibenase con el comando.
    - firebase init
* descargara todos loa archivos necesarios con la actualizacion del npm y posteriormente moverse a la carpeta functions que cre y adentro a la carpeta src y copiar el codigo de la carpeta Functions.
* Finalmente para el deploy usar el comando.
    - Firebase deploy --only functions

Este comadno creara el deploy de todas las funciones creadas en el archivo intex.ts

## Crear cuenta de google ads
* Crear una cuenta para administrar de otras cuentas de google ads
* Agregar las cuentas que itera mediante los ids de las cuentas
* ir a la seccion de configuracion y a la secciond e secuencias en bloque y crea una nueva secuencia.
* copiar el codigo de la carpeta scriptAds 
* luego compilarlo en la parte inferior con la vista previa 
