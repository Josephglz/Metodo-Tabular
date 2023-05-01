function searchMinterm(arr,minterm) {
  for (t of arr)
    if (t == minterm)
      return true;
  return false;
}

function isAlreadyInIPE(imp,ipe){
  for (it  of ipe)
    if (arraysEqual(it.mp,imp))
      return true;
  return false;
}

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

function repeatedElements(nipe) {
  all = []
  for (ar of nipe)
    for (a  of ar.mp)
      all.push(a)
  console.log(all);
  let unique = [...new Set(all)];
  console.log("uniques",unique);

  contadores = []
  for (let i = 0; i < unique.length; i++)
    contadores.push(0)

  for (let i = 0; i < unique.length; i++)
    for (a  of all)
      if (unique[i] == a)
       contadores[i]++;

  repeated = []
  for (let i = 0; i < contadores.length; i++)
    if (contadores[i] > 1)
      repeated.push(unique[i])

  return repeated

}

function allarraysEmpty(nipe) {
  for (imp  of nipe)
    if (imp.mp.length > 0)
      return false;
  return true;
}

function searchMinterm(arr,minterm) {
  for (t of arr)
    if (t == minterm)
      return true;
  return false
}

function allSameLen(arr) {
  lens = []
  for (a of arr)
    lens.push(a.length)

  let first = lens[0]
  for (let i = 1; i < lens.length; i++)
    if(first != lens[i])
      return false;

  return true;

}

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

function cloneObject(t){
  new_t = new Termino()
  new_t.fp = t.fp //estos nunca son afectados
  new_t.mp =t.mp.slice()

  return new_t
}
