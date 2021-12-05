let button = document.getElementsByClassName("eventButton"); // Always remember that document.getElementsByClassName gives HTML document list . So, to grab a particular class we have to use index(document.getElementsByClassName[index])

button = Array.from(button);
button.forEach(item => {
    item.addEventListener('click', detectSymbol);
    // item.addEventListener('display',displaySymbol);
});

function detectSymbol(e) {
    let a = e.target.innerHTML; // e is the event object that gives all the information about the object...
    displayExpression(e);
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

    let emptyString = "";

    if (eqto > 0) {
        c.innerHTML = c.innerHTML.slice(1, c.innerHTML.length);
        b.innerHTML = c.innerHTML;
        c.innerHTML = "";
        emptyString = "";
        eqto--;

    }




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
        myfunction(b, count, c,emptyString);
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

function myfunction(b, count, c,emptyString) {


    console.log("hello");

    /* ASK ASHWINI ABOUT THIS
    */
    try {
        // console.log(emptyString);
        // console.log("holla");
        // console.log(b.innerHTML.toString());
        //  let k = emptyString;
        //  k= Number(k);

        emptyString += eval(b.innerHTML.toString());

         if( emptyString.length < 17){
             c.innerHTML += emptyString;
         }
         else
         {
             c.innerHTML += "Out of Range";
         }
           

    }
    catch (err) {
        console.log(err); // Here err is the error object that carries all information about what kind of error occured.. 
        console.log("Dear Crush please talk");
        c.innerHTML += "Invalid Exp";
    }



}

let container = document.getElementsByClassName('container')[0];
let buttonLayout = document.getElementsByClassName('button-layout')[0];
var lightButton = document.getElementsByClassName("far fa-sun")[0];
lightButton.addEventListener('click', lightFunction);

function lightFunction() {
    if (Array.from(document.body.classList).includes('dark-theme')) {
        document.body.classList.toggle("dark-theme");
        container.classList.toggle("dark-theme")
        buttonLayout.classList.toggle("dark-theme");
    }
}


var darkButton = document.getElementsByClassName("fas fa-moon")[0];
darkButton.addEventListener('click', darkFunction);

function darkFunction() {
    if (Array.from(document.body.classList).includes('dark-theme'))
        return;
    document.body.classList.toggle("dark-theme");
    container.classList.toggle("dark-theme");
    buttonLayout.classList.toggle("dark-theme");

}


window.addEventListener('keydown', anyKey);




function anyKey(e) {
    console.log(e);
    console.log(e.target);
    let char = e.char || e.charCode || e.which; 

    let s = e.key;
    let clickedButton = document.getElementsByClassName("eventButton");
    for (var i = 0; i < clickedButton.length; i++) {



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
        else if( s === 'Enter')
        {
            document.getElementsByClassName("equalto-sign")[0].click();
            break;
        }
        // else if( char === 190){
        //     document.getElementsByClassName("eventButton")[18].click();
        //     break;
        // }
        
        

        

    }
    
}






