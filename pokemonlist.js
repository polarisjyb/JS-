let pokemonList = [
  '파이리',
  '고오스',
  '또가스',
  '피죤투',
  '야도란',
  '버터풀',
  '꼬부기',
  '피카츄',
  3,
  5,
  6,
];

for( let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i] === '피카츄') {
    console.log(i +1 + '번째에 있습니다.');
  } else if (typeof pokemonList[i] === 'number') {
    console.log(pokemonList[i])
  } else {
    console.log('여기에는 피카츄가 없습니다.');
  };
};

console.log(pokemonList);
