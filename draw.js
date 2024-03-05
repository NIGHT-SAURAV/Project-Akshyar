// script.js
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var  display = document.getElementById('predictedString');
var [x,y] = [0,0]


// Initialize the canvas
context.fillStyle = '#fff'; // Set background color
context.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas with the background color

// Set drawing properties
context.lineWidth = 9;
context.lineCap = 'round';
context.strokeStyle = '#000';

var isDrawing = false;

// Event listeners for drawing
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Event listeners for touch events
canvas.addEventListener('touchstart', handleTouchStart);
canvas.addEventListener('touchmove', handleTouchMove);

function startDrawing(e) {
    isDrawing = true;
    //draw(e);
    [x,y] = [e.x, e.y]
}

function draw(e) {
    if (!isDrawing) return;

    var rect = canvas.getBoundingClientRect(); // get the bounding box of the canvas

    context.beginPath();
    context.moveTo(x - rect.left,y - rect.top);
    context.lineTo(e.clientX - rect.left, e.clientY- rect.top);
    context.stroke();
    [x,y] = [e.x,e.y]
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    display.textContent = "";
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
}


async function canvas_sub() {
    const imageUrl = canvas.toDataURL('image/png');
    return (imageUrl);

} 

async function submitCanvas() {
    const imageUrl = await canvas_sub();
    const display = document.getElementById('predictedString');
     const blob = await (await fetch(imageUrl)).blob();

    const formData = new FormData();
    formData.append('image', blob, 'image.png');

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "image/png");
    myHeaders.append("Accept", "application/json");
    var file = "<>";
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: blob,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8000/predict", requestOptions)
      .then(response => response.json())
      .then(result => {
            console.log(result);
            console.log(typeof result);
            const p = result['prediction'];
            display.textContent += p;

      } )
      .catch(error => console.log('error', error));
}

// Handle touch events
var touchX, touchY;

function handleTouchStart(event) {
    event.preventDefault();
    var rect = canvas.getBoundingClientRect();
    touchX = event.touches[0].clientX - rect.left;
    touchY = event.touches[0].clientY - rect.top;
    startDrawing({ clientX: touchX, clientY: touchY });
}

function handleTouchMove(event) {
    event.preventDefault();
    var rect = canvas.getBoundingClientRect();
    touchX = event.touches[0].clientX - rect.left;
    touchY = event.touches[0].clientY - rect.top;
    draw({ clientX: touchX, clientY: touchY });
}

function openCanvas() {
    window.location.href = 'draw.html'; 
}
