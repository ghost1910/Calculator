(function() {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");
   
    buttons.forEach(function(button) {
       button.addEventListener("click", function(e) {
          let value = e.target.dataset.num;
          screen.value += value;
       });
    });
 
    equal.addEventListener("click", function(e) {
       if (screen.value === "") {
          screen.value = "";
       } else {
          let expression = screen.value.replace(/[^-()\d/*+.]/g, ''); // Remove invalid characters
          let answer;
          try {
             answer = eval(expression);
          } catch (error) {
             screen.value = "Error";
             return;
          }
          screen.value = answer;
       }
    });
 
    clear.addEventListener("click", function() {
       screen.value = "";
    });
 
    // Addition
    document.querySelector(".btn-add").addEventListener("click", function() {
       screen.value += "+";
    });
 
    // Subtraction
    document.querySelector(".btn-subtract").addEventListener("click", function() {
       screen.value += "-";
    });
 
    // Multiplication
    document.querySelector(".btn-multiply").addEventListener("click", function() {
       screen.value += "*";
    });
 
    // Division
    document.querySelector(".btn-divide").addEventListener("click", function() {
       screen.value += "/";
    });
 })();
 