// for checkbox input field

function enableDisableTextBox(checkbox1) {
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    input2.disabled = checkbox1.checked ? false : true;
    if (!input2.disabled) {
        input2.focus();
    }
    input1.disabled = checkbox1.checked ? false : true;
    if (!input1.disabled) {
        input1.focus();
    }
}

function enableDisableTextBox2(checkbox2) {
    var input3 = document.getElementById('input3');
    var input4 = document.getElementById('input4');

    input4.disabled = checkbox2.checked ? false : true;
    if (!input4.disabled) {
        input4.focus();
    }

    input3.disabled = checkbox2.checked ? false : true;
    if (!input3.disabled) {
        input3.focus();
    }
}

function enableDisableTextBox3(checkbox3) {
    var input5 = document.getElementById('input5');
    var input6 = document.getElementById('input6');

    input6.disabled = checkbox3.checked ? false : true;
    if (!input6.disabled) {
        input6.focus();
    }

    input5.disabled = checkbox3.checked ? false : true;
    if (!input5.disabled) {
        input5.focus();
    }
}

function enableDisableTextBox4(checkbox4) {
    var input7 = document.getElementById('input7');
    var input8 = document.getElementById('input8');


    input8.disabled = checkbox4.checked ? false : true;
    if (!input8.disabled) {
        input8.focus();
    }

    input7.disabled = checkbox4.checked ? false : true;
    if (!input7.disabled) {
        input7.focus();
    }
}






// for slider

const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextbtn");
const secPrevBtn = document.querySelector(".prevbtn2");
const secNextBtn = document.querySelector(".nextbtn2");
const thirdPrevBtn = document.querySelector(".prevbtn3");
const thirdNextBtn = document.querySelector(".nextbtn3");
const fourthPrevBtn = document.querySelector(".prevbtn4");
const fourthNextBtn = document.querySelector(".nextbtn4");
const fifthPrevBtn = document.querySelector(".prevbtn5");
const fifthNextBtn = document.querySelector(".nextbtn5");
const lastPrevBtn = document.querySelector(".prevbtn");


let max = 4;
let current = 1;
perSlider = 100 / 7;

firstNextBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = '-16.66666%';
})
secNextBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = '-33.33333%';
})
thirdNextBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = '-50%';
})
fourthNextBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = '-66.66666%';
})
fifthNextBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = '-83.33333%';
})


secPrevBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = '0%';
})
thirdPrevBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = '-16.66666%';
})
fourthPrevBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = '-33.33333%';
})
fifthPrevBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = '-50%';
})
lastPrevBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = '-66.66666%';
})



// add and remove section

const addButton = document.querySelector(".btn3");
const transportSection = document.querySelector("#transport");
let firstTransport = document.querySelector("#transport form");
// let removeButton = document.getElementsByClassName("remove-btn");



addButton.addEventListener("click", function addNewTransport() {
    transportSection.innerHTML += firstTransport.innerHTML;
})


// var removeButtonNo = removeButton.length;
// for (let i = 0; i < removeButtonNo; i++) {
//     removeButton[i].addEventListener("click", function removeTransport() {
//         firstTransport.lastChild.remove();
//     })
// }