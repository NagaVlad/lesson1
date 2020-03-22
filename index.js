document.querySelector('.box1').onclick = function (event) {
    console.log('work');

}


document.querySelector('.box2').onclick = function (event) {
    console.log('work2');

}


// document.onclick = function (event) {
//     console.log(event.target.tagName);
//     if (event.target.tagName == 'IMG') {
//         event.target.classList.add('bordered');
//     }
// }

////////==========================================////////


// document.querySelector('.test').onmousemove = function (event) {

//     console.log(event.offsetX);
//     document.querySelector('#x').innerHTML = event.offsetX
//     document.querySelector('#y').innerHTML = event.offsetY
// }




////////==========================================////////

// function userProgress(time) {
//     let start = 0;


//     let progressElement = document.getElementById('user-progress')

//     let interval = setInterval(function () {
//         if (start > 100) {
//             clearInterval(interval)
//             userShow();
//         } else {
//             progressElement.value = start
//             start += 10
//         }

//     }, time)



// }

// function userShow() {
//     return document.querySelector('.hidden-block').style.display = 'block'
// }


// userProgress(500)



////////==========================================////////

function alertInfo() {
    alert('Верни деньги')
}




function checkTime() {
    let timeImMs = Date.now();
    console.log(timeImMs);

}

checkTime()


////////==========================================////////




// document.getElementById('#textA').oninput = function () {
//     let help = document.querySelector('#help')
//     help.innerHTML = String.fromCharCode(427);
//     let str = this.value;
//     str = str.charCodeAt(0)
//     console.log();
// }


////////==========================================////////


document.querySelector('#but1').onclick = () => {
    let input = document.querySelector('#flat').value

    input = parseInt(input)
    console.log(typeof (input));


    if (input > 10) {
        console.log('Больше 10');

    } else {
        console.log('Меньше 10');

    }

}




////////==========================================////////
// let hhh = document.getElementsByTagName('a')
// console.log(hhh);


// for (let i = 0; i < hhh.length; i++) {
//     // console.log(h[i].href);

//     // if (h[i].href == '#') {
//     //     h[i].style.color = 'red';
//     // }
//     console.log('text');

// }


////////==========================================////////



// let out3 = document.querySelector('.out3')


// let x = 0;
// let tmp = ' ';


// for (let i = 4; i <= 401; i++) {
//     tmp = tmp + i + ' '

// }

// console.log(tmp);

// document.querySelector('.out3').innerHTML = tmp
