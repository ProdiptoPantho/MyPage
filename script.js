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
        "The future belongs to those who believe in the beauty of their dreams."
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

    const numbers = inputData.map(item => parseFloat(item)).filter(num => !isNaN(num));

    if (numbers.length > 0) {
        maxResult.textContent = Math.max(...numbers);
        minResult.textContent = Math.min(...numbers);
        sumResult.textContent = numbers.reduce((a, b) => a + b, 0);
        avgResult.textContent = (numbers.reduce((a, b) => a + b, 0) / numbers.length).toFixed(6);
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

//Magic Text

document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('magic-text');

    // Clear All
    document.getElementById('clear-btn').addEventListener('click', () => {
        textArea.value = '';
    });

    // Capitalize (Toggle)
    let isCapitalized = false;
    document.getElementById('capitalize-btn').addEventListener('click', () => {
        textArea.value = isCapitalized
            ? textArea.value.toLowerCase()
            : textArea.value.toUpperCase();
        isCapitalized = !isCapitalized;
    });

    // Sort
    document.getElementById('sort-btn').addEventListener('click', () => {
        textArea.value = textArea.value
            .split('\n')
            .filter(line => line.trim() !== '')
            .sort((a, b) => a.localeCompare(b))
            .join('\n');
    });

    // Reverse
    document.getElementById('reverse-btn').addEventListener('click', () => {
        textArea.value = textArea.value
            .split('\n')
            .filter(line => line.trim() !== '')
            .reverse()
            .join('\n');
    });

    // Strip Blank
    document.getElementById('strip-btn').addEventListener('click', () => {
        textArea.value = textArea.value
            .split('\n')
            .map(line => line.trim())
            .filter(line => line !== '')
            .join('\n');
    });

    // Add Numbers
    document.getElementById('number-btn').addEventListener('click', () => {
        textArea.value = textArea.value
            .split('\n')
            .filter(line => line.trim() !== '')
            .map((line, index) => `${index + 1}. ${line}`)
            .join('\n');
    });

    // Shuffle
    document.getElementById('shuffle-btn').addEventListener('click', () => {
        const lines = textArea.value
            .split('\n')
            .filter(line => line.trim() !== '');
        for (let i = lines.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [lines[i], lines[j]] = [lines[j], lines[i]];
        }
        textArea.value = lines.join('\n');
    });
});

