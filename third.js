// Задание 1
function text_q1(){
    let text_q1 = document.getElementById('text_q1');
    text_q1.innerHTML = "Как дела?";
    console.log(text_q1.innerHTML);
}

// Задание 2
function class_q2(){
    let class_q2 = document.getElementById("class_q2");
    class_q2.setAttribute('class', 'class_q2');
    console.log(class_q2);
}

// Задание 3
function color_q3(){
    let color_q3 = document.getElementById('color_q3');
    color_q3.setAttribute('class', 'color_q3');
    console.log(color_q3);
}

//Задание 4
function button_q4(){
    let button_q4 = document.getElementById('button_q4');
    if(button_q4.innerHTML == "Попробуй"){
        button_q4.innerHTML = "Что?";
        console.log(button_q4.innerHTML);
    } else {
        button_q4.innerHTML = "Попробуй";
        console.log(button_q4.innerHTML);
    }
}

//Задание 5
let a = 5;
function ul_q5(){
    let ul = document.getElementById("ul_q5");
    let ul_q5 = document.createElement('li');
    ul_q5.className="ul_q5";
    ul_q5.innerHTML= a++;
    ul.append(ul_q5);
    console.log(ul_q5.innerHTML);
}

//Задание 6
function div_q6(){
    let div_q6 = document.getElementById("div_q6");
    div_q6.remove(div_q6);
    console.log(div_q6);
}

//Задание 7
function src_q7(){
    let src_q7 = document.getElementById("src_q7");
    src_q7.removeAttribute("src");
    src_q7.setAttribute("src", "./Фото/КошкаJS29_05_2024.jpeg");
    console.log(src_q7)
}
//Задание 8
//Задание 9
function button_q9(){
    let button_q9 = document.getElementById('button_q9');
    if(button_q9.innerHTML == "Красочно?"){
        button_q9.setAttribute("class", "button_q9c");
        console.log(button_q9.innerHTML);
    } else if(button_q9.hasAttribute("class","button_q9c")) {
        button_q9.setAttribute("class", "button_q9c");
        console.log(button_q9.innerHTML);
    }
}




