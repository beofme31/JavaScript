'use strict';

function Product(name, price) {
  this.name = name;
  this.price = price;
}

let products = [
  new Product('대뱃살', 3000),
  new Product('목살', 5000),
  new Product('배꼽살', 4000),
  new Product('중뱃살', 1000)
];

let productSelect = document.getElementById('product');
products.forEach(product => {
  let option = document.createElement('option');
  option.value = product.name;
  option.text = `${product.name} - ${product.price}원`;
  productSelect.appendChild(option);
});

function submitOrder() {
  let selectedOptions = Array.from(productSelect.selectedOptions);
  let productsList = document.getElementById('productsList');
  let totalAmount = document.querySelector('h3');
  productsList.innerHTML = '';
  let totalPrice = 0;

  if (selectedOptions.length === 0) {
    alert('상품을 선택해 주세요.');
    return;
  }

  productsList.style.display = 'block';
  totalAmount.style.display = 'block';

  selectedOptions.forEach(option => {
    let product = products.find(p => p.name === option.value);
    totalPrice += product.price;

    let listItem = document.createElement('li');
    listItem.textContent = `${product.name} - ${product.price}원`;
    productsList.appendChild(listItem);
  });

  document.getElementById('totalPrice').textContent = totalPrice;
}
