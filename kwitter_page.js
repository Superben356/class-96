//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDr7JP1AMTp8mQRiHSlBOVyZTSDR7xWOP4",
      authDomain: "kwitter-43e55.firebaseapp.com",
      databaseURL: "https://kwitter-43e55-default-rtdb.firebaseio.com",
      projectId: "kwitter-43e55",
      storageBucket: "kwitter-43e55.appspot.com",
      messagingSenderId: "585287735876",
      appId: "1:585287735876:web:df1adad71cc2098c227a11"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function send()
{
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0
   })

   document.getElementById("msg").value = "";

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }



getData();
