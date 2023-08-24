const inputsRadio = document.querySelectorAll('input[name=choose]');
const myBody = document.querySelector('#myBody');
const Shopping = document.querySelector('.Shopping');

Shopping.addEventListener('click', showBasket);

let index, val, h, text, p, img, inp;
let divForP;


//מחליף קטגוריה בלחיצה על הרדיו
for (let i = 0; i < inputsRadio.length; i++) {
    inputsRadio[i].addEventListener('change',ShopProducts);
}

//הצגת המוצרים לפי קטגוריות
ShopProducts();
function ShopProducts() {
    for (let i = 0; i < inputsRadio.length; i++) {
        if (inputsRadio[i].checked == true) {
            index = i;
            val = inputsRadio[i].value;
        }
    }
    myBody.innerHTML = "";

    for (let i = 0; i < product.length; i++) {
        if (val == product[i].category || val == 'all') {
            divForP = document.createElement('div');
            divForP.setAttribute("id", "d" + i)
            divForP.classList.add("item");

            h = document.createElement("h3");
            text = document.createTextNode(product[i].name);
            h.appendChild(text);
            divForP.appendChild(h);

            img = document.createElement("img");
            img.setAttribute("src", product[i].linkImage);
            img.classList.add("img");
            divForP.appendChild(img);

            h = document.createElement("h5");
            text = document.createTextNode(product[i].code + ":מקט");
            h.appendChild(text);
            divForP.appendChild(h);


            img = document.createElement("img");
            img.setAttribute("src", '../../images/public/שח.png');
            h = document.createElement("p");
            text = document.createTextNode(product[i].price);
            h.appendChild(text);
            img.style.width = '6%';
            h.appendChild(img);
            /* h.style.display = 'flex';*/

            divForP.appendChild(h);

            inp = document.createElement("input");
            inp.setAttribute("type", "button");
            inp.setAttribute("value", "הוסף לסל");
            inp.addEventListener("click", addBasket);
            divForP.appendChild(inp);

            myBody.appendChild(divForP);

        }
    }
}







// מערך של כמות מוצרים שהוזמנו
let monim = [];
for (var i = 0; i < product.length; i++) {
    monim[i] = 0;
}

//בעת לחיצה על הוסף לסל
function addBasket(e) {
    /*console.log(e.target.id)*/
    let temp = e.target.parentNode.id;
    temp = temp.substring(1);
    temp = parseInt(temp);
    basket.push(product[temp]);
    /*console.log(basket);*/
    monim[temp]++;
    sum += product[temp].price;
    /*console.log(sum)*/

    document.getElementById("basket").innerHTML = sum;

}

// פונקציה להצגה של סל הקניות
//בעת לחיצה על העגלה
function showBasket() {
    localStorage.setItem("b", JSON.stringify(basket));
    localStorage.setItem("sum", sum);
    localStorage.setItem("monim", JSON.stringify(monim));

    window.open("basket.html");
}






//document.getElementById('mai').addEventListener('keydown', function (e) {
//    if (document.getElementById('mai').value != "" && e.key == "Enter") {
//        document.getElementById('mai').value = "";
//        }
//    });



    

