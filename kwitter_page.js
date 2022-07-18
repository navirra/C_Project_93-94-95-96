//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCviJNW6ip0gAFo6BgWmKM_fofdrqGxF-o",
      authDomain: "kwitter-81777.firebaseapp.com",
      databaseURL: "https://kwitter-81777-default-rtdb.firebaseio.com",
      projectId: "kwitter-81777",
      storageBucket: "kwitter-81777.appspot.com",
      messagingSenderId: "282200643082",
      appId: "1:282200643082:web:84bad76c5cb0956b4631f3"
    };
    
    // Initialize Firebase  
    firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database.ref(room_name).push({
      name : user_name,
      message : msg,
      likes : 0
});
    document.getElementById("msg").value = "";
    }




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();





function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

