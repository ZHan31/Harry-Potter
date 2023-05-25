const playAudio = () => {
    var audio = document.getElementById("myAudio1");
    audio.play();
};
function playAudio1() {
    var audio = document.getElementById("myAudio2");
    audio.play();
}
function playAudio2() {
    var audio = document.getElementById("myAudio3");
    audio.play();
}
function playAudio3() {
    var audio = document.getElementById("myAudio4");
    audio.play();
}

function playAudio4() {
    var audio = document.getElementById("myAudio5");
    audio.play();
}
function playAudio5() {
    var audio = document.getElementById("myAudio6");
    audio.play();
}
function myFunction(){
    let myArray2 = [18, 20, 21, 58];
    alert(myArray2[0]);
}
function myFunction2(){
    let myArray2 = [18, 20, 21, 58];
    alert(myArray2[1]);
}
function myFunction3(){
    let myArray2 = [18, 20, 21, 58];
    alert(myArray2[2]);
}
function myFunction4() {
    let myArray2 = [18, 20, 21, 58];
    alert(myArray2[3]);

}

var characters = [
    {
        name: "Harry Potter",
        age: 18,
        role: "Main protagonist",
    },
    {
        name: "Hermione Granger",
        age: 20,
        role: "Friend and talented witch",
    },
    {
        name: "Ron Weasley",
        age: 21,
        role: "Friend and loyal companion",
    },
    {
        name: "Albus Dumbledore",
        age: 58,
        role: "Headmaster of Hogwarts",
    },
    {
        name: "Volan-De-Mort",
        age: 45,
        role: "Dark wizard",
    },
    {
        name: "Snape",
        age: 38,
        role: "Complex and enigmatic character",
    },
];

    function filterAges(age) {
    var filteredCharacters = characters.filter(function(character) {
    return character.age >= age;
});

    displayFilteredCharacters(filteredCharacters);
}

    function displayFilteredCharacters(characters) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "";

    characters.forEach(function(character) {
    var characterDiv = document.createElement('div');
    characterDiv.classList.add('character');

    var nameElement = document.createElement('h2');
    nameElement.textContent = character.name;

    var ageElement = document.createElement('p');
    ageElement.textContent = "Age: " + character.age;

    var roleElement = document.createElement('p');
    roleElement.textContent = "Role: " + character.role;

    characterDiv.appendChild(nameElement);
    characterDiv.appendChild(ageElement);
    characterDiv.appendChild(roleElement);

    resultDiv.appendChild(characterDiv);
});
}

const characters = [
    { name: "Harry Potter", spellsUsed: 15 },
    { name: "Hermione Granger", spellsUsed: 20 },
    { name: "Ron Weasley", spellsUsed: 10 },
    { name: "Albus Dumbledore", spellsUsed: 30 },
    { name: "Volan" , spellsUsed: 57},
    { name: "Volan", spellsUsed: 57          },
    {name: "Snape", spellsUsed: 13},
];

characters.forEach(character => {
    const characterElement = document.querySelector(`#${character.name.replace(/\s+/g, "-").toLowerCase()}`);
    characterElement.querySelector('.spells-used').textContent = `Spells Used: ${character.spellsUsed}`;
});
