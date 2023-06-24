function printIterations(iterations,minterm,dontcare,numVariables) {
  var terminos = minterm.concat(dontcare);
  var numt = Math.ceil(Math.log2(terminos[terminos.length-1]))
  terminos.sort((a, b)=> a-b);
  console.log("imprimendo terminos",terminos);
  var output = `<div class="col" >
    <h2>Primera parte</h2>
    <h3>Número de variables: ${numVariables}</h3>
    `;

  for (var it of iterations){
    var contador = 0
    output +=
    `
      <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Minimización</th>
          <th scope="col">Pares</th>
          <th scope="col">PF</th>
        </tr>
      </thead>
      <tbody>`;

    for (var gp of it) if(gp !=null){
      contador ++
      for (var t of gp.terms){
        var bin = t.mp[0].toString(2).padStart(numt, '0')
        var pos_fp = changeFPtoPos(t.fp)
        var nbin = changeBinNumber(bin,pos_fp)
        output +=
        `<tr>
            <th scope="row">`+contador+`</th>
            <td>`+nbin+`</td>
            <td>`+t.mp;

            if (t.used)
              output += '&#10004';
            else
              output += '&#x2718';

            output += `</td>
            <td>`+t.fp+`</td>
          </tr>`;
        }
        output +=
        // `<tr><td style="border-bottom: 5px solid #ccc;" colspan="4"></td></tr>`
        `<div style="height: 0.5rem; width: 100%; backgroundColor: #ccc; marginTop: 0.5rem; marginBottom: 0.5rem"></div>`

      }
      output +=
      `  </tbody>
      </table>`;
    }


  output += `</div>`;

  document.getElementById('solution').innerHTML = output

  solution.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], {
    duration: 500,
    iterations: 1,
    easing: "ease-in-out",
    fill: "forwards",
    direction: "alternate"
  });
}

function changeFPtoPos(fp) {
  pos = []
  for (f of fp)
    pos.push(Math.log2(f))
  return pos;
}

function changeBinNumber(bin,pos_fp) {
  var bin_str = bin.split("");
  for (f of pos_fp) {
    bin_str[bin_str.length-1-f] = "_"
  }
  return bin_str.join("")
}
