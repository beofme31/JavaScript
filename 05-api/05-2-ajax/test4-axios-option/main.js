'use strict';

function printResult(result) {
  const resultDom = document.getElementById('result');
  resultDom.innerHTML = result;
}

function axios_default() {
  // axios로 서버 연동 시, 공통적인 config 설정이 있다면
  axios.defaults.baseURL = 'http://localhost:3000/';
  axios.defaults.timeout = 2000; // 2초 내에도 응답이 안 돌아오면 에러로 봄

  // defaults에 설정 후 요청, defaults에 설정한 내용이 기본 적용
  // url 지정, baseURL + url
  axios.post('post_test', {
    name: '홍길동',
    age: 20
  })
    .then(response => {
      printResult(response.data.msg)
    })
}

function axios_create() {
  // 원한다면 개발자가 axios 객체를 직접 만들어서
  // 업무가 여러개로 구분되고, 하나의 업무의 여러번 요청시 공통 설정이 있는 경우
  const myAxios = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 2000
  })
  myAxios.post('post_test', {
    name: '홍길동',
    age: 20
  })
    .then(response => {
      printResult(response.data.msg)
    })
}

function axios_params() {
  // params config: url 뒤에 데이터를 추가해서, 서버 전송
  // header에 추가해서 url이 header 정보이므로
  // get, post, put, delete, patch 모두 가능
  // 모든 http request에 url은 항상 http request header에 지정하므로
  // 모든 method에 params 데이터를 추가해서 서버 전송이 가능하다면, params만 이용하지?
  // header 정보로 data 전송은 한계가 있다. - 전송하는 데이터 사이즈, 보안에 문제
  axios({
    method: 'get',
    url: 'http://localhost:3000/get_test',
    params: {//요청시 서버에 전달할 데이터, header에 추가해서
      data1: 'hello',
      data2: 10
    }
  })
    .then(response => {
      printResult(response.data.msg)
    })
}

function axios_transform() {
  axios({
    method: 'post',
    url: 'http://localhost:3000/post_test',
    data: {
      // request body stream을 통해 데이터 전송, url에는 나오지 않는다.
      // post, put, patch에서만 사용 가능
      name: '홍길동',
      age: 30
    },
    transformRequest: [
      // 데이터를 보내기 전에 조작하는 이유
      // -> 형식에 맞춰 보내거나 필요한 정보 추가 또는 보안상 민감한 정보를 제거하기 위해
      // 요청시 실행되어야 하는 함수 여러개를 배열에 담으면
      // 등록한 순서대로 실행된다.
      function (data, headers) {
        // 이 함수가 호출되면서 
        //  data: 서버에 전송해야 할 body stream -> 전송 전에 이 함수에서 조작 가능
        //  headers: 서버 요청 header 정보 -> 전송 전에 조작
        console.log(data);
        console.log(headers);
        headers['Content-Type'] = 'application/json' // header 정보 추가
        let newData = { ...data, key: 1 } // data에 하나 추가
        return JSON.stringify(newData) // 리턴시킨 값이 서버 전송
      }
    ],
    transformResponse: [
      // 데이터를 받고 나서 조작하는 이유:
      // ->데이터를 쉽게 사용하거나 불필요한 정보를 걸러내고 내가 원하는 형식으로 바꾸기 위해서
      // 응답이 도착했을 때 실행될 함수, 서버 데이터를 이용하기 전에 조작
      function (data) {
        // 매개변수가 서버에서 받은 데이터
        const jsonData = JSON.parse(data)
        let newData = { ...jsonData, index: 1 }
        return newData;
      }
    ]
  })
    .then(response => {
      console.log(response.data);
    })
}
