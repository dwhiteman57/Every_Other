function toWeirdCase(string) {
  for (i=0; i < string.length; i+=2) {
     string = string.substr(0, i) + string[i].toUpperCase() + string.substr(i + 1);
  }
  return string;
}



function toWeirdCase(string) {
  return string.split(' ').map(function(phrase) {
    return phrase.split('').map(function(char, index) {
      return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
  }).join(' ');
}




console.log( toWeirdCase('This'), 'ThIs'  )
console.log( toWeirdCase('is'), 'Is'  )
console.log( toWeirdCase('This is a test'), 'ThIs Is A TeSt'  )



/* Working on additional approaches

function toWeirdCase(string) {
  for (i=0; i < string.length; i+=2)
    if(string === ' ') {
      continue;
    } else if(string !== ' ') {
        string = string.substr(0, i) + string[i].toUpperCase() + string.substr(i + 1);
    }
  return string;
}

*/
