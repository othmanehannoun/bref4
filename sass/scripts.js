function validate(){
  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var cin = document.getElementById("cin").value;
  var phone = document.getElementById("phone").value;
  var date1 = document.getElementById("date1").value;
  var date2 = document.getElementById("date2").value;
  var email = document.getElementById("email").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  // ---------validation Name
  var text;
  if(!name.match(/^[A-Z]/)){
    text = "champ de nom n'pas valide";
    error_message.innerHTML = text;
    return false;
  }
   // ----validation Date de naissance
  if(!date.match(/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/)){
    text = "champ de date de naissance n'pas valide";
    error_message.innerHTML = text;
    return false;
  }
  // ----validation cih
  if(!cin.match(/^[A-Z]{2}[0-9]{5}$/)){
    text = "champ de CIN n'pas valide";
    error_message.innerHTML = text;
    return false;
  }

  // ---------validation Phone
  if(isNaN(phone) || phone.length != 10){
    text = "champ de telephone n'pas valide";
    error_message.innerHTML = text;
    return false;
  }
 
  // ---------validation date
  if(!date1.match(/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/)){
    text = "champ de date depare n'pas valide";
    error_message.innerHTML = text;
    return false;
  }
  if(!date2.match(/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/)){
    text = "champ de date d'arrivée n'pas valide";
    error_message.innerHTML = text;
    return false;
  }
  
  // ---------validation Email
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    text = "champ de email n'pas valide";
    error_message.innerHTML = text;
    return false;
  }

 
  // if(message.length <= 140){
  //   text = "Please Enter More Than 140 Characters";
  //   error_message.innerHTML = text;
  //   return false;
  // }
  else{
    window.open("res-cart.html");
  return true;
}
}