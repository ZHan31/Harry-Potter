const phrases = [
    "I solemnly swear that I am up to no good.",
    "It does not do to dwell on dreams and forget to live.",
    "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    "After all this time? Always.",
    "Nitwit! Blubber! Oddment! Tweak!",
    "I am what I am, an' I'm not ashamed. 'Never be ashamed,' my ol' dad used ter say, 'there's some who'll hold it against you, but they're not worth botherin' with.'",
    "We must all face the choice between what is right and what is easy.",
    "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.",
    "To the well-organized mind, death is but the next great adventure."
];

function displayRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const phrase = phrases[randomIndex];
    const phraseContainer = document.getElementById("phrase-container");
    phraseContainer.textContent = phrase;
}

setInterval(displayRandomPhrase, 3000);