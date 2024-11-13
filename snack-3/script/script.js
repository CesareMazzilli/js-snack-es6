function estraiSottoArray() {
    const arrayInput = document.getElementById("arrayInput").value;
    const a = parseInt(document.getElementById("aInput").value);
    const b = parseInt(document.getElementById("bInput").value);
  
    const array = arrayInput.split(',').map(Number);
  
    if (a >= b || a < 0 || b > array.length) {
      document.getElementById("result").textContent = "Errore: Assicurati che a < b e che b sia entro la lunghezza dell'array.";
      return;
    }
  
    const resultArray = [];
    for (let i = a; i < b; i++) {
      resultArray.push(array[i]);
    }
  
    document.getElementById("result").textContent = "[" + resultArray.join(", ") + "]";
  }
  