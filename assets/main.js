const number = prompt('Введите цифру');
let a = 0


let box = '<div class = "box"></div>';
let box_list = document.querySelector('.box_list');

for (let y = 0; y < number; y++){
    box_list.insertAdjacentHTML('beforeend', box)
}
