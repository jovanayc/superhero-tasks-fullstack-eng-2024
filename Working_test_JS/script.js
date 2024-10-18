document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('user-name').value;
    const password = document.getElementById('user-password').value;

    // Check credentials against user data
    const user = userData.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('userName', user.name);
        window.location.href = 'homepage.html'; // Updated to homepage.html
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password!';
    }
});
