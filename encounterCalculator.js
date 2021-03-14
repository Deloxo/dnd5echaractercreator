function loadDoc(request) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("result").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://www.dnd5eapi.co/api/" + request, true);
  xhttp.send();
}

function addMob() {
  let row = document.createElement("TR");
  let cell = document.createElement("TD");
  let table = document.getElementsByTagName("TBODY")[0];
  let dropdown = document.createElement("SELECT");
  let typeChoice = document.createElement("OPTION");
  let typeText = document.createTextNode("PC/NPC");
  var input = document.createElement("INPUT");
  row.setAttribute("id", "creature" + document.getElementsByTagName("TR").length.toString());
  dropdown.setAttribute("id", "typeCheck" + document.getElementsByTagName("TR").length.toString());
  input.setAttribute("id", "initMod" + document.getElementsByTagName("TR").length.toString());
  typeChoice.setAttribute("value", "player");
  table.appendChild(row);
  row.appendChild(cell);
  cell.innerHTML = "&nbsp;Type:&nbsp;&nbsp;&nbsp;&nbsp;";
  cell.appendChild(dropdown);
  dropdown.appendChild(typeChoice);
  typeChoice.appendChild(typeText);
  typeChoice = document.createElement("OPTION");
  typeChoice.setAttribute("value", "monster");
  dropdown.appendChild(typeChoice);
  typeText = document.createTextNode("Monster");
  typeChoice.appendChild(typeText);
  cell = document.createElement("TD");
  row.appendChild(cell);
  cell.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Initiative Modifier";
  breakTag = document.createElement("BR");
  cell.appendChild(breakTag);
  cell.appendChild(input);
}

function initCalc() {
  var creatureCount = 0;
  for (h = 0; h < document.getElementsByTagName("TR").length; h++) {
    if (document.getElementById("typeCheck" + h.toString()).value == "player") {
      creatureCount += 1;
      console.log("player");
    }
    if (document.getElementById("typeCheck" + h.toString()).value == "monster") {
      creatureCount += 1;
      console.log("monster");
    }
  }

  console.log(rollDice(creatureCount + 'd20', 0, 'odds'));
}

function rollDice(input, mod, type) {
  var distributions = {
    "data":[],
    "odds":[]
  };
  var diceCount = parseInt(input.slice(0,input.search("d")));
  var sideCount = parseInt(input.slice(input.search("d")+1,input.length+1));
  var result;
  for (var f = 0; f < Math.pow(sideCount,diceCount); f++) {
    result = [];
    var number = f.toString(sideCount);
    number = number.padStart(diceCount, '0');
    for (var e = 0; e < diceCount; e++) {
      result.push(parseInt(number.slice(e,e+1),sideCount)+1);
    }
    distributions.data.push(result);
  }
  for (w = 0; w < sideCount*diceCount+(diceCount+mod); w++) {
    distributions.odds.push(0);
  }
  for (r = 0; r < Math.pow(sideCount,diceCount); r++) {
    result = 0;
    for (var e = 0; e < diceCount; e++) {
      result += distributions.data[r][e];
    }
    distributions.odds[result + mod] += 1 / Math.pow(sideCount,diceCount);
  }
  if (type == 'array') {
    return distributions.data;
  }
  if (type == 'odds') {
    return distributions.odds;
  }
}
