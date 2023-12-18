document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const convertBtn = document.getElementById('convertBtn');
    const stopBtn = document.getElementById('stopBtn');

    let synth = window.speechSynthesis;
    let speaking = false;

    convertBtn.addEventListener('click', function () {
        if (!speaking) {
            speakText(inputText.value);
        } else {
            stopSpeaking();
        }
    });

    function speakText(text) {
        if (text !== '') {
            let utterance = new SpeechSynthesisUtterance(text);
            synth.speak(utterance);
            speaking = true;

            utterance.onend = function () {
                speaking = false;
            };

            convertBtn.innerText = 'Pause';
            stopBtn.removeAttribute('disabled');
        }
    }

    function stopSpeaking() {
        synth.cancel();
        speaking = false;

        convertBtn.innerText = 'Convert';
        stopBtn.setAttribute('disabled', 'true');
    }

    stopBtn.addEventListener('click', stopSpeaking);
});
