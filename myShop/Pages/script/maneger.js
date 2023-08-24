const btn = document.querySelector('#enterOfaddP');
const inpName = document.querySelector('#nameUser');
const inpPas = document.querySelector('#pasUser');

let name;
let pas;


btn.addEventListener('click', function () {
    if (inpName.value != "" && inpPas.value != "") {
        if (localStorage.getItem('name') == null && localStorage.getItem('pas') == null) {
            localStorage.setItem('name', inpName.value);
            localStorage.setItem('pas', inpPas.value);
        }
        else {
            if (localStorage.getItem('name') == inpName.value && localStorage.getItem('pas') == inpPas.value)
                window.open('addP.html');
            else {
                alert('אחד מהפרטים שהקשת שגוי אנא נסה שנית');
                inpName.value = "";
                inpPas.value = "";
            }
           
             
        }

}
    else {
        alert('אחד מהפרטים שהקשת שגוי אנא נסה שנית');
        inpName.value = "";
        inpPas.value = "";
    }
        

});






