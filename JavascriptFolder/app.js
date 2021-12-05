let button = document.getElementsByClassName("eventButton"); // Always remember that document.getElementsByClassName gives HTML document list . So, to grab a particular class we have to use index(document.getElementsByClassName[index])
// console.log(button);

button = Array.from(button);
button.forEach(item => {
    item.addEventListener('click', detectSymbol);
    // item.addEventListener('display',displaySymbol);
});
// console.log(button);

function detectSymbol(e) {
    let a = e.target.innerHTML; // e is the event object that gives all the information about the object...
    // console.log(a);
    displayExpression(e);
    console.log(e.target.parentNode)
    e.target.parentNode.classList.add('active')
    setTimeout(() => {
        e.target.parentNode.classList.remove('active')
    }, 100) 

}

let count = 0, operator = 0;
let eqto = 0;

function displayExpression(e) {
    let b = document.getElementsByClassName("fill-it")[0];
    let c = document.getElementsByClassName("res-fill")[0];
    // let d = document.getElementsByClassName("fill-it");
    console.log(b);

    if (eqto > 0) {
        c.innerHTML = c.innerHTML.slice(1, c.innerHTML.length);
        b.innerHTML = c.innerHTML;
        c.innerHTML = "";
        eqto--;

    }


    console.log(e.target.classList);
    console.log(e.target.innerHTML);


    if (e.target.classList.length === 1) {
        b.innerHTML += e.target.innerHTML;

    }
    else if (e.target.classList[1] === "fa-divide") {
        count = 4;

        b.innerHTML += " / ";
        operator = 1;
    }
    else if (e.target.classList[1] == "fa-times") {
        count = 3;
        b.innerHTML += " * ";
        operator = 1;
    }
    else if (e.target.classList[1] == "braces") {
        let braceButton = document.getElementsByClassName("braces")[1];
        if (operator === 0) {
            b.innerHTML += "(";
        }
        if (operator === 1) {
            b.innerHTML += ")";
            operator = 0;
        }



     }
    else if (e.target.classList[1] == "AC") {
        b.innerHTML = "";
        c.innerHTML = "";
    }
    else if (e.target.classList[1] == "fa-redo") {

        if (b.innerHTML[b.innerHTML.length - 1] != " ")
            b.innerHTML = b.innerHTML.slice(0, b.innerHTML.length - 1);//The slice() method extracts parts of a string and returns the extracted parts in a new string. The first parameter is the mandatory and specifies start position for the extraction to take place. The second parameter is optional and specifies the position up to, but not including where the extraction ends. If we omit this parameter, the sliced substring goes from start position to the end of the string.
        else
            b.innerHTML = b.innerHTML.slice(0, b.innerHTML.length - 3);
    }
    else if (e.target.classList[1] == "equalto-sign") {
        c.innerHTML += e.target.innerHTML;
        myfunction(b, count, c);
        eqto++;



    }
    else if (e.target.classList[1] == "subtraction" || e.target.classList[1] == "addition") {
        if (e.target.classList[1] == "subtraction") {
            b.innerHTML += " - ";
            count = 2;
            operator = 1;
        }
        else {
            b.innerHTML += " + ";
            count = 1;
            operator = 1;
        }
    }

    else if (e.target.classList[1] == "mod") {
        b.innerHTML += " % ";
        operator = 1;
    }



}

function myfunction(b, count, c) {

    // console.log(b);



    /* ASK ASHWINI ABOUT THIS
    */
    try {
        c.innerHTML += eval(b.innerHTML.toString());

    }
    catch (e) {
        c.innerHTML += "Invalid Exp";
    }





    // let i = 0, index;
    // console.log(count);
    // console.log(b.innerHTML);
    // console.log(c.innerHTML);

    // while (b.innerHTML[i] != " ") {
    //     i++;
    // }
    // index = i;
    // let z1 = b.innerHTML.slice(0, index);
    // console.log(typeof (z1));
    // console.log(z1);
    // let j = b.innerHTML.length - 1;
    // while (b.innerHTML[j] != " ") {
    //     j--;

    // }
    // let z2 = b.innerHTML.slice(j + 1, b.innerHTML.length);
    // console.log(z2);
    // console.log(typeof (z2));
    // let k1 = Number(z1);
    // let k2 = Number(z2);
    // console.log(k1);
    // console.log(typeof (k1));
    // console.log(k2);
    // console.log(typeof (k2));

    // switch (count) {
    //     case 1:
    //         let m1 = (k1 + k2);
    //         console.log(m1);
    //         console.log(typeof (m1));
    //         let addRes = m1.toString();
    //         console.log(addRes);
    //         console.log(typeof (addRes));
    //         c.innerHTML += addRes;
    //         break;
    //     case 2:
    //         let m2 = (k1 - k2);
    //         let subRes = m2.toString();
    //         c.innerHTML += subRes;
    //         break;
    //     case 3:
    //         let m3 = k1 * k2;
    //         let multRes = m3.toString();
    //         c.innerHTML += multRes;
    //         break;

    //     case 4:
    //         let m4 = k1 / k2;
    //         let divRes = m4.toString();
    //         c.innerHTML += divRes;
    //         break;

    // }





    // var z1 = "";
    // let stringArray = Array.from(b.innerHTML);

    // console.log("Inner HTML:",stringArray);
    // console.log(typeof(stringArray));
    // var i=0;
    // var length = b.innerHTML.length;
    // for( i= 0; i<length ; i++)
    //   z1 += b.innerHTML[i];

    // console.log(z1);
    // console.log(typeof(z1));
    // var k1 = parseInt(z1);
    // console.log(k1);
    // console.log(typeof(k1));


}

let container = document.getElementsByClassName('container')[0];
let buttonLayout = document.getElementsByClassName('button-layout')[0];
var lightButton = document.getElementsByClassName("far fa-sun")[0];
lightButton.addEventListener('click', lightFunction);

function lightFunction() {
    console.log("sun was clicked")
    if (Array.from(document.body.classList).includes('dark-theme')) {
        document.body.classList.toggle("dark-theme");
        container.classList.toggle("dark-theme")
        buttonLayout.classList.toggle("dark-theme");
    }
    console.log(document.body.classList);
}


var darkButton = document.getElementsByClassName("fas fa-moon")[0];
darkButton.addEventListener('click', darkFunction);

function darkFunction() {
    console.log("moon was clicked");
    if (Array.from(document.body.classList).includes('dark-theme'))
        return;
    document.body.classList.toggle("dark-theme");
    container.classList.toggle("dark-theme");
    buttonLayout.classList.toggle("dark-theme");

    console.log(document.body.classList);
}


// if(count === 0)
// {
//     var i=0;
//     var z = "";
//     b = Array.from(b);
//     b.forEach(item => {
//          console.log(item);
//     });
//     while(b[i] != " ")
//     {
//         z += b[i];
//         i++;
//     }
//     Number("z");
//     console.log(z); 
// }

// let keyBoard = document.getElementsByClassName("fill-it")[0];
let keyBoard = document.getElementsByClassName('fill-it')[0];
console.log(keyBoard);
// let keyBooard = document.getElementsByClassName('fill-it')[0];
// console.log(keyBooard);
// console.log(keyBooard.innerHTML);

window.addEventListener('keydown', anyKey);
let pressed = 0;

window.addEventListener('keydown',(e)=>{
    console.log("keydown",e);
})
window.addEventListener('keyup',(e)=>{
    console.log("keyup",e);
})

function anyKey(e) {
    let char = e.char || e.charCode || e.which; 

    let s = e.key;
    let clickedButton = document.getElementsByClassName("eventButton");
    for (var i = 0; i < clickedButton.length; i++) {
        // console.log( 'helloo fuck' ,clickedButton[i].textContent.charCodeAt());
        // console.log( 'helloo fuck' ,clickedButton[i].textContent);
        // console.log( 'helloo fuck char' ,char);
        // console.log( 'helloo fuck char' ,s);



        if (clickedButton[i].textContent === s) {
            clickedButton[i].click();
            break;
        }
        // }

        else if( char === 8){
            
             document.getElementsByClassName("fas fa-redo")[0].click();
            break;
        }
        // else if( char === 187){
        //     document.getElementsByClassName("equalto-sign")[0].click();
        //     break;
        // }
        // else if(char === 189){
        //     document.getElementsByClassName("subtraction")[0].click();
        //     break;
        // }
        else if(char === 191 || char === 111){
            document.getElementsByClassName("fa-divide")[0].click();
            break;
        }
        else if( s === '*')
        {
            document.getElementsByClassName("fa-times")[0].click();
            break;
        }
        else if(char === 46)
        {
            document.getElementsByClassName("AC")[0].click();
            break;
        }
        // else if( char === 190){
        //     document.getElementsByClassName("eventButton")[18].click();
        //     break;
        // }
        
        

        

    }
    // let b = document.getElementsByClassName('fill-it')[0];
    // let target = e.currentTarget;
    // let tag = target.tagName;
    // let char = e.char || e.charcode || e.which;

    // console.log(target,tag,char);
    //  let s = String.fromCharCode(char);
    //  console.log(s);
    // b.innerHTML += s;
}






