// 태그에 커스텀된 id 속성노드(attribute node)로 문서의 데이터에 접근
const root = document.getElementById('root');
console.log(root);

// 문서에 tagName을 기준으로 모두 수집 '배열로 반환'
const li = document.body.getElementsByTagName('li');
console.log(li);

// selector(선택자) +query(질의) : CSS의 선택자 방식으로 문서의 데이터에 접근
const section = document.body.querySelector('#root > section');
console.log(section);

// 함수에 선택된 이름의 클래스라면 모두 '배열로 반환'
const article = document.body.getElementsByClassName('class-attribute');
console.log(article);