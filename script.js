function handleUpload() {
  const input = document.getElementById('fileInput');
  const file = input.files[0];

  if (!file) {
    document.getElementById('statusMessage').textContent = "Please select a file.";
    return;
  }

  document.getElementById('statusMessage').textContent = `File "${file.name}" ready to upload.`;

  // TODO: Integrate with backend or AI analysis service
  console.log("File selected:", file);
}