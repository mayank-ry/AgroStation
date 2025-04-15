// /public/script.js
const socket = io();

let currentSeller = "";

function openChat(productName, sellerName) {
  currentSeller = sellerName;
  document.getElementById("chatModalLabel").innerText = `Chat with ${sellerName}`;
  document.getElementById("chatBox").innerHTML = `<p class="text-muted">You are now chatting about <strong>${productName}</strong>.</p>`;
  const chatModal = new bootstrap.Modal(document.getElementById('chatModal'));
  chatModal.show();
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();
  if (!message) return;

  socket.emit("chat message", { sender: "You", message });

  input.value = "";
}

socket.on("chat message", (data) => {
  const chatBox = document.getElementById("chatBox");
  const msgElement = document.createElement("div");
  msgElement.innerHTML = `<p><strong>${data.sender}:</strong> ${data.message}</p>`;
  chatBox.appendChild(msgElement);
  chatBox.scrollTop = chatBox.scrollHeight;
});

