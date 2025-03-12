document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    const voiceBtn = document.getElementById('voice-btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (parseInt(value) >= 0 || value === '.') {
                currentInput += value;
                display.textContent = currentInput;
            } else if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.textContent = '';
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.textContent = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else {
                if (currentInput) {
                    previousInput = currentInput;
                    currentInput = '';
                    operator = value;
                }
            }
        });
    });

    // Web Speech API
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        console.error('SpeechRecognition is not supported in this browser.');
        alert('SpeechRecognition is not supported in this browser.');
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES'; // Establecer el idioma a español

    recognition.onstart = function() {
        display.textContent = 'Escuchando...';
        console.log('Voice recognition started. Try speaking into the microphone.');
    };

    recognition.onend = function() {
        display.textContent = currentInput;
        console.log('Voice recognition ended.');
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        console.log('Heard:', transcript);
        // Process the transcript to perform calculator operations
        processVoiceCommand(transcript);
    };

    voiceBtn.addEventListener('click', function() {
        recognition.start();
    });

    function processVoiceCommand(command) {
        command = command.toLowerCase();
        console.log('Processing command:', command);

        if (command.includes('limpiar')) {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '';
        } else {
            const words = command.split(' ');
            words.forEach(word => {
                if (!isNaN(word)) {
                    currentInput += word;
                    display.textContent = currentInput;
                } else if (['+', '-', '*', '/'].includes(word)) {
                    if (currentInput) {
                        previousInput = currentInput;
                        currentInput = '';
                        operator = word;
                    }
                }
            if (currentInput && previousInput && operator) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                console.log('reaultad ', currentInput)
                display.textContent = currentInput;
                previousInput = '';
                operator = '';
            }
            });
        }
    }
});
