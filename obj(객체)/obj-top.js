
// coffee 라는 변수는, 메모리 어딘가에 있는 어떤 객체를 '가리킨다'
// 편의상 'coffee 객체'라고 부르는 것이 관습이며, 정식 명칭은 객체 리터럴(object literal) 이다.
let coffee = {
  // 키(key)와 값(vaule)의 한 쌍(pair)을 property(속성)이라고 부른다.
  mug : '머그잔',

  // bean 이라는 변수는 객체 {} (중괄호) 안에 있을 때, 키(key)라고 이름이 바뀐다.
  bean : 'Espresso',
  milk : '1등급 우유',

  // isIce 라는 키(key)를 살펴보면, 문자열 뿐만 아니라 true 와 같은 boolean 타입도 넣어줄 수 있다.
  isIce : true
} // <-- '같은 성격에 다른 특성'을 가지고 있다면 보통 객체를 만들어 사용한다.

let milkCoffee = {
  bean : 'Espresso',
  milk : '1등급 우유',
  isIce : true
}

console.log(coffee);
console.log(coffee.milk);

console.log(milkCoffee);
console.log(milkCoffee.isIce);

if(milkCoffee.isIce === true) {
  console.log('아이스 밀크 커피');
} else if (milkCoffee.isIce === false) {
  console.log('얼음 없는 밀크 커피');
} else {
  console.log('뜨거운 밀크 커피');
}