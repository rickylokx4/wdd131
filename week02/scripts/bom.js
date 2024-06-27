const input = document.querySelector('#favchap');
const button = document.querySelector('button');
button.addEventListener('click', function () {
    const list = document.querySelector('#list');
    const li = document.createElement('li');
    const deletebutton = document.createElement('button');

    if (input.value.trim() !== '') {
        
        li.textContent = input.value;
        deletebutton.textContent = '❌';
        li.append(deletebutton);
        list.append(li);
        input.value = '';
    }
    else {
        input.focus();
    }
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });
});





