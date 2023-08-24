const fcode = document.querySelector('#fcode');
const fname = document.querySelector('#fname');
const fprice = document.querySelector('#fprice');
const flink = document.querySelector('#flink');
const inputsRadioCa = document.querySelectorAll('input[name=category]');
const btnADD = document.querySelector('#ADD');

btnADD.addEventListener('click', addP);

function Product(code, name, price, category, linkImage) {
    this.code = code;
    this.name = name;
    this.price = price;
    this.category = category;
    this.linkImage = linkImage;

}
let radio;
let newP = [];

function addP() {
    if (fcode.value != "" && fname.value != "" && fprice.value != "" && flink.value != "") {
        for (let i = 0; i < inputsRadioCa.length; i++) {
            if (inputsRadioCa[i].checked == true)
                radio = inputsRadioCa[i].id;
        }
        let p1 = new Product(fcode.value, fname.value, parseInt(fprice.value), radio, flink.value);
        
        if (localStorage.getItem('newP') == null) {
            newP.push(p1);    
        }
        else {
            newP = localStorage.getItem('newP');
            newP = JSON.parse(newP);
            newP.push(p1);
            
           
        }
        let x = JSON.stringify(newP);
        localStorage.setItem('newP', x);
        alert('המוצר נקלט בהצלחה!');
        fcode.value = "";
        fname.value = "";
        fprice.value = "";
        flink.value = "";
    }

}


