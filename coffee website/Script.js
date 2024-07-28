let randomNumber = math.random();
  let result = '';
  if ( computerMove === 'rock'){
result = 'tie';
  }
  else if ( computerMove === 'paper'){
  result = 'you win';
  
  }
  else if (computerMove === 'scissors'){
  result  = 'you lose';
  }
 alert(`computer picked rock. you picked ${computerMove}. ${result});
  "
