const loginElement = document.querySelector('#login-form');
const contentElement = document.querySelector("#content-sign-in");
const userDetailsElement = document.querySelector('#user-details');
const authBarElement = document.querySelector("#authentication-bar");

// Elements for sensor readings

const emgElement = document.getElementById("emg");

//var dbPathLed;

// MANAGE LOGIN/LOGOUT UI
const setupUI = (user) => {
  if (user) {
    //toggle UI elements
    loginElement.style.display = 'none';
    contentElement.style.display = 'block';
    authBarElement.style.display ='block';
    userDetailsElement.style.display ='block';
    userDetailsElement.innerHTML = user.email;

    // get user UID to get data from database
    // var uid = user.uid;
    // console.log(uid);

    // Database paths (with user UID)
    
    var dbPathemg = "emgData";
  


    // Database references
   
    var dbRefemg = firebase.database().ref().child(dbPathemg);


   // var dbPathLed = firebase.database().ref().child(dbPathLed);

    


 // Update page with new readings
dbRefemg.on('value', snap => {
  console.log("inside dbReemg");
  emgElement.innerText = snap.val().toFixed(2);
  var x = (new Date()).getTime(),
  y= parseFloat(snap.val().toFixed(2));
console.log("x and y", x,y)
  if(charte.series[0].data.length > 40) {
    charte.series[0].addPoint([x, y], true, true, true);
  } else {
    charte.series[0].addPoint([x, y], true, false, true);
  }
});

    /*dbRefHum.on('value', snap => {
      humElement.innerText = snap.val().toFixed(2);
    });

    dbRefPres.on('value', snap => {
      presElement.innerText = snap.val().toFixed(2);
    });*/

  // if user is logged out
  } else{
    // toggle UI elements
    loginElement.style.display = 'block';
    authBarElement.style.display ='none';
    userDetailsElement.style.display ='none';
    contentElement.style.display = 'none';
  }
}
/*function toggleLed() {
  console.log("Toggle");
  if (ledElement.checked) 
  {
    console.log("led ON");
    firebase.database().ref(dbPathLed).set("ON");
  }
  else{
    console.log("led OFF");
    firebase.database().ref(dbPathLed).set("OFF");
  }
}*/



setInterval(function ( ) {
 
  var x = (new Date()).getTime(),
  y=0;
     // y = parseFloat(this.responseText);
  //console.log(this.responseText);
  if(charte.series[0].data.length > 40) {
    charte.series[0].addPoint([x, y], true, true, true);
  } else {
    charte.series[0].addPoint([x, y], true, false, true);
  }



}, 1000 ) ;
