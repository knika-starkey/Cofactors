let n = prompt("Введите число");
if (isNaN(n)) alert("n Должно быть числом");
else {
  document.write(n + ": 1");
  for (let k = 2; k <= n; k++) {
    if (n % k == 0) document.write(", " + k);
  }
}
