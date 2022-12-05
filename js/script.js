let list = ['affettati', 'formaggi', 'pane', 'bevande gassate', 'uova', 'frutta', 'verdure'];
const shopping_list = document.querySelector('.shopping_list');
let element = '';
let item = 0;

while (item < list.length) {

    let listItem = document.createElement('li');
    
    listItem.innerText = list[item];

    shopping_list.append(listItem);

    item++;
}