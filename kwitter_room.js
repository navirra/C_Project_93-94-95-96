
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name+"!";

     function addRoom(){
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding room name"
            });
            localStorage.setItem("room_name" ,room_name);
            window.location="kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_names - "+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML= row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.htm";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}