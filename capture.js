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

function downloadImage(imageUrl) {
    const link = document.createElement('a');
    link.download = 'process.png';
    link.href = imageUrl;
    link.click();
}

async function captureAndSave() {
    const imageUrl = await captureImage();
    downloadImage(imageUrl);
}

// Call setupCamera to initialize the camera
setupCamera();

 function openWebcam() {
        window.location.href = 'cap.html'; 
    }
