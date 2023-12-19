function getValueById(inputId){
  return document.getElementById(inputId).value;
}

document.getElementById('btn-submit').addEventListener('click', function(){
 const email = getValueById('email');
 const password = getValueById('password');

 if(email === "inbx.mahbub@gmail.com" && password === "12345"){
  window.location.href = "./statement.html";
 }
})