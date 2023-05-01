var btnMinimizar = document.getElementById('btnMinimizar');
btnMinimizar.addEventListener('click', function (e) {
  e.preventDefault();
  init(e);
});

function init() {
  const input_minterm = document.getElementById('minterminos').value;
  // const input_dontcare = document.getElementById('dontcare').value;
  
  const regex = /^([0-9]{1,2},)*([0-9]{1,2})$/;

  if(!regex.test(input_minterm)){
    alert("Los minterminos deben ser numeros separados por comas");
    return;
  }

  let minterm = []
  let dontcare = []

  if (input_minterm.length != 0 )
    minterm = input_minterm.split(",").map(Number);

  // if (input_dontcare.length != 0)
  //   dontcare = input_dontcare.split(",").map(Number);

  if(minterm.length > 0)
    quineMcCluskey(minterm,dontcare);
  else alert("Debe haber por lo menos 1 término");

}
