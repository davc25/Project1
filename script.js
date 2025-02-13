let noCount = 0;

function shrinkNoExpandYes() {
    var noButton = document.getElementById('no-button');
    var yesButton = document.getElementById('yes-button');
    var message = document.getElementById('message');

    // Shrink "No" button
    var currentNoSize = window.getComputedStyle(noButton).getPropertyValue('font-size');
    var newNoSize = parseFloat(currentNoSize) * 0.8;
    noButton.style.fontSize = newNoSize + 'px';

    // Expand "Yes" button in a controlled way
    var currentYesSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
    var newYesSize = Math.min(parseFloat(currentYesSize) * 1.2, 40); // Max font size set to 40px
    yesButton.style.fontSize = newYesSize + 'px';

    // Update message
    noCount++;
    const sadMessages = [
        "Ma sad ko if no😢",
        "Every 'No' breaks my heart a little 💔",
        "Sayang ang opportunity😭",
        "Ma sad ko if no😢",
        "No jud?",
        "Ali naaaaaa🥺",
        "Last nani no jud??",
        "Di pwede mo no HAHAHAHAHA 😔"
    ];
    if (noCount < sadMessages.length) {
        message.innerText = sadMessages[noCount];
    }

    // Make "No" button disappear when too small
    if (newNoSize < 5) {
        noButton.style.display = 'none';
        message.innerText = "No choice na hehe 😊❤️";
        yesButton.style.fontSize = '36px';
        yesButton.style.width = '220px';
        yesButton.style.height = '80px';
        yesButton.style.display = 'block';
    }
}

function respondYes() {
    document.getElementById('message').innerText = "Yay! I can't wait for our date! ❤️🥰";

    // Change background to GIF
    document.body.style.background = "url('https://media1.giphy.com/media/MLN293JG7qZgfByKNz/giphy.gif')";
    document.body.style.backgroundSize = "70% auto";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";

    // Hide Yes and No buttons
    document.getElementById('yes-button').style.display = "none";
    document.getElementById('no-button').style.display = "none";

    // Highlight the message
let message = document.getElementById('message');
message.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; // Light white background
message.style.padding = "10px";
message.style.borderRadius = "10px";
message.style.fontWeight = "bold";
message.style.display = "inline-block"; // Keeps the background tight around the text

    // Play music
    let music = document.getElementById('loveSong');
    music.volume = 0.5;
    music.play();

    // Show letter icon with fade-in effect
    let letterIcon = document.getElementById('letter-icon');
    letterIcon.style.display = "block";
    setTimeout(() => {
        letterIcon.classList.add('fade-in');
    }, 300);

    // Show GIFs on the sides
    showSideGifs();
}

// Function to show the letter with slow fade-in and typewriter effect
function showLetter() {
    let letter = document.getElementById('letter');
    letter.style.display = "block";
    setTimeout(() => {
        letter.classList.add('fade-in');
    }, 300);
    let letterText =`Dear Gie, 💕  

Thank you for accepting!  
I can't believe this day is finally here—the day I get to take you on our first date.  
Just the thought of spending this time with you makes my heart race with excitement.  
From the very first moment we started talking, I knew there was something special about you.  
And now, I get to cherish that even more in person.  

Il Corso lang ta kay daghan ta kapilian ngadtoo hehehe mwaa  
See you soon, beautiful. I can’t wait.  

Love,
Dave`; 
     
    
    
document.getElementById("letter-text").textContent = ""; // Clear previous text
typeWriterEffect("letter-text", letterText, 50);

// Hide letter icon after clicking
document.getElementById('letter-icon').style.display = "none";
}

// Function to display GIFs on the sides
function showSideGifs() {
    const gifUrls = [       
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGdwYmZ6N25mY2E1bWFvZzQ4NTV6MXMwaTh4ZGRrZXJ2aXB4aW42cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3mnEmgej63Z4RIQ/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Z5MzBuOWlybWg2aDFsdXdqMHBsbGM2N2phbjZ3MzA3YXM0YTZvYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l49JFIqAYshRSD6tq/giphy.gif"
];

let leftGif = document.createElement("img");
leftGif.src = gifUrls[0];
leftGif.classList.add("side-gif", "left-gif");
leftGif.alt = "Valentine's GIF";

let rightGif = document.createElement("img");
rightGif.src = gifUrls[1];
rightGif.classList.add("side-gif", "right-gif");
rightGif.alt = "Valentine's GIF";

document.body.appendChild(leftGif);
document.body.appendChild(rightGif);
    };

// Typewriter effect function
function typeWriterEffect(elementId, text, speed) {
    let i = 0;
    let element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear previous text

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-animation');
    heart.innerText = "❤️";
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
