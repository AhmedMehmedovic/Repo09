// Only change code below this line
function myForLoop1() {
    for (var evenNumbers = 0; evenNumbers < 9; evenNumbers +2) {
        return evenNumbers + 2 ;
    }
}

function myForLoop2() {
    for (var evenInverseNumbers = 10; evenInverseNumbers >= 0; evenInverseNumbers -2) {
      return evenInverseNumbers - 2 ;
    }
}


 myForLoop1();
 myForLoop2();
 console.log(myForLoop1())
 console.log(myForLoop2())
 
 
 // Only change code above this line
 module.exports = {
     myForLoop1,
     myForLoop2
 };