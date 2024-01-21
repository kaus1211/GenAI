function sendMessage() {
    var userMessage = document.getElementById("user-input").value;
    displayMessage("User", userMessage);

    // Send user message to backend (Flask)
    fetch("/api/process_message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
    })
    .then(response => response.json())
    .then(data => {
        var botMessage = data.message;
        displayMessage("Chatbot", botMessage);
    })
    .catch(error => console.error('Error:', error));

    // Clear user input
    document.getElementById("user-input").value = "";
}

function displayMessage(sender, message) {
    var chatDisplay = document.getElementById("chat-display");
    var messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatDisplay.appendChild(messageElement);

    // Scroll to the bottom of the chat display
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}
