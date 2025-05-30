document.addEventListener("DOMContentLoaded", function () {
    // Background Music
    const audio = document.createElement("audio");
    audio.src = "audio/C.mp3";  // Make sure the file is inside the audio/ folder
    audio.loop = true;
    audio.volume = 0.5;

    // message 
    const message = `
You’re one of those rare people God clearly took His time creating.

You’ve walked through so much, but what stands out the most isn’t the struggle. It’s your love. Your energy. The way you show up for people with your whole heart, even when your own world feels heavy. You carry grace and strength in a way that’s soft but powerful. That’s rare.

You’ve always been the one who makes other people feel like they can breathe again. I know that from experience. I’ll never forget how you stayed on the phone with me, checked on me, and gave up your own comfort to make sure I got home safe. You didn’t have to. But you did. That’s just who you are.

You love deeply, and you prove it. I’ll carry that with me forever.

Your smile, your dimples, your little “just a girl” moments that always make me laugh, even when I pretend not to. You’ve got this light in you that makes life feel softer and warmer just by being there.

And now here you are, graduating. Ready to step into the medical field, where the world needs people exactly like you. People who don’t just fix what’s broken, but see the whole person. You’re going to change lives. And with everything you’ve been through, all the pressure and weight, you’re still growing. Still rising. Turning it all into something unshakable. A diamond, for real.

I’m so proud of you. Your journey is already a reflection of everything beautiful about you. And this is just the beginning.

You’ve already been a light in my life, and I know you’re about to be that for so many others. Keep shining. You were made for this.

Thank you for being another beautiful, bright Haitian woman out here making the numbers rise. Your success means something so much deeper. It opens the door for other girls who come from similar backgrounds, who need someone to look up to and say, “I can do that too.” Your story isn’t just yours. It’s fuel. It’s motivation. It even pushed me in my own journey to want to help others, to believe I could make a difference too. You didn’t just graduate. You lifted a whole community with you.

Love you always,

Keyshawn `;

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