
const miLabel = document.getElementById("miLabel");

setInterval(Update, 1000);

function Update() {

    let date = new Date();
    miLabel.innerHTML = formatTime(date);

    function formatTime(date) {

        let horas = date.getHours();
        let minutos = date.getMinutes();
        let segundos = date.getSeconds();


        horas = formatZeroes(horas);
        minutos = formatZeroes(minutos);
        segundos = formatZeroes(segundos);

         return `${horas}:${minutos}:${segundos}`;
    }

    function formatZeroes(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}












// let cuentaSG = setInterval(subeTiempo, 1000);
// let contador1, contador2, contador3 = 0;
// cuentaVueltasSG = 0;

// document.getElementById("texto1").value = contador1;

// function subeTiempo() {
//     contador1 +=1;
//     contador1 = contador1%60;
//     cuentaVueltasSG += 1
//     if (cuentaVueltasSG == 0) {
//         if ( contador1<10) { 
//         document.getElementById('texto1').innerHTML = "0" + contador1;
//         }else{
//         document.getElementById("texto1").innerHTML = contador1%60;
//         }
//     } else {
//         contador2 +=1;
//         if(contador2 <10) {
//             document.getElementById("texto2").innerHTML = "0" + contador2;
//         }else{
//             document.getElementById("texto2").innerHTML = contador2;

//         }
//     }
// }

