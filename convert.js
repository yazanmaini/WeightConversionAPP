document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbs').addEventListener('input', function (e) {
  document.getElementById('output').style.visibility = 'visible';
  var lb = e.target.value;
  document.getElementById('gmOutput').innerHTML = lb/0.0022046;
  document.getElementById('kgOutput').innerHTML = lb*0.45359237;
  document.getElementById('ozOutput').innerHTML = lb*16;
})
