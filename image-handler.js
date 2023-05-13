const fileUploader = document.getElementById('file-uploader');

fileUploader.addEventListener('change', (event) => {
    const file = event.target.files[0];

    // Do something with the file object, such as passing it to a machine learning model

    // Get the name of the file
    const fileName = file.name;

    // Get the full URL of the current page
    const currentPageUrl = window.location.href;

    // Create a URL object for the file
    const fileUrl = URL.createObjectURL(file);

    // Set the image's source to the URL object
    const existingImage = document.querySelector('img');
    existingImage.src = fileUrl;

    // Set the image's width and height to 433px
    existingImage.width = 433;
    existingImage.height = 433;
});
