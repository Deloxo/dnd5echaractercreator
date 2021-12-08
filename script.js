var stats = {
    "str": 15,
    "dex": 14,
    "con": 13,
    "int": 12,
    "wis": 10,
    "cha": 8
}

var temp;
var pointbuy = false;
var randomstats = false;
const reducer = (previousValue, currentValue) => previousValue + currentValue;
var statsTotal = stats.str + stats.dex + stats.con + stats.int + stats.wis + stats.cha;
var points = 0;

function showSubrace() {
    document.getElementById("dragonbornSubraces").style.visibility = "hidden";
    document.getElementById("dwarfSubraces").style.visibility = "hidden";
    document.getElementById("elfSubraces").style.visibility = "hidden";
    document.getElementById("gnomeSubraces").style.visibility = "hidden";
    document.getElementById("halflingSubraces").style.visibility = "hidden";
    document.getElementById("humanSubraces").style.visibility = "hidden";
    document.getElementById("tieflingSubraces").style.visibility = "hidden";
    document.getElementById("aasimarSubraces").style.visibility = "hidden";
    document.getElementById("genasiSubraces").style.visibility = "hidden";
    document.getElementById("githSubraces").style.visibility = "hidden";
    document.getElementById("goblinSubraces").style.visibility = "hidden";
    document.getElementById("hobgoblinSubraces").style.visibility = "hidden";
    document.getElementById("koboldSubraces").style.visibility = "hidden";
    document.getElementById("minotaurSubraces").style.visibility = "hidden";
    document.getElementById("orcSubraces").style.visibility = "hidden";
    document.getElementById("shifterSubraces").style.visibility = "hidden";
    document.getElementById("warforgedSubraces").style.visibility = "hidden";
    document.getElementById("avenSubraces").style.visibility = "hidden";
    document.getElementById("merfolkSubraces").style.visibility = "hidden";
    document.getElementById("vampireSubraces").style.visibility = "hidden";
    document.getElementById("vedalkenSubraces").style.visibility = "hidden";
    if (document.getElementById("chooseRace").value != "") {
        document.getElementById(document.getElementById("chooseRace").value + "Subraces").style.visibility = "visible";
    }
}

function showSubclass() {
    document.getElementById("artificerSubclasses").style.visibility = "hidden";
    document.getElementById("barbarianSubclasses").style.visibility = "hidden";
    document.getElementById("bardSubclasses").style.visibility = "hidden";
    document.getElementById("bloodhunterSubclasses").style.visibility = "hidden";
    document.getElementById("clericSubclasses").style.visibility = "hidden";
    document.getElementById("druidSubclasses").style.visibility = "hidden";
    document.getElementById("fighterSubclasses").style.visibility = "hidden";
    document.getElementById("monkSubclasses").style.visibility = "hidden";
    document.getElementById("paladinSubclasses").style.visibility = "hidden";
    document.getElementById("rangerSubclasses").style.visibility = "hidden";
    document.getElementById("rogueSubclasses").style.visibility = "hidden";
    document.getElementById("sorcererSubclasses").style.visibility = "hidden";
    document.getElementById("warlockSubclasses").style.visibility = "hidden";
    document.getElementById("wizardSubclasses").style.visibility = "hidden";
    document.getElementById(document.getElementById("chooseClass").value + "Subclasses").style.visibility = "visible";
}

function statSeed() {

}

function checkForPointBuy() {
    var theostatsTotal = stats.str + stats.dex + stats.con + stats.int + stats.wis + stats.cha;
    var confirmPointBuy = confirm("This will take the current total of your stats to buy with (" + theostatsTotal + "). You may not randomize its stats once you select point buy. Are you sure?")
    document.getElementById("pointbuy").checked = false;
    if (pointbuy == false && confirmPointBuy == true) {
        statsTotal = stats.str + stats.dex + stats.con + stats.int + stats.wis + stats.cha;
        document.getElementById("statbox").innerHTML = 0;
        document.getElementById("weakDiv").style.visibility = "hidden";
        points = 0;
        pointbuy = true;
        document.getElementById("chaDown").style.visibility = "visible";
        document.getElementById("strUp").style.visibility = "visible";
    }
}

function sumArray(array) {
    for (
        var
            index = 0, // The iterator
            length = array.length, // Cache the array length
            sum = 0; // The total amount
        index < length; // The "for"-loop condition
        sum += array[index++] // Add number on each iteration
    );
    return sum;
}

function checkForRandom() {
    points = 0;
    for (x = 0; x < 6; x++) {
        var statsdice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        statsdice.sort();
        console.log(statsdice);
        statsdice.shift();
        var result = sumArray(statsdice);
        console.log(result);
        switch (x) {
            case 0:
                stats.str = result;
                break;
            case 1:
                stats.dex = result;
                break;
            case 2:
                stats.con = result;
                break;
            case 3:
                stats.int = result;
                break;
            case 4:
                stats.wis = result;
                break;
            case 5:
                stats.cha = result;
                break;
        }
    }
    document.getElementById("str").innerHTML = stats.str;
    document.getElementById("dex").innerHTML = stats.dex;
    document.getElementById("con").innerHTML = stats.con;
    document.getElementById("int").innerHTML = stats.int;
    document.getElementById("wis").innerHTML = stats.wis;
    document.getElementById("cha").innerHTML = stats.cha;
}

function changeStat(move) {
    switch (move) {
        case 'strUp':
            if (points > 0) {
                stats.str++;
                points--;
                document.getElementById("str").innerHTML = stats.str;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'strDown':
            if (stats.str > 0) {
                stats.str--;
                points++;
                document.getElementById("str").innerHTML = stats.str;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'dexUp':
            if (points > 0) {
                stats.dex++;
                points--;
                document.getElementById("dex").innerHTML = stats.dex;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'dexDown':
            if (stats.dex > 0) {
                stats.dex--;
                points++;
                document.getElementById("dex").innerHTML = stats.dex;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'conUp':
            if (points > 0) {
                stats.con++;
                points--;
                document.getElementById("con").innerHTML = stats.con;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'conDown':
            if (stats.con > 0) {
                stats.con--;
                points++;
                document.getElementById("con").innerHTML = stats.con;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'intUp':
            if (points > 0) {
                stats.int++;
                points--;
                document.getElementById("int").innerHTML = stats.int;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'intDown':
            if (stats.int > 0) {
                stats.int--;
                points++;
                document.getElementById("int").innerHTML = stats.int;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'wisUp':
            if (points > 0) {
                stats.wis++;
                points--;
                document.getElementById("wis").innerHTML = stats.wis;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'wisDown':
            if (stats.wis > 0) {
                stats.wis--;
                points++;
                document.getElementById("wis").innerHTML = stats.wis;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'chaUp':
            if (points > 0) {
                stats.cha++;
                points--;
                document.getElementById("cha").innerHTML = stats.cha;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
        case 'chaDown':
            if (stats.cha > 0) {
                stats.cha--;
                points++;
                document.getElementById("cha").innerHTML = stats.cha;
                document.getElementById("statbox").innerHTML = points;
            }
            break;
    }
}

var mode = 'points';

function switchModes() {
    if (mode == 'dice') {
        mode = 'points';
        document.getElementsByClassName("switchNub")[0].style.top = "62px";
        document.getElementsByClassName("statbox")[0].innerHTML = points;
        document.getElementsByClassName("statbox")[0].style.fontSize = "50px";
        document.getElementById("dumpButton").style.visibility = "visible";
        document.getElementsByClassName("statbox")[0].removeAttribute("onclick");
    } else if (mode == 'points') {
        mode = 'dice';
        document.getElementsByClassName("switchNub")[0].style.top = "43px";
        document.getElementsByClassName("statbox")[0].innerHTML = "ROLL";
        document.getElementsByClassName("statbox")[0].setAttribute("onclick", "checkForRandom()");
        document.getElementsByClassName("statbox")[0].style.fontSize = "20px";
        document.getElementById("dumpButton").style.visibility = "hidden";
    }
}

function subclassChange(change) {

}

function subraceChange(race) {
    var subrace = document.getElementById(race + "Subraces").value;
    racesCheck = Object.keys(raceBonuses);
    if (document.getElementById(race + "Subraces").value == race || typeof(document.getElementById(race + "Subraces").value) != undefined) {
        document.getElementById("racialStrBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][0]);
        document.getElementById("racialDexBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][1]);
        document.getElementById("racialConBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][2]);
        document.getElementById("racialIntBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][3]);
        document.getElementById("racialWisBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][4]);
        document.getElementById("racialChaBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][5]);
    } else {
        document.getElementById("racialStrBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][0]) + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(subrace)][1][0]);
        document.getElementById("racialDexBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][1]) + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(subrace)][1][1]);
        document.getElementById("racialConBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][2]) + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(subrace)][1][2]);
        document.getElementById("racialIntBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][3]) + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(subrace)][1][3]);
        document.getElementById("racialWisBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][4]) + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(subrace)][1][4]);
        document.getElementById("racialChaBonus").innerHTML = "+" + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(race)][1][5]) + parseInt(Object.entries(raceBonuses)[racesCheck.indexOf(subrace)][1][5]);
    }
}


function pullAllStatsOut() {
    points = points + stats.str + stats.dex + stats.con + stats.int + stats.wis + stats.cha;
    stats.str = 0;
    stats.dex = 0;
    stats.con = 0;
    stats.int = 0;
    stats.wis = 0;
    stats.cha = 0;
    document.getElementById("str").innerHTML = stats.str;
    document.getElementById("dex").innerHTML = stats.dex;
    document.getElementById("con").innerHTML = stats.con;
    document.getElementById("int").innerHTML = stats.int;
    document.getElementById("wis").innerHTML = stats.wis;
    document.getElementById("cha").innerHTML = stats.cha;
    document.getElementById("statbox").innerHTML = points;


    mode = 'points';
    document.getElementsByClassName("switchNub")[0].style.top = "62px";
    document.getElementsByClassName("statbox")[0].innerHTML = points;
    document.getElementsByClassName("statbox")[0].style.fontSize = "50px";
    document.getElementById("dumpButton").style.visibility = "visible";
    document.getElementsByClassName("statbox")[0].removeAttribute("onclick");
}

var extended = false;
var optionmode = "";

function chooseRace() {
  if (extended == false) {
    extended = true;
    optionmode = "race";
    document.getElementById("option0").style.visibility = "visible";
    document.getElementById("option1").style.visibility = "visible";
    document.getElementById("option2").style.visibility = "visible";
    document.getElementById("option3").style.visibility = "visible";
    document.getElementById("option4").style.visibility = "visible";
    document.getElementById("option7").style.visibility = "visible";
    document.getElementById("option8").style.visibility = "visible";
    document.getElementById("option9").style.visibility = "visible";
    document.getElementById("option10").style.visibility = "visible";
    document.getElementById("option11").style.visibility = "visible";
  } else if (extended == true) {
    extended = false
    optionmode = "";
    document.getElementById("option0").style.visibility = "hidden";
    document.getElementById("option1").style.visibility = "hidden";
    document.getElementById("option2").style.visibility = "hidden";
    document.getElementById("option3").style.visibility = "hidden";
    document.getElementById("option4").style.visibility = "hidden";
    document.getElementById("option5").style.visibility = "hidden";
    document.getElementById("option6").style.visibility = "hidden";
    document.getElementById("option7").style.visibility = "hidden";
    document.getElementById("option8").style.visibility = "hidden";
    document.getElementById("option9").style.visibility = "hidden";
    document.getElementById("option10").style.visibility = "hidden";
    document.getElementById("option11").style.visibility = "hidden";
    document.getElementById("option12").style.visibility = "hidden";
    document.getElementById("option13").style.visibility = "hidden";
  }
}

function chooseClass() {
  if (extended == false) {
    extended = true;
    optionmode = "class";
    document.getElementById("option0").style.visibility = "visible";
    document.getElementById("option1").style.visibility = "visible";
    document.getElementById("option2").style.visibility = "visible";
    document.getElementById("option3").style.visibility = "visible";
    document.getElementById("option4").style.visibility = "visible";
    document.getElementById("option5").style.visibility = "visible";
    document.getElementById("option6").style.visibility = "visible";
    document.getElementById("option7").style.visibility = "visible";
    document.getElementById("option8").style.visibility = "visible";
    document.getElementById("option9").style.visibility = "visible";
    document.getElementById("option10").style.visibility = "visible";
    document.getElementById("option11").style.visibility = "visible";
    document.getElementById("option12").style.visibility = "visible";
    document.getElementById("option13").style.visibility = "visible";
  } else if (extended == true) {
    extended = false;
    optionmode = "";
    document.getElementById("option0").style.visibility = "hidden";
    document.getElementById("option1").style.visibility = "hidden";
    document.getElementById("option2").style.visibility = "hidden";
    document.getElementById("option3").style.visibility = "hidden";
    document.getElementById("option4").style.visibility = "hidden";
    document.getElementById("option5").style.visibility = "hidden";
    document.getElementById("option6").style.visibility = "hidden";
    document.getElementById("option7").style.visibility = "hidden";
    document.getElementById("option8").style.visibility = "hidden";
    document.getElementById("option9").style.visibility = "hidden";
    document.getElementById("option10").style.visibility = "hidden";
    document.getElementById("option11").style.visibility = "hidden";
    document.getElementById("option12").style.visibility = "hidden";
    document.getElementById("option13").style.visibility = "hidden";
    }
}

function choose(option) {
    document.getElementById("option0").style.visibility = "hidden";
    document.getElementById("option1").style.visibility = "hidden";
    document.getElementById("option2").style.visibility = "hidden";
    document.getElementById("option3").style.visibility = "hidden";
    document.getElementById("option4").style.visibility = "hidden";
    document.getElementById("option5").style.visibility = "hidden";
    document.getElementById("option6").style.visibility = "hidden";
    document.getElementById("option7").style.visibility = "hidden";
    document.getElementById("option8").style.visibility = "hidden";
    document.getElementById("option9").style.visibility = "hidden";
    document.getElementById("option10").style.visibility = "hidden";
    document.getElementById("option11").style.visibility = "hidden";
    document.getElementById("option12").style.visibility = "hidden";
    document.getElementById("option13").style.visibility = "hidden";
    if (optionmode = "class") {
      switch (option) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
      }
    }
    if (optionmode = "race") {
      switch (option) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
      }
    }

  extended = false;
  optionmode = "";
}
