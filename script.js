// List data
const data = {
  fruits: [
    'Apple',
    'Banana',
    'Pear',
    'Watermelon',
    'Grape',
    'Strawberry',
    'Mango',
    'Blackberry',
  ],
  spices: ['Salt', 'Pepper', 'Chilli', 'Herbs', 'Curry'],
  vegetables: ['Carrot', 'Cucumber'],
};

// Change tab
function changeTab(tabName) {
  document.querySelectorAll('.tab').forEach(button => {
    button.classList.remove('active');
  });
  document.querySelector(`#${tabName}Tab`).classList.add('active');

  const listElement = document.getElementById('list');
  listElement.innerHTML = ''; // Clear current list
  data[tabName].forEach(item => {
    const itemElement = document.createElement('li');
    itemElement.textContent = item;
    itemElement.onclick = function () {
      this.classList.toggle('selected');
    };
    listElement.appendChild(itemElement);
  });
}

// Initial tab
changeTab('vegetables');
