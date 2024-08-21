function success(pos){
  console.log("Position" + pos);
  const elem = document.getElementById("position");
  elem.append(pos);}

navigator.geolocation.getCurrentPosition(success);
