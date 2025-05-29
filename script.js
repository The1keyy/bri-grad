document.addEventListener("DOMContentLoaded", function () {
    // Background Music
    const audio = document.createElement("audio");
    audio.src = "audio/drake.mp3";  // Make sure the file is inside the audio/ folder
    audio.loop = true;
    audio.volume = 0.5;

    // Birthday message 
    const message = `Happy Birthday, Brenda! 🎉  

    Wishing you a birthday filled with love, joy, and all the happiness you bring to the people around you. I’m beyond grateful for our friendship, and I already know this next year is gonna be another unforgettable one.  

    First off, I hope you receive all the love today because you deserve every bit of it. Just wanted to take a second to say thank you, not just for today, but for always being like a sister to me. From the late night FT calls to the funniest venting sessions, it’s always a vibe. You let me troll and not take things too seriously, and honestly, I appreciate that more than you know. The advice, the laughs, the support it all means a lot.  

    And thank you for allowing me to be an uncle twice. Your bunny and kitten really made my resume go up. You already know I take my role seriously.  

    And because I truly value this friendship, I had to do something special. So, I coded this whole website just for you to celebrate our friendship and make this special day even more memorable. I know I'll be the first to do it, so I hope you love it.

    Life be doing its thing, but through it all, I’m grateful for this bond we’ve built. No matter what, I got you, just like you’ve always had me.  

    So today, we celebrating, laughing, and making some more memories. Much love, fam. Get lit for me today 🕺🏿🕺🏿 BIG 21!!!!`;

    const textElement = document.getElementById("birthday-message");
    textElement.innerHTML = message.replace(/\n/g, "<br>");
    textElement.style.opacity = 0;
    textElement.style.transition = "opacity 2s ease-in-out";

    // Confetti effect
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
    script.onload = () => {
        let count = 0;
        const confettiInterval = setInterval(() => {
            confetti({
                particleCount: 150,
                spread: 180,
                origin: { y: 0.6 }
            });
            count++;
            if (count === 4) clearInterval(confettiInterval);
        }, 2000);
    };
    document.body.appendChild(script);

    // Sscroll when clicking Yes/No buttons
    const responseMsg = document.getElementById("response-msg");

    document.getElementById("yes-btn").addEventListener("click", function() {
        responseMsg.innerText = "Just text me and I'll have your gift ready!!! P.S. I don’t really be on my phone like that so just bear with me.";
        responseMsg.style.color = "gold";
        responseMsg.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    document.getElementById("no-btn").addEventListener("click", function() {
        responseMsg.innerText = "Stop being extra and pick Yes 😑";
        responseMsg.style.color = "lightcoral";
        responseMsg.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    // "Press Me" button for music click
    document.getElementById("press-me-btn").addEventListener("click", function() {
        // Play the music
        audio.play().then(() => {
            console.log("Music is playing!");
        }).catch(error => {
            console.log("Autoplay blocked, user interaction required.");
        });

        // Show the birthday message with animation
        setTimeout(() => textElement.style.opacity = 1, 500);

        // Trigger confetti
        if (typeof confetti === "function") {
            confetti({
                particleCount: 150,
                spread: 180,
                origin: { y: 0.6 }
            });
        }
    });
});