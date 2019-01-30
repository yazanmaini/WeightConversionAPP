// hide the cards until value is inputed
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbs').addEventListener('input', function(e) {
  document.getElementById('output').style.visibility = 'visible';
  var lb = e.target.value; // input lb value
  document.getElementById('gmOutput').innerHTML = lb/0.0022046; // display converted value to in gm
  document.getElementById('kgOutput').innerHTML = lb*0.45359237; // display converted value to in kg
  document.getElementById('ozOutput').innerHTML = lb*16; // display converted value to in oz
})
