export default function showStats() {
  document.getElementById("str").innerHTML = stats.str;
  document.getElementById("dex").innerHTML = stats.dex;
  document.getElementById("con").innerHTML = stats.con;
  document.getElementById("int").innerHTML = stats.int;
  document.getElementById("wis").innerHTML = stats.wis;
  document.getElementById("cha").innerHTML = stats.cha;
}

export default function sumArray(array) {
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
