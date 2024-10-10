'use strict';

let fileNode1 = document.getElementById('fileInput1')
let fileNode2 = document.getElementById('fileInput2')
let resultNode = document.getElementById('results')

function handleFile(e) {
  // 기존 화면 출력 결과 지우고
  while (resultNode.firstChild) {
    resultNode.removeChild(resultNode.firstChild)
  }
  // 유저가 선택한 파일 정보 획득
  // FileList - 여러개 선택이 가능하므로
  let files = e.target.files
  // 뭔가가 있다
  if (files.length !== 0) {
    for (let file of files) {
      // files의 객체 개수만큼 반복적으로 for loop 실행
      // for loop가 한번씩 실행되면서 files 안의 file 객체가 file에 대입
      let item = document.createElement('li')
      item.innerHTML = `file name: ${file.name} / file size: ${file.size} / modified: ${new Date(file.lastModified)}`
      resultNode.appendChild(item)
    }
  }
}

fileNode1.addEventListener('change', handleFile)
fileNode2.addEventListener('change', handleFile)