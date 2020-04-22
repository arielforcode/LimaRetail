
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
    if (user) {
        // Informacion de la cuenta
        db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
        <div>Entro con el usuario : ${user.email}</div>
        <div>Sus Cuentas Asociadas son :${doc.data().bio}</div>
      `;
            accountDetails.innerHTML = html;
        });

        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {

        accountDetails.innerHTML = '';

        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
};



const setupGuides = (user) => {

    if (user) {

        db.collection('users').doc(user.uid).get().then(doc => {

            var ariel = `${doc.data().bio}`;
            cargar(ariel)

        });

    } else {
        guideList.innerHTML = '';
    }




};


document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});

//Funcionalidad de la cuenta y agregacion de los registros en la tabal al verificar la cuenta
function cargar(ariel) {

    var tabla = document.getElementById('tabla')
    //var numero hace refencia la mes anterior al actual con el que se recolectaran todos los registro del mes anterior y el actual
    var numero = 3;
    var lex = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosoto", "Septiembre", "Noviembre", "Diciembre"]
    document.getElementById('mesActual').innerHTML = `<center>${(lex[numero])}</center>`;
    var names = "";
    let fruta = new Array();



    db.collection("Datos").get().then((querySnapshot) => {
        tabla.innerHTML = '';
        //obtener los nombres de todas la cuentas en un array
        querySnapshot.forEach((doc) => {
            var ari = `${doc.data().idCuenta}`
            if (ariel == ari) {
                fruta.push(`${doc.data().name}`)
            }

        });
        //crear un vector sin nombres repetidos para iterar en al cuenta 
        let sinRepetir = [...new Set(fruta)];
        //for para saber cuantos nombres exitiran en nuestra cuenta
        for (var i = 0; i < sinRepetir.length; i++) {
            names = sinRepetir[i];
            var contador = 0;
            var contador1 = 0;
            var contador2 = 0;
            var contador3 = 0;
            var idcamp = "";
            var ise = 0;
            var ise1 = 0;
            var ise2 = 0;
            var ise3 = 0;
            var alguito = 0;


            querySnapshot.forEach((doc) => {
                var ari = `${doc.data().idCuenta}`
                //seccion donde pregunta si el id de la cuenta es igual al id del documento iterado y validadno su nombre
                if (ariel == ari & names == `${doc.data().name}`) {
                    //seccion para adicionar y contabilizar los registro del mes en especifico
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
                        idcamp = idcamp + `${doc.data().idCamapana}`

                    }

                }
                alguito = parseFloat(0.0)
            });

            querySnapshot.forEach((doc) => {
                var ari2 = `${doc.data().idCuenta}`
                if (ariel == ari2 & names == `${doc.data().name}`) {
                    var mec = meses(`${doc.data().fecha}`)
                    if ((numero + 1) == mec) {
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
            //mandar los datos a lasiguiente funcion para hacer el match con el sprensheet
            escribir(numero, idcamp, contador, contador1, contador2, contador3, ise, ise1, ise2, ise3, names);
        }
    });
}
function meses(fecha) {
    separador = "/", // un espacio en blanco
        limite = 2,
        arregloDeSubCadenas = fecha.split(separador, limite);
    return arregloDeSubCadenas[1]
}
//funcion final para escribit los datos en la tabla totalmente
function escribir(mes, idCampana, los, los1, los2, los3, las, las1, las2, las3, name) {
    db.collection("Sprensheet").get().then((querySnapshot) => {
        var costoMesA = 0;
        var costoMesP = 0;
        //seccion donde saca de la collecion sprensheet los registros con un mes igual al anterior
        querySnapshot.forEach((doc) => {
            if (mes == `${doc.data().mes}`) {
                if (idCampana == `${doc.data().idcampanas}`) {
                    var auxlio = parseFloat(`${doc.data().col1}`);
                    costoMesA = costoMesA + auxlio;
                }
            }
        });
        //seccion para sacar los registro del sprensheet con el mes actual
        querySnapshot.forEach((doc) => {
            if ((mes + 1) == `${doc.data().mes}`) {
                if (idCampana == `${doc.data().idcampanas}`) {
                    var auxlios = parseFloat(`${doc.data().col1}`);
                    costoMesP = costoMesP + auxlios;
                }
            }
        });
        //seccion para pintar toda la tabla 
        if (los != 0 & los1 != 0 & los2 != 0 & los3 != 0) {
            tabla.innerHTML += `
            <tr>
            <th class="sticky" >${name}</th>
            <td style="text-align: right;">${Number(las.toFixed(2))}</td>
            <td style="text-align: right;">${Number(los.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((las - los) / los) * 100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(las1.toFixed(2))}</td>
            <td style="text-align: right;">${Number(los1.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((las1 - los1) / los1) * 100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(las2.toFixed(2))}</td>
            <td style="text-align: right;">${Number(los2.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((las2 - los2) / los2) * 100).toFixed(2))}</td>

            <td style="text-align: right;">${Number(las3.toFixed(2))}</td>
            <td style="text-align: right;">${Number(los3.toFixed(2))}</td>
            <td style="text-align: right;">${Number((((las3 - los3) / los3) * 100).toFixed(2))}</td>
            
            <td style="text-align: right;">${Number(costoMesP.toFixed(2))}</td>
            <td style="text-align: right;">${Number(costoMesA)}</td>
            <td style="text-align: right;">${Number((((costoMesP - costoMesA) / costoMesA) * 100).toFixed(2))}</td>
            <td style="text-align: right;">${"-"}</td>
            </tr>
        `


        } else {
            tabla.innerHTML += `
        <tr>
        <th class="sticky" >${name}</th>
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

        <td style="text-align: right;">${Number(costoMesP.toFixed(2))}</td>
        <td style="text-align: right;">${Number(costoMesA)}</td>
        <td style="text-align: right;">${Number((((costoMesP - costoMesA) / costoMesA) * 100).toFixed(2))}</td>
        <td style="text-align: right;">${"-"}</td>
        </tr>
        `
        }
    });
}


