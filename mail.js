const firebaseConfig = {
    apiKey: "AIzaSyAj_5wtzfPMc7s4IqQvx__3yBk0VZvqNN0",
    authDomain: "coffee-heaven-91315.firebaseapp.com",
    databaseURL: "https://coffee-heaven-91315-default-rtdb.firebaseio.com",
    projectId: "coffee-heaven-91315",
    storageBucket: "coffee-heaven-91315.appspot.com",
    messagingSenderId: "275576929317",
    appId: "1:275576929317:web:3fdd9cc8881421a69fd3cc"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  //referencing database
  var coffeeHeavenDB = firebase.database().ref("coffeeHeaven");

  document.getElementById("table").addEventListener("submit",submitForm);

  function submitForm(e){
      e.preventDefault();

      var name = getElementVal('name');
      var number = getElementVal('number');
      var guests = getElementVal('guests');
    //   console.log(name,number,guests);
      saveMessage(name,number,guests);
      //enabling alert
      document.querySelector(".alert").style.display="block";
      //alert disappears after 3sec
      setTimeout(()=>{
          document.querySelector(".alert").style.display="none";
      },3000);
      //reset the table
      document.getElementById("table").reset();
  }
  
  const saveMessage=(name,number,guests)=>{
       var newTable = coffeeHeavenDB.push();

       newTable.set({
           name: name,
           number: number,
           guests: guests,
       });
  }
  const getElementVal = (id)=>{
      return document.getElementById(id).value;
  }