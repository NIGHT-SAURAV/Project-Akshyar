const fileInput = document.getElementById('fileInput');
const uploadLabel = document.getElementById('uploadLabel');
const uploadedImage = document.getElementById('uploadedImage');

uploadLabel.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        uploadedImage.src = imageUrl;
    }
});
