$(document).ready(function() {
  $('form#triangleInput').submit(function(event) {
    event.preventDefault();
    console.log('Begin!');
    const side1 = parseInt($('input#side1').val());
    const side2 = parseInt($('input#side2').val());
    const side3 = parseInt($('input#side3').val());

    if (side1 === side2 && side1 === side3) {
      $('#equilateral').show();
    } else if (side1 === side2 && side1 !== side3 && side2 !== side3 || side1 === side3 && side1 !== side2 && side3 !== side2 || side2 === side3 && side1 !== side3 && side2 !== side1) {
      $('#isosceles').show();
    } else if (side1 !== side2 && side1 !== side3) {
      $('$#scalene').show();
    } 
    else {
      $('#none');
    }
    
  });
});