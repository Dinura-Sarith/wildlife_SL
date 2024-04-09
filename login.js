// References
const loginForm = document.getElementById('loginForm'); 
const signupForm = document.getElementById('signupForm'); 
const showSignupBtn = document.getElementById('showSignup'); 
const showLoginBtn = document.getElementById('showLogin');

// Switch to sign up form when sign up is clicked
showSignupBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden'); 
    signupForm.classList.remove('hidden'); 
});

// Switch to login form when sign in is clicked
showLoginBtn.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden'); 
});


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const name = document.getElementById('name').value;
        
        // For when the login is succesfull
        if (email.trim() !== '' && password.trim() !== '') {
            // Redirect to index.html upon successful login
            window.location.href = 'index.html';
        } else {
            // To display an error message when either of the section are empty
            alert('Please enter both email and password.');
        }
    });
});


    // Login
    function loginUser() {
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      let userRecords = JSON.parse(localStorage.getItem("users")) || [];

      let userFound = userRecords.some(user => user.email === email && user.password === password);

      if (userFound) {
        alert("Login Successful");
        let currentUser = userRecords.find(user => user.email === email);
        localStorage.setItem("name", currentUser.name);
        localStorage.setItem("email", currentUser.email);
        window.location.href = "index.html";
      } else {
        alert("Login Failed");
      }
    }

    // Registration 
    function registerUser() {
      let name = document.getElementById("regName").value;
      let email = document.getElementById("regEmail").value;
      let password = document.getElementById("regPassword").value;

      let user_records = JSON.parse(localStorage.getItem("users")) || [];

      if (user_records.some(v => v.email === email)) {
        alert("Duplicate Data");
      } else {
        user_records.push({
          "name": name,
          "email": email,
          "password": password,
        });
        localStorage.setItem("users", JSON.stringify(user_records));
        location.reload();
        alert("Registration Successful");
        
      }
    }

 // Getting users from local storage
 const users = JSON.parse(localStorage.getItem("users")) || [];
 const userList = document.getElementById("userList");

 // Function to display users
 function displayUsers() {
     userList.innerHTML = ""; 

     // Creating user list
     users.forEach(user => {
         const li = document.createElement("li");
         li.textContent = `Name: ${user.name}, Email: ${user.email}, Password: ${user.password}`;
         userList.appendChild(li); 
     });
 }

 // Display users when the page loads
 displayUsers();