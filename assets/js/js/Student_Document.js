import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-storage.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAifkBmMPwQLTqRu8nYFU1dqej2dlX33Bk",
  authDomain: "usaas-4230f.firebaseapp.com",
  databaseURL: "https://usaas-4230f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "usaas-4230f",
  storageBucket: "usaas-4230f.firebasestorage.app",
  messagingSenderId: "1057123876526",
  appId: "1:1057123876526:web:fb4c3c0e6b2407295f773f",
  measurementId: "G-NSW66N1VGP"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage();
const db = getFirestore();

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
  
//display file function
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


  document.getElementById('fileUploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
//file retrieve to database    
    const FileInput = document.getElementById('FileInput');
    const file = FileInput.files[0];
  
    if (file) {
      const storageRef = ref(storage, `student_files/${file.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
  
        // Save the file reference in Firestore
        await addDoc(collection(db, 'uploaded_files'), {
          fileName: file.name,
          fileURL: downloadURL,
          uploadedAt: new Date(),
          status: 'Pending'
        });
  
        alert('File uploaded successfully!');
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Upload failed!');
      }
    } else {
      alert('Please select a file to upload.');
    }
  });
  