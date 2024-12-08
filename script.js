document.addEventListener('DOMContentLoaded', () => {
    // Existing code
    const lastModified = document.getElementById('last-modified');
    lastModified.textContent = document.lastModified;

    // Quote Generator
    const quotes = [
        "True wisdom comes not from knowledge, but from understanding.",
        "The only way to do great work is to love what you do.",
        "Success is not final, failure is not fatal.",
        "Believe you can and you're halfway there.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Everything you can imagine is real.",
        "Normality is a paved road: it’s comfortable to walk but no flowers grow.",
        "Live as if you were to die tomorrow.",
        "It always seems impossible until it's done.",
        "The time is always right to do what is right.",
        "Happiness depends upon ourselves.",
        "If you don’t like the road you’re walking, start paving another one.",
        "Live a simple life; you will own the most beautiful treasures of the world!",
        "A simple life gives birth to more clarity, inner peace and meaningful relationships.",
        "Because you are alive, everything is possible.",
        "Life isn't about finding yourself. Life is about creating yourself.",
        "Our truest life is when we are in dreams awake.",
        "The great thing in this world is not so much where we are, but in what direction we are going.",
        "A warm smile is the universal language of kindness.",
        "Simplicity is the ultimate sophistication.",
        "Love yourself first and everything else falls into line.",
        "Lead from the heart, not the head.",
        "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
        "Live in the sunshine, swim the sea, drink the wild air.",
        "Never regret anything you have done with a sincere affection; nothing is lost that is born of the heart.",
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "There came a time when the risk to remain tight in the bud was more painful than the risk it took to blossom.",
        "It is never too late to be what you might have been.",
        "Growth begins when we start to accept our own weakness.",
        "I decided I can’t pay a person to rewind time, so I may as well get over it.",
        "The real difficulty is to overcome how you think about yourself.",
        "I have never been hurt by what I have not said.",
        "Whether you think you can, or you think you can’t – you’re right.",
        "I like criticism. It makes you strong.",
        "Decisions without actions are worthless.",
        "Since you get more joy out of giving joy to others, you should put a good deal of thought into the happiness that you are able to give.",
        "Dream as if you’ll live forever, live as if you’ll die today.",
        "Oh, the things you can find, if you don’t stay behind.",
        "Be so good they can’t ignore you.",
        "If you tell the truth you don’t have to remember anything.",
        "I don’t need it to be easy, I need it to be worth it.",
        "To live will be an awfully big adventure.",
        "There is no substitute for hard work.",
        "Never let your emotions overpower your intelligence.",
        "Turn your wounds into wisdom.",
        "It hurt because it mattered.",
        "I have nothing to lose but something to gain.",
        "A happy soul is the best shield for a cruel world.",
        "Let the beauty of what you love be what you do.",
        "Whatever you do, do it well.",
        "Every moment is a fresh beginning.",
        "If you can't do great things, do small things in a great way.",
        "Success is going from failure to failure without losing enthusiasm.",
        "The successful warrior is the average man, with laser-like focus.",
        "The best way to appreciate your job is to imagine yourself without one.",
        "The life of wisdom must be a life of contemplation combined with action.",
        "May the clouds in your life be only a background for a lovely sunset.",
        "Every day is a good day. There is something to learn, care and celebrate.",
        "Happiness consists not in having much, but in being content with little.",
        "The simplest things are often the truest.",
        "Happiness is nothing more than good health and a bad memory.",
        "The biggest asset in the world is your mindset.",
        "Either you run the day or the day runs you.",
        "Learn to live with less so that you appreciate more.",
        "We all live with the objective of being happy; our lives are all different and yet the same.",
        "Folks are usually about as happy as they make their minds up to be.",
        "Happiness is not something ready-made. It comes from your own actions.",
        "Learning is a weightless treasure you can always carry easily.",
        "You must expect great things of yourself before you can do them.",
        "Laugh as much as you breathe and love as long as you live.",
        "If I’m gonna tell a real story, I’m gonna start with my name.",
        "Change the world by being yourself.",
        "Tomorrow is now.",
        "Mistakes are proof that you are trying.",
        "I live a beautiful life with fewer things—simple, yet full."
    ];

    const quoteBox = document.getElementById('quote-box');
    const colorButtons = document.querySelectorAll('.color-btn');

    // Display random quote on page load
    if (quoteBox) {
        quoteBox.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    }

    // Handle color button clicks
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const colors = button.dataset.colors.split(',');
            quoteBox.style.color = colors[0];
            quoteBox.style.backgroundColor = colors[1];
            quoteBox.style.borderColor = colors[2];
            quoteBox.style.fontFamily = 'Poppins, sans-serif';
            quoteBox.style.fontSize = '1.2rem';
        });
    });

    // Weight Converter
    const weightInput = document.getElementById('weight-input');
    const unitSelect = document.getElementById('unit-select');
    const convertBtn = document.getElementById('convert-btn');
    const convertResult = document.getElementById('convert-result');

    if (convertBtn) {
        convertBtn.addEventListener('click', () => {
            const value = parseFloat(weightInput.value);
            if (isNaN(value)) {
                convertResult.textContent = 'Please enter a valid number';
                return;
            }

            if (unitSelect.value === 'lb-to-kg') {
                convertResult.textContent = `${(value * 0.4536).toFixed(4)} kilograms`;
            } else {
                convertResult.textContent = `${(value * 2.2046).toFixed(4)} pounds`;
            }
        });
    }

// Number Analyzer
const numberInput = document.getElementById('number-input');
const maxResult = document.getElementById('max-result');
const minResult = document.getElementById('min-result');
const sumResult = document.getElementById('sum-result');
const avgResult = document.getElementById('avg-result');
const reverseResult = document.getElementById('reverse-result');

numberInput.addEventListener('input', () => {
    const inputData = numberInput.value.split(',').map(item => item.trim());

    if (inputData.length === 0 || inputData[0] === '') {
        reverseResult.textContent = '';
        maxResult.textContent = '';
        minResult.textContent = '';
        sumResult.textContent = '';
        avgResult.textContent = '';
        return;
    }

    reverseResult.textContent = inputData.reverse().join(', ');

    // Regular expression to validate a valid number (including decimals and scientific notation)
    const numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;

    // Convert the input data to numbers, filtering out invalid ones using the regex
    const numbers = inputData
        .map(item => item.trim()) // Trim extra spaces
        .filter(item => numberRegex.test(item))
        .map(item => parseFloat(item));


    if (numbers.length > 0) {
        maxResult.textContent = Math.max(...numbers); 
        minResult.textContent = Math.min(...numbers); 
        sumResult.textContent = numbers.reduce((a, b) => a + b, 0); 
        avgResult.textContent = (numbers.reduce((a, b) => a + b, 0) / numbers.length).toFixed(2);
    } else {

        maxResult.textContent = 'Not applicable';
        minResult.textContent = 'Not applicable';
        sumResult.textContent = 'Not applicable';
        avgResult.textContent = 'Not applicable';
    }
});
    

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    const contactButton = document.querySelector('.btn-primary');
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    const viewProjectBtn = document.getElementById('viewProjectBtn');
    const body = document.body;

    if (viewProjectBtn) {
        viewProjectBtn.addEventListener('click', function (e) {
            e.preventDefault();
            body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = viewProjectBtn.href;
            }, 700);
        });
    }

    const viewHomeBtn = document.getElementById('viewHomeBtn');
    if (viewHomeBtn) {
        viewHomeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = viewHomeBtn.href;
            }, 700);
        });
    }
});




