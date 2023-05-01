function printIPEyNIP(ipe,nip,minterm) {
  var output = `<div class="col" ><h2>Segunda parte</h2>`;

  output +=
  `     <table class="table">
          <thead>
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

}

function isMinTinIP(mp,m) {
  for (it of mp){
    if (it == m)
      return true
  }
  return false;
}
