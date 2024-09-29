"use strict";

window.addEventListener('load', () => {
  // click, dbclick, down, up
  let button = document.getElementById('button')
  button.addEventListener('click', () => {
    console.log('mouse click');
  })
  button.addEventListener('dbclick', () => {
    console.log('mouse double click');
  })
  button.addEventListener('mousedown', () => {
    console.log('mouse down');
  })
  button.addEventListener('mouseup', () => {
    console.log('mouse up');
  })

  // mouse move
  let area = document.getElementById('area')
  let result = document.getElementById('result')

  area.addEventListener('mousemove', (e) => {
    result.innerHTML = `offset(${e.offsetX}, ${e.offsetY}, page(${e.pageX}, ${e.pageY}))`
  })



})

