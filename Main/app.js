const menu = document.querySelector('.menu');
const nav = document.querySelector('ul');

menu.onclick = () => {
 nav.style.right = '0';
}

const close = document.querySelector('.close');

close.onclick = () => {
 nav.style.right = '-100%';
}