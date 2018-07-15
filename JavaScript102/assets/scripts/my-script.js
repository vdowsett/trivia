let numberOfDrinks = 0;
console.log(numberOfDrinks);

const submitOrder = function (orderName, drinkName) {

  numberOfDrinks++;

  if (numberOfDrinks <= 4) {
    document.querySelector('.order-details').innerHTML = orderName + " would a " + drinkName + "!"
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
  document.getElementById('order-btn').addEventListener('click', function () {
    const orderName = document.getElementById('order-form-input').value;
    const drinkName = document.querySelector('input[type="radio"]:checked').value;

    submitOrder(orderName, drinkName);

  });

});
