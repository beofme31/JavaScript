const myButtonClick = () => {
  let title = document.getElementById('title')
  if(title.style.background === 'yellow'){
    title.style.background = 'pink'
  }else {
    title.style.background = 'yellow'
  }
}