
function getHero(magpro, cost, image, name = "", lives = 0,) {
    return {
        magpro,
        lives,
        cost,
        image,
        name
    }
}


function updateCharacteristics(el, innetHtml) {
    let yourMagpro = document.getElementById(el);
    yourMagpro.innerHTML = innetHtml;
}

window.onload = function () {
    let yourName = getHero(20, 80, "...", "", 3);
    let amaranta = getHero(28, 120, "...", "Amaranta");
    let kolmal = getHero(50, 120, "...", "Kolmal");
    let erawan = getHero(90, 120, "...", "Erawan");

    let gender = +prompt(`Enter the gender of the character:
        1 - male;
        2 - female`);
    if (gender === 1) {
        const imageArea = document.getElementsByClassName("girl")[0];
        imageArea.src = "characters/парень.png"
    }

    let enterName = prompt("Enter your character's name");
    if (!enterName) {
        enterName = "everyone"
    }
    alert("First, buy a dragon from the Dragon Store.")

    const span = document.getElementById("user-name");
    span.innerHTML = enterName;
    const name = document.getElementById("user-name-second");
    name.innerHTML = enterName;

    updateCharacteristics("yourMagpro", yourName.magpro);
    updateCharacteristics("yourlives", yourName.lives);
    updateCharacteristics("yourcost", yourName.cost);

    updateCharacteristics("amarantaName", amaranta.name);
    updateCharacteristics("amarantaMagpro", amaranta.magpro);
    updateCharacteristics("amarantaCost", amaranta.cost);

    updateCharacteristics("kolmalMagpro", kolmal.magpro);
    updateCharacteristics("kolmalName", kolmal.name);
    updateCharacteristics("kolmalCost", kolmal.cost);

    updateCharacteristics("erawanMagpro", erawan.magpro);
    updateCharacteristics("erawanName", erawan.name);
    updateCharacteristics("erawanCost", erawan.cost);

    let closere = document.getElementById('closere');
    let openre = document.getElementById('openre');
    let buyMeraxesEl = document.getElementById('buyMeraxes');
    let buyBallerionEl = document.getElementById('buyBallerion');
    let buyTerraxEl = document.getElementById('buyTerrax');
    let battleAmaranta = document.getElementById('battleAmaranta');
    let battleKolmal = document.getElementById('battleKolmal');
    let battleErawan = document.getElementById('battleErawan');

    closere.onclick = function () {
        document.getElementById('inshop').style.visibility = "hidden"
    }
    openre.onclick = function () {
        document.getElementById('inshop').style.visibility = "visible"
    }
    buyMeraxesEl.onclick = function () {
        buyMeraxes()
    }
    buyBallerionEl.onclick = function () {
        buyBallerion()
    }
    buyTerraxEl.onclick = function () {
        buyTerrax()
    }
    battleAmaranta.onclick = function () {
        battle(yourName, amaranta, "battlewhithamaranta", 120, "amarantaName", "amarantaMagpro", "amarantaCost")
    }
    battleKolmal.onclick = function () {
        battle(yourName, kolmal, "battlewhithkolmal", 120, "kolmalName", "kolmalMagpro", "kolmalCost")
    }
    battleErawan.onclick = function () {
        battle(yourName, erawan, "battlewhitherawan", 10000, "erawanName", "erawanMagpro", "erawanCost")
    }

    function failAlert() {
        alert(`You don't have enough money!
        Click on the chest and guess the riddle to get money.`);
    }

    function successAlert(yourName) {
        alert("Thank you for your purchase! Your magical protection =" + yourName.magpro);
    }

    function buyMeraxes() {
        if (yourName.cost < 50) {
            failAlert();
        } else {
            yourName.cost -= 50;
            yourName.magpro = yourName.magpro + 10;
            updateCharacteristics("yourcost", yourName.cost);
            updateCharacteristics("yourMagpro", yourName.magpro);
            successAlert(yourName);
        }
    }

    function buyBallerion() {
        if (yourName.cost < 100) {
            failAlert();
        } else {
            yourName.cost -= 100;
            yourName.magpro = yourName.magpro + 25;
            updateCharacteristics("yourcost", yourName.cost);
            updateCharacteristics("yourMagpro", yourName.magpro);
            successAlert(yourName);
        }
    }

    function buyTerrax() {
        if (yourName.cost < 200) {
            failAlert();
        } else {
            yourName.cost -= 200;
            yourName.magpro = yourName.magpro + 40;
            updateCharacteristics("yourcost", yourName.cost);
            updateCharacteristics("yourMagpro", yourName.magpro);
            successAlert(yourName);
        }
    }

    let chest = document.getElementById('chest');
    chest.onclick = function () {
        let chest2 = +prompt("What is 172 + 738?")
        this.disabled = 'disabled';
        if (chest2 === 910) {
            yourName.cost += 30;
            updateCharacteristics("yourcost", yourName.cost);
            alert("Correct answer! You got 30 adarlans. Your balance " + yourName.cost + " adarlans")
        } else {
            alert("Wrong answer!")
        }
    }

    function battle(yourName, enemy, battleId, deltaCost, enemyNameId, enemyMagproId, enemyCostId, battleButton) {
        if (yourName.magpro < enemy.magpro) {
            let imageBattle1 = document.getElementById(battleId);
            imageBattle1.src = "characters/Battle lose.png";
            yourName.magpro = 0;
            yourName.cost = 0;
            yourName.lives = 0;
            updateCharacteristics("yourMagpro", yourName.magpro);
            updateCharacteristics("yourlives", yourName.lives);
            updateCharacteristics("yourcost", yourName.cost);

        } else {
            yourName.cost += deltaCost;
            yourName.lives -= 1;
            updateCharacteristics("yourlives", yourName.lives);
            updateCharacteristics("yourcost", yourName.cost);
            enemy.cost = 0;
            enemy.magpro = 0;
            updateCharacteristics(enemyNameId, enemy.name);
            updateCharacteristics(enemyMagproId, enemy.magpro);
            updateCharacteristics(enemyCostId, enemy.cost);
        }
    }
}

