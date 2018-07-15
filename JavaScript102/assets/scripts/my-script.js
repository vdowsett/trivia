let numberOfDrinks = 0;
console.log(numberOfDrinks);

const submitOrder = function (name) {
  numberOfDrinks++;

  if (numberOfDrinks <= 4) {
    document.querySelector('.order-details').innerHTML = name + " would a drink!"
  }

  else {
    alert('Drink order queue is full.');
  }
  
  updateOrderCount(numberOfDrinks);
};

const updateOrderCount = (count) => {
  document.getElementById('drink-count').innerHTML = "Drinks Ordered: " + count;
} ;

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById('order-btn').onclick = function () {
      submitOrder(document.getElementById('order-form-input').value);
    };
});
