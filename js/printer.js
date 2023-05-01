function printIterations(iterations,minterm,dontcare) {
  var terminos = minterm.concat(dontcare);
  var numt = Math.ceil(Math.log2(terminos[terminos.length-1]))
  terminos.sort((a, b)=> a-b);
  console.log("imprimendo terminos",terminos);
  var output = `<div class="col" >
    <h2>Primera parte</h2>
  `;

  for (var it of iterations){
    var contador = 0
    output +=
    `
      <table class="table">
      <thead>
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
      for (var t of gp){
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
        `<tr><td style="border-bottom: 5px solid #ccc;" colspan="4"></td></tr>`

      }
      output +=
      `  </tbody>
      </table>`;
    }


  output += `</div>`;

  document.getElementById('solution').innerHTML = output
  
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
