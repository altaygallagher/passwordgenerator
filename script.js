const characters = {
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "~`!@#$%^&*()_-+={[}],|:;<>.?/"
};

function generateRandomPassword(length, includeNumbers, includeSymbols) {
    let charSet = characters.letters;
    if (includeNumbers) charSet += characters.numbers;
    if (includeSymbols) charSet += characters.symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }
    return password;
}

document.getElementById("generate-btn").addEventListener("click", function () {
    const length = document.getElementById("length").value;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    document.getElementById("password1").textContent = generateRandomPassword(length, includeNumbers, includeSymbols);
    document.getElementById("password2").textContent = generateRandomPassword(length, includeNumbers, includeSymbols);
});

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert(`Password copied to clipboard: ${text}`);
    }).catch(err => {
        console.error('Failed to copy password: ', err);
    });
}
