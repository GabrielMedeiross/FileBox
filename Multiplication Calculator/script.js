function gerar() {
    var num = document.querySelector("#number").value;
    var res = document.querySelector("#resultado");
  
    var numResultado = Number(num);
  
    if (num == "") {
      alert("Insira um número");
    } else {
      res.innerHTML = "";
      for (var i = 1; i <= 10; i++) {
        let item = document.createElement("option");
        item.text = `${i} x ${numResultado} = ${num * i}`;
        item.value = `res${i}`;
        res.appendChild(item);
      }
    }
  }