function success(pos){
  const coords = pos.coords.toJSON()

  
  const elem = document.getElementById("position");
  elem.append("TS: " + pos.timestamp + ", " + "Coordinates: " + JSON.stringify(coords));}

navigator.geolocation.getCurrentPosition(success);
