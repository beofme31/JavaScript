'use strict';

async function upload(files) {
  // 매개변수에 내용이 있는 경우
  if (files.length !== 0) {
    let formData = new FormData()
    for (let file of files) {
      formData.append('file', file)
    }
    let resp = await axios.post('http://localhost:8000/upload', formData)
    if (resp.data.status === 200) {
      alert('upload ok')
    }
  }
}

function dropHandler(e) {
  // 브라우저의 기본 이벤트 처리 금지
  // 그냥 drop하면 이미지 뷰어, 텍스트 뷰어가 되니까 그걸 방지
  e.preventDefault()
  // drop한 파일 정보를 추출해서, upload 함수 호출
  upload(e.dataTransfer.files)
}

function dragOverHandler(e) {
  e.preventDefault()
}