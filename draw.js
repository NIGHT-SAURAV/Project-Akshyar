// script.js
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// Initialize the canvas
context.fillStyle = '#fff'; // Set background color
context.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas with the background color

// Set drawing properties
context.lineWidth = 8;
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
    draw(e);
}

function draw(e) {
    if (!isDrawing) return;

    var rect = canvas.getBoundingClientRect(); // get the bounding box of the canvas

    context.beginPath();
    context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    context.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    context.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function submitCanvas() {
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = 'process.png';
    link.href = image;
    link.click();
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
