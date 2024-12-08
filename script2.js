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
        if (textArea.value.trim() === '') return; // No action for empty input
        textArea.value = isCapitalized
            ? textArea.value.toLowerCase()
            : textArea.value.toUpperCase();
        isCapitalized = !isCapitalized;
    });

    // Sort
    document.getElementById('sort-btn').addEventListener('click', () => {
        if (textArea.value.trim() === '') return; 
        textArea.value = textArea.value
            .split('\n') 
            .sort((a, b) => a.localeCompare(b)) 
            .join('\n'); 
    });

// Reverse
document.getElementById('reverse2-btn').addEventListener('click', () => {
    if (textArea.value.trim() === '') return; 
    const lines = textArea.value.split('\n'); 
    const reversedLines = lines.map(line => line.split('').reverse().join('')); 
    textArea.value = reversedLines.join('\n');
});
    

    // Strip Blank
    document.getElementById('strip-btn').addEventListener('click', () => {
        if (textArea.value.trim() === '') return; // 
        textArea.value = textArea.value
            .split('\n') 
            .map(line => line.trim()) 
            .filter(line => line !== '') 
            .join('\n'); 
    });

    // Add Numbers
    document.getElementById('number-btn').addEventListener('click', () => {
        if (textArea.value.trim() === '') return; 
        textArea.value = textArea.value
            .split('\n') 
            .map((line, index) => `${index + 1}. ${line}`) 
            .join('\n'); 
    });

    // Shuffle
    document.getElementById('shuffle-btn').addEventListener('click', () => {
        if (textArea.value.trim() === '') return; 
        const lines = textArea.value
            .split('\n') 
        for (let i = lines.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [lines[i], lines[j]] = [lines[j], lines[i]]; 
        }
        textArea.value = lines.join('\n'); 
    });
});