// step-1 add click submit button event haqndelar
document.getElementById('btn-submit').addEventListener('click', function () {
  
  const emailfield = document.getElementById('email-id');
  const email = emailfield.value;
  
  const passowordField = document.getElementById('user-password');
  const password = passowordField.value;
  if (email === 'sontan@bap.com' && password === 'secret'){
    window.location.href = 'bank.html';
}
  else {
  alert('tore ami tejjo sontan ghoshona kore dilam toi amar password vhole gechosh');
  }
});
// step-2 get the email address inside the email input
// always remember to use.value to get text from an input field 