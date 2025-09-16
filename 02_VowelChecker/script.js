let textInput = document.getElementById("textInput");
let result = document.getElementById("result");

function checkVowels() {
    let vowelCount = 0;
    let text = textInput.value.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if (isVowel(char)) {
            vowelCount++;
        }
    }

    result.textContent = "result: " + vowelCount;
}

function isVowel(char) {
    let vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}

function resetFunc() {
    textInput.value = "";
    result.textContent = "result: ";
}
