const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");
//console.log(sendButton);

let userText = null;

//html elementi oluşturur
const createElement = (html, className) => {
// console.log(html);
// console.log(className);
const chatDiv = document.createElement("div");
chatDiv.classList.add("chat", className);
chatDiv.innerHTML = html ;
//console.log(chatDiv)
return chatDiv;
}
const showTypingAnimation = () => {
    const html =`
    <div class="chat-content">
    <div class="chat-details">
      <img src="assets/ai-logo.jpeg" alt="" width="50" />
      <div class="typing-animation">
        <div class="typing-dot" style="--delay:0.2s"></div>
        <div class="typing-dot" style="--delay:0.3s"></div>
        <div class="typing-dot" style="--delay:0.4s"></div>
      </div>
    </div>
  </div>
    `;
    //yazma animasyonu ile div olusturum ve bunu chatContainere ekle
   const incomingChatDiv = createElement(html, "incoming");
   chatContainer.appendChild(incomingChatDiv);
   chatContainer.scrollTo(0, chatContainer.scrollHeight);
};

const handleOutGoingChat = () => {
  userText = chatInput.value.trim(); //chatInput değeri alma

  if (!userText) return; //chatInput'un icerisi bossa calisma
  //console.log(userText);

  const html = `
  <div class="chat-content">
        <div class="chat-details">
          <img src="assets/people.jpeg" alt="" width="50" />
          <p></p>
        </div>
    </div>`;
   
    //kullanıcının mesajını içeren bir div oluştur ve bunu chatContainer yapısına ekle
    const outgoingChatDİv = createElement(html, "outgoing");
   outgoingChatDİv.querySelector("p").textContent = userText;
   chatContainer.appendChild(outgoingChatDİv);
   setTimeout(showTypingAnimation, 500);
};
sendButton.addEventListener("click", handleOutGoingChat);

