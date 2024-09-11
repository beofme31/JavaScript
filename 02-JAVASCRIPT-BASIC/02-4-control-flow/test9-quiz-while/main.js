let i = 1
while(i < 10){
  document.write("<div>")
  document.write(`<h3>${i}단</h3>`)
    let j = 1
    while(j < 10){
      document.write(`${i} X ${j} = ${i * j} <br />`)
      j++
    }
  document.write("</div>")
  i++
}