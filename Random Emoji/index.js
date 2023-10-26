const btnElement = document.getElementById('btn');
const emojiNameElement = document.getElementById('emoji-name');

const emoji = []
async function addEmoji() {
    // https://emoji-api.com/ enter email and get a key.
    let response = await fetch("https://emoji-api.com/emojis?access_key=3ce0aa04042c1a5405469ed7f0cd95bf0e608a94");
    data = await response.json();
    for (let i = 0; i < 1500; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}
addEmoji();
btnElement.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * emoji.length);
    btnElement.innerText = emoji[randomNumber].emojiName;
    emojiNameElement.innerText = emoji[randomNumber].emojiCode;
});