let collectedYou = false;

console.log("hey look at me");
console.log("use the collectWord function (type the key in Base64 in the console)");

function checksum(str) {
    return str.split('').reduce((sum, c) => sum + c.charCodeAt(0), 0);
}

const correctChecksum = 723;

function getHiddenWord() {
    return atob("eW91");
}

window.collectWord = function(inputBase64) {
    if (collectedYou) {
        console.log("%cYou already found the hidden word!", "color: green; font-weight: bold;");
        return;
    }

    try {
        const decoded = atob(inputBase64);

        if (checksum(decoded) === correctChecksum && decoded.length === 7) {
            collectedYou = true;

            const word = getHiddenWord();

            console.log("%cCongrats! You discovered the hidden word!", "color: green; font-weight: bold; font-size: 16px;");
            console.log("%cHidden word: " + word + "!", "color: purple; font-weight: bold;");
        } else {
            console.log("%cWrong key! Keep trying...", "color: red; font-weight: bold;");
        }
    } catch (e) {
        console.log("%cInvalid Base64 input! Try again.", "color: red; font-weight: bold;");
    }
}

window.isCollected = function() {
    return collectedYou;
}

const database = {
    cache: {},
    system: {
        flags: ["alpha", "beta"],
    },
    __internal__: [
        104,105,100,100,101,110,32,119,111,114,100,32,58,32,121,111,117
    ]
};
// call this function->
window.readInternal = function() {
    return database.__internal__
        .map(c => String.fromCharCode(c))
        .join("");
};