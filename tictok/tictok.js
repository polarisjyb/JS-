const root = document.getElementById('root');
console.dir(root);

const title = root.children[0];
console.log(title);

const tictok = ['tic', 'tok'];
let isSwitch = true;

root.addEventListener('click', () => {
  if(isSwitch === true) {
    isSwitch = false;
    title.innerHTML = tictok[0].toUpperCase();
    title.style.color = 'crimson';
  } else {
    isSwitch = true;
    title.innerHTML = tictok[1].toUpperCase();
    title.style.color = 'cadetblue';
  };
});