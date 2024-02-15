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
// new thing 


async function captureAndSave() {
    const imageUrl = await captureImage();
    const display = document.getElementById('predictedString');
    video.pause();

    const captureButton = document.querySelector('.button-container button');
    captureButton.textContent = 'Recapture';
    captureButton.removeEventListener('click', captureAndSave); 
    captureButton.addEventListener('click', recapture); 

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
    
    fetch("https://akshyar-api.onrender.com/predict", requestOptions)
      .then(response => response.json())
      .then(result => {
            console.log(result);
            console.log(typeof result);
            const p = result['prediction'];
            display.textContent += p;

      } )
      .catch(error => console.log('error', error));
    
}

function recapture() {
    
    window.location.reload();
}

function submitForm() {
       captureAndSave();
}

function openWebcam() {
    window.location.href = 'cap.html'; 
}

setupCamera();
