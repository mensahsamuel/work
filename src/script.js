document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const generateInvoiceButton = document.getElementById('generateInvoice');
    const sendButton = document.getElementById('sendButton');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username === 'admin' && password === 'password') {
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid credentials');
            }
        });
    }

    if (generateInvoiceButton) {
        generateInvoiceButton.addEventListener('click', function() {
            document.getElementById('invoiceResult').innerText = 'Invoice generated!';
        });
    }

    if (sendButton) {
        sendButton.addEventListener('click', function() {
            const chatInput = document.getElementById('chatInput').value;
            const chatBox = document.getElementById('chatBox');
            const message = document.createElement('div');
            message.innerText = chatInput;
            chatBox.appendChild(message);
            document.getElementById('chatInput').value = '';
        });
    }
});
