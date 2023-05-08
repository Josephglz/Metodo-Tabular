function printSolution(solution,minterm,dontcare) {
  var terminos = minterm.concat(dontcare);
  var numt = Math.ceil(Math.log2(terminos[terminos.length-1]))
  var repsolution = []

  terminos.sort((a, b)=> a-b);

  var output = `<div class="col" ><h2>Solución Final</h2>`;

  output += `
    <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">PI</th>
        <th scope="col">Minimización</th>
        <th scope="col">Variables</th>
      </tr>
    </thead>
    <tbody>
  `;

  for (s of solution) {
    var bin = s.mp[0].toString(2).padStart(numt, '0')
    var pos_fp = changeFPtoPos(s.fp)
    var nbin = changeBinNumber(bin,pos_fp)
    var lrep = getLogicRep(nbin)
    repsolution.push(lrep)
    output +=
    `<tr>
        <th scope="row">`+s.mp+`</th>
        <td>`+nbin+`</td>
        <td>`+lrep+`</td>
      </tr>`;
  }

  output +=
  `  </tbody>
   </table>`;

  output += `</div>`;

  document.getElementById('solution3').innerHTML = output

  return repsolution;

}

function getLogicRep(nbin) {
  var variables = ["A","B","C","D","E","F","G","H","I","J","K","L"]

  nbin_str = nbin.split("")

  var rep =[]

  for (let i = 0; i< nbin_str.length; i++) {
    if(nbin_str[i] == '0')
      rep.push(variables[i] + "\u0305")

    else if (nbin_str[i] == '1')
      rep.push(variables[i])
  }


  return rep.join("");
}

function printSolRep(repsolution) {
  console.log(repsolution);
  var output = `<div class="row solution-container container mx-3">`;
  output += `<h3 class="function-label pr-2" >f =</h3> <h4>`;

  for (let i = 0; i< repsolution.length; i++) {
    output += repsolution[i]
    if (i < repsolution.length - 1 )
      output += "+";
  }

  output += ` </h4></div>`;
  document.getElementById('solution4').innerHTML = output
}
