function printIPEyNIP(ipe,nip,minterm,numVariables) {
  var output = `<div class="col" >
    <h2>Segunda parte</h2>
    <h3>Número de variables: ${numVariables}</h3>
    `;

  output +=
  `     <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">PI</th>`;
  for (m of minterm)
    output += `<th scope="col">`+m+`</th>`

  output +=
            `</tr>
          </thead>
          <tbody>`;

  for (ip of ipe) {
    output +=`
              <tr>
                <th scope="row">`+ip.mp+`</th>`;
    for (m of minterm){
      output += ` <td>`;
      if (isMinTinIP(ip.mp,m))
        output += 'X'

      output += `</td>`;
    }
    output +=`</tr>`;
  }
  for (ip of nip) {
    output +=`
              <tr>
                <th scope="row">`+ip.mp+`</th>`;
    for (m of minterm){
      output += ` <td>`;
      if (isMinTinIP(ip.mp,m))
        output += 'X';
      output += `</td>`;
    }
    output +=`</tr>`;
  }

  output += `
          </tbody>
        </table>`;

  output += `</div>`;
  document.getElementById('solution2').innerHTML = output

  solution2.animate([
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

function isMinTinIP(mp,m) {
  for (it of mp){
    if (it == m)
      return true
  }
  return false;
}
