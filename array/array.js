let members = ['아구몬', '파피몬', '파닥몬', '피요몬', '팔몬', '가트몬'];
let colorArray = ['#111', '#222', '#333', '#444', '#555', '#666'];

let sectionList = document.body.children[0].children;
console.log(sectionList);
console.dir(sectionList);

for(let i = 0; i < sectionList.length; i++) {
  if(sectionList.length === members.length) {
    sectionList[i].innerHTML = members[i];
    sectionList[i].style.width = '100vw';
    sectionList[i].style.height = '10vh';
    sectionList[i].style.color = '#fff';
    sectionList[i].style.backgroundColor = colorArray[i];
  } else {
    console.log('배열들의 길이가 달라, 실행이 되지 않습니다.');
  };
};