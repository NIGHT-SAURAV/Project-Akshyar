let text = document.getElementById('text');
let mountain = document.getElementById('mountain');
let left= document.getElementById('left');
let right = document.getElementById('right');
let scrollHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
	let value = window.scrollY;
 if (value <= scrollHeight) {
	text.style.marginTop = value * 2.5 + 'px';
	mountain.style.marginTop = value * 1 + 'px';
	left.style.left = value * -1.5 + 'px';
	right.style.left = value * 1.5 + 'px';
  }
	
});