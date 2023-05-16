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
  
  document.getElementById('minterminos').disabled = true
  if(btnMinimizar.innerHTML == "Minimizar"){
    btnMinimizar.innerHTML = "Nueva ecuación";
  } else {
    window.location.reload()
  }

  let minterm = []
  let dontcare = []

  if (input_minterm.length != 0 )
    minterm = input_minterm.split(",").map(Number);

  // if (input_dontcare.length != 0)
  //   dontcare = input_dontcare.split(",").map(Number);

  if(minterm.length > 0){
    if(minterm.length <= 2 && 
        (minterm[0] == 1 && minterm[1] == 0 || minterm[0] == 0 && minterm[1] == 1)
      ) {
        console.log('entra');
        if(minterm[0] == 0 && minterm[1] == 1) {
          var Res = 'A' + "\u0305" + 'B';
          printSolRep([Res])
        } else {
          var Res = 'A' + 'B' + "\u0305";
          printSolRep([Res])
        }
    } else {
      quineMcCluskey(minterm,dontcare);
    }
  } else {
    alert("Debe haber por lo menos 1 término");
  }

}

var navBar = document.getElementById('Nav__Bar');
var imgLogo = document.getElementById('imgLogo');

window.onscroll = function() {
    var scrollVal = window.scrollY;
    
    if (scrollVal > 0) {
        navBar.classList.remove('bg_Navbar');
        navBar.classList.add('bg_NavBar_Scroll');
        imgLogo.src="img/UAT-Logotipo-Blanco.svg";

    } else {
        navBar.classList.remove('bg_NavBar_Scroll');
        navBar.classList.add('bg_Navbar');
        imgLogo.src="img/UAT-logo.png";
    }
}