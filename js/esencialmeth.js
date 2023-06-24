/**
  Esta función devuelve todas las iteraciones de
  la primera parte del metodo de quine McCluskey
*/
function getIterations(minterm, dontcare,numVariablesSelect) {
  var iterations = [[]];
  var numt = Math.ceil(Math.log2(minterm[minterm.length - 1])) + 1;

  for (var i = 0; i < minterm.length; i++) {
    var term = new Termino();
    term.add_mp([minterm[i]]);
    iterations[0].push(term);
  }

  for (var i = 0; i < numt; i++) {
    iterations.push([]);
  }

  for (var i = 0; i < iterations.length - 1; i++) {
    for (var j = 0; j < iterations[i].length - 1; j++) {
      for (var k = j + 1; k < iterations[i].length; k++) {
        if (iterations[i][j].mp.length === i && iterations[i][k].mp.length === i) {
          var diffCount = 0;
          var diffIndex = -1;

          for (var l = 0; l < iterations[i][j].mp.length; l++) {
            if (iterations[i][j].mp[l] !== iterations[i][k].mp[l]) {
              diffCount++;
              diffIndex = l;
            }
          }

          if (diffCount === 1) {
            var term = new Termino();
            term.add_mp(iterations[i][j].mp.slice());
            term.add_fp(iterations[i][j].fp.slice());
            term.add_mp(iterations[i][k].mp.slice());
            term.add_fp(iterations[i][k].fp.slice());
            term.mp.splice(diffIndex, 1, "_");
            term.used = true;
            iterations[i + 1].push(term);
            iterations[i][j].used = true;
            iterations[i][k].used = true;
          }
        }
      }
    }
  }

  deleteEmptyTerms(iterations[iterations.length - 1]);

  return iterations;
}

function searchForIP(iterations) {
  let ipe = [];
  for (var it of iterations)
    for (var gp of it) if(gp !=null)
      for (var t of gp) if (!isInIPE(ipe,t) && !t.used)
          ipe.push(t)
  return ipe;
}

function deleteDontCare(ip,dontcare){
  var ip_wdc = ip.slice(0)

  for (var i = 0; i < dontcare.length; i++)
    for (let t of ip_wdc)
      if(t.mp.indexOf(dontcare[i])!= -1)
        t.mp.splice( t.mp.indexOf(dontcare[i]), 1 );

  deleteEmptyTerms(ip_wdc);

  return ip_wdc;
}

function searchForIPE(implicantes,minterms) {

  all = []
  contadores = []

  for (let i = 0; i < minterms.length; i++)
    contadores.push(0)

  for (ip of implicantes)
    for (i of ip.mp)
      all.push(i)

  all.sort((a,b)=>a-b)

  for (let i = 0; i< minterms.length; i++)
    for (j of all)
      if (minterms[i] == j)
        contadores[i]++

  mint_esenciales = []
  for (let i = 0; i < contadores.length; i++)
    if (contadores[i] == 1)
      mint_esenciales.push(minterms[i])

  console.log("mines",mint_esenciales);

  ipe = []
  for (mt of mint_esenciales)
    for (let i = 0; i< implicantes.length; i++)
      if(searchMinterm(implicantes[i].mp,mt))
        if(!isAlreadyInIPE(implicantes[i].mp,ipe))
          ipe.push(implicantes[i])

  console.log("ipe",ipe);

  return ipe;

}

function searchForNIP(implicantes,minterms,ipe) {
  nip = []

  for (a of implicantes) {
    nip.push(a)
  }

  for (impl of implicantes)
    for (a of ipe)
      if(arraysEqual(impl.mp,a.mp))
        nip.splice(nip.indexOf(impl),1)

  console.log("nip",nip);

  return nip;
}

function getIPEyIPS(minterms,implicantes,ipe,nipe) {

  let cp_nipe = [];

  for (m of nipe) {
    cp_nipe.push(cloneObject(m))
  }

  /*A los terminos que no son imp. primos esenciales, se les
   quita todo aquel termino que tenga este en los ipe y en ellos mismos.
  */
  for (imp of ipe)
    for (a of imp.mp)
      for (imp2 of nipe) {
          if(searchMinterm(imp2.mp,a)) {
            //console.log("el ipe ",a,"esta en ",imp2);
            let index =imp2.mp.indexOf(a)
             if (index > -1)
               imp2.mp.splice(index, 1);
          }
      }

  console.log("nipe",nipe);
  /*
    SE ANALIZAN TRES CASO BASE PRINCIPALES
    * SI LONGITUD ES CERO (DE TODOS)
    * SI LONGITUD ES LA MISMA Y SUS ELEMENTOS SON IGUALES
    * SI LONGITUD ES DIF.
  */

  solv1 = []

  if (!allarraysEmpty(nipe)) {
     repeatedT=repeatedElements(nipe)
     for (r of repeatedT)
       for (m of nipe)
        if (searchMinterm(m.mp,r)){
          let index =m.mp.indexOf(a)
           if (index > -1)
             m.mp.splice(index, 1);
        }
    if (allarraysEmpty(nipe)){
      // regresar el que sea como la respuesta
      console.log("La minimizacion es el que sea!");
      solv1.push(cp_nipe[0])
    }else {
      for (let j = 0; j < nipe.length; j++)
        if (nipe[j].length > 0)
          solv1.push(cp_nipe[j])
    }
  }
  console.log("solv1!",solv1);

  complete_solv = ipe
  for (s of solv1) {
    complete_solv.push(s)
  }

  console.log("solucion completa",complete_solv);

  return complete_solv

}
