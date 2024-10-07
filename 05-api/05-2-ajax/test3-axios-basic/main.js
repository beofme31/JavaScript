'use strict';

function printResult(result) {
  const resultDom = document.getElementById('result');
  resultDom.innerHTML = result;
}

function axios_basic() {
  const num = document.getElementById('num').value;
  axios({
    method: 'get',
    // 로컬 컴퓨터를 지칭하는 ip: 127.0.0.1
    // 로컬 컴퓨터를 지칭하는 도메인: localhost
    url: `http://localhost:3000/sum/${num}`
  })
    .then(response => {
      print(response.data.result)
    })
}

function axios_get() {
  const num = document.getElementById('num').value;
  axios.get(`http://localhost:3000/sum/${num}`)
    .then(response => {
      printResult(response.data.result)
    })
}

function axios_post() {
  // http request method
  // header 정보 - get(default), post, put, delete, patch, head, option
  // CRUD: create(새로운 데이터 발생, 저장), read, update, delete
  // get: 데이터 줘 (read), body를 활용하지 않음, 만약 데이터를 서버에 넘기겠다면 header 정보를 통함
  //  -> url에 데이터를 추가해서 url은 request header 정보이다.
  //  -> url path에 추가해서 넘기거나 (~~~/sum/10)
  //  -> url search 문자열 (query 문자열) (~~~/sum?a1=10&name=kim)
  // post: 데이터 저장, 서버에게 데이터 많이 넘어간다라는 뜻 (create), body data
  //  -> 서버에 데이터 전송을 request body에 추가해서 전달하겠다.
  //  -> body에 담기는 데이터 형식의 규약은 없다. (문자열, search 문자열, json 문자열)
  // put: 데이터 수정 (update), body data
  // delete: 데이터 삭제 (delete)
  axios.post(`http://localhost:3000/post_test`, {
    // post 방식이다. request body 데이터
    name: '홍길동',
    age: 20
  })
    .then(response => {
      printResult(response.data.msg)
    })
}