var add = document.getElementById('addElem'),
    list = document.getElementById('list'),
    items = document.getElementsByTagName('li');

add.addEventListener('click', function() {
    var element = document.createElement('li');
    list.appendChild(element).textContent = `item ${items.length-1}`;
});
