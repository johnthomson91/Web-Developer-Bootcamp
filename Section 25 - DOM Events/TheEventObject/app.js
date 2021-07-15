// document.querySelector('button').addEventListener('click', function (evt) {
//     console.log(evt);
// })


// const input = document.querySelector('input');

// input.addEventListener('keydown', function (evt) {
//     console.log(evt.key)
//     console.log(evt.code)
// })

window.addEventListener('keydown', function (event) {
    switch (event.code) {
        case 'ArrowDown':
            console.log('DOWN')
            break;
        case 'ArrowUp':
            console.log('UP')
            break;
        case 'ArrowRight':
            console.log('RIGHT')
            break;
        case 'ArrowLeft':
            console.log('LEFT')
            break;
        default:
            console.log('IGNORED')
    }
})


// document.querySelector('button').addEventListener('click', function (evt) {
//     console.log(evt)
// })

// // const input = document.querySelector('input');
// // input.addEventListener('keydown', function (e) {
// //     console.log(e.key)
// //     console.log(e.code)
// // })
// // input.addEventListener('keyup', function () {
// //     console.log("KEYUP")
// // })

// window.addEventListener('keydown', function (e) {
//     switch (e.code) {
//         case 'ArrowUp':
//             console.log("UP!");
//             break;
//         case 'ArrowDown':
//             console.log("DOWN!");
//             break;
//         case 'ArrowLeft':
//             console.log("LEFT!");
//             break;
//         case 'ArrowRight':
//             console.log("RIGHT!");
//             break
//         default:
//             console.log("IGNORED!")
//     }
// })