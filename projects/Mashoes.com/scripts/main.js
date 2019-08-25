    //Nav Side
function openNav() {
    document.getElementById("nav-side").style.width = "44vw";
    document.getElementById("menu-icon").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("nav-side").style.width = "0";
    document.getElementById("menu-icon").style.display = "initial";
  }

  // Cart Side

function openNavCart() {
    document.getElementById("cart-side").style.width = "23vw";
    document.getElementById("cart").style.display = "none";
  }

  function closeNavCart() {
    document.getElementById("cart-side").style.width = "0";
    document.getElementById("cart").style.display = "initial";
  }