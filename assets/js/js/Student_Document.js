
// JavaScript Functionality
document.getElementById('SubmitButton').addEventListener('click', function () {
    const fileInput = document.getElementById('FileInput');
    const fileInput2 = document.getElementById('FileInput2');
    const fileInput3 = document.getElementById('FileInput3');
    
    // Check if a file is selected
    if (FileInput.files.length > 0 && fileInput2.files.length > 0 && fileInput3.files.length > 0 ) {
      this.textContent = 'Submitted'; // Change button text
      this.classList.remove('btn-primary'); // Optional: Change button styling
      this.classList.add('btn-success'); // Optional: Add success styling
      this.disabled = true; // Optional: Disable the button after submission
    } else {
      alert('Please select files from at least one input before submitting!');
    }
  });
  

  function displayFiles(inputId, listId) {
    const fileInput = document.getElementById(inputId);
    const fileList = document.createElement('ul');
    fileList.id = listId;
    fileList.className = 'list-group mt-3';
  
    for (let file of fileInput.files) {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = `${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
      fileList.appendChild(listItem);
    }
  
    // Remove previous file list (if any) and append the new one
    document.querySelector(`#${listId}`)?.remove();
    fileInput.parentNode.appendChild(fileList);
  }
  
  document.getElementById('FileInput').addEventListener('change', function () {
    displayFiles('FileInput', 'FileList1');
  });
  
  document.getElementById('FileInput2').addEventListener('change', function () {
    displayFiles('FileInput2', 'FileList2');
  });

  document.getElementById('FileInput3').addEventListener('change', function () {
    displayFiles('FileInput3', 'FileList3');
  });
