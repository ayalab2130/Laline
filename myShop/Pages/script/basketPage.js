let index;
let flag = 0;
let sal = localStorage.getItem("b");
sal = JSON.parse(sal);
let monim = localStorage.getItem("monim");
monim = JSON.parse(monim);
console.log(monim);
let sumNow = localStorage.getItem("sum");
sumNow = JSON.parse(sumNow);
//show products as table

let table, row, col, text, h, img, inp;
let cat = [];


for (let j = 0; j < 3; j++) {
    cat[j] = 0;

}

table = document.createElement("table");



const modal = document.getElementById("myModal");

// Get the button that opens the modal
/*var btn = document.getElementById("myBtn");*/

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function sell() {
    sumNow = parseFloat(sumNow * 0.8);
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






for (var i = 0; i < monim.length; i++) {


    if (monim[i] != 0) {


        row = document.createElement("tr");
        col = document.createElement("td");

        h = document.createElement("p");
        text = document.createTextNode(product[i].name);
        h.appendChild(text);
        col.appendChild(h);
        row.appendChild(col);

        col = document.createElement("td");
        img = document.createElement("img");
        img.setAttribute("src", product[i].linkImage);
        col.appendChild(img);
        row.appendChild(col);

        col = document.createElement("td");

        h = document.createElement("p");
        text = document.createTextNode(product[i].price + "  שקלים  ");
        h.appendChild(text);
        col.appendChild(h);
        row.appendChild(col);

        inp = document.createElement("input");
        inp.setAttribute("type", "button");
        inp.setAttribute("value", "+");
        inp.addEventListener("click", addBasket);
        inp.setAttribute("data-place", i);
        col.appendChild(inp);
        row.appendChild(col);
        // כמות שהוזמנה
        h = document.createElement("p");
        h.setAttribute("id", "p" + i);
        text = document.createTextNode(monim[i]);
        h.appendChild(text);
        col.appendChild(h);
        row.appendChild(col);



        inp = document.createElement("input");
        inp.setAttribute("type", "button");
        inp.setAttribute("value", "-");
        inp.setAttribute("data-place", i);
        inp.addEventListener("click", removeBasket);
        col.appendChild(inp);
        row.appendChild(col);

        row.setAttribute('id', 'r' + i);

        table.appendChild(row);





        // סופר כמה המוצרים מאותה קטגוריה
        if (product[i].category == 'GIFT')
            cat[0] += monim[i];
        else
            if (product[i].category == 'SMELL')
                cat[1] += monim[i];
            else cat[2] + monim[i];
        

    }
}



for (let c = 0; c < cat.length; c++) {
    if (cat[c] >= 3) {
        sell();
        flag = 1;
         break;}
}





//סך הכל
row = document.createElement("tr");
col = document.createElement("td");
h = document.createElement("p");
h.setAttribute("id", "last");
text = document.createTextNode("    סך הכל   " + sumNow);
h.appendChild(text);
col.appendChild(h);
row.appendChild(col);

table.appendChild(row);
document.getElementById("show").appendChild(table);


let ezer;

function addBasket() {
    ezer = event.target.getAttribute("data-place");
    console.log(ezer);
    monim[ezer]++;
    sumNow += product[ezer].price;
    document.getElementById("p" + ezer).innerHTML = monim[ezer];
    if (flag == 0) {
        if (product[ezer].category == 'GIFT')
            cat[0]++;
        else
            if (product[ezer].category == 'SMELL')
                cat[1]++;
            else cat[2]++;

        for (let c = 0; c < cat.length; c++) {
            if (cat[c] >= 3) {
                sell();
                flag = 1;
                break;
            }
        }
    }
    document.getElementById("last").innerText = sumNow + "   סך הכל    ";



}


function removeBasket() {
    ezer = event.target.getAttribute("data-place");
    console.log(ezer);
    if (monim[ezer] > 1) {
        monim[ezer]--;

        document.getElementById("p" + ezer).innerHTML = monim[ezer];

        if (flag == 1) {
            if (product[ezer].category == 'GIFT')
                cat[0]--;
            else
                if (product[ezer].category == 'SMELL')
                    cat[1]--;
                else cat[2]--;
            let c;
            for (c = 0; c < cat.length; c++) {
                if (cat[c] >= 3) {
                    break;
                }

            }
            if (c == cat.length) {
                flag = 0;
                sumNow = sumNow * 100 / 80;
            }
        }
        sumNow -= product[ezer].price;
        document.getElementById("last").innerText = sumNow + "   סך הכל    ";
    }
    else {

        monim[ezer]--;

        document.getElementById("p" + ezer).innerHTML = monim[ezer];

        if (flag == 1) {
            if (product[ezer].category == 'GIFT')
                cat[0]--;
            else
                if (product[ezer].category == 'SMELL')
                    cat[1]--;
                else cat[2]--;

            for (c = 0; c < cat.length; c++) {
                if (cat[c] >= 3) {
                    break;
                }

            }
            if (c == cat.length) {
                flag = 0;
                sumNow = sumNow * 100 / 80;
            }
        }
        sumNow -= product[ezer].price;
        document.getElementById("last").innerText = sumNow + "   סך הכל    ";
        table.removeChild(document.getElementById("r" + ezer));
    }


}












