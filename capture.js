// camera.js

const video = document.getElementById('video');

async function setupCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        return new Promise((resolve) => {
            video.onloadedmetadata = () => {
                resolve(video);
            };
        });
    } catch (error) {
        console.error('Error accessing camera: ', error);
    }
}

async function captureImage() {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL('image/png');
    return imageUrl;
}

async function captureAndSave() {
    const imageUrl = await captureImage();
    // Freeze the webcam output by pausing the video
    video.pause();
    // Replace the "Capture" button text with "Recapture"
    const captureButton = document.querySelector('.button-container button');
    captureButton.textContent = 'Recapture';
    captureButton.addEventListener('click', recapture); // Add event listener for recapture
    // Optionally, you can perform some other action with the captured image here
}

function recapture() {
    // Reload the current page
    window.location.reload();
}

function openWebcam() {
    window.location.href = 'cap.html'; 
}

// Call setupCamera to initialize the camera
setupCamera();
