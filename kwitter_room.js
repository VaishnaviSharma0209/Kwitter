var firebaseConfig = {
      apiKey: "AIzaSyAGh4lOzkSJ923XyaoW5QYUFIqbnvxe-BA",
      authDomain: "kwitter-61ab7.firebaseapp.com",
      projectId: "kwitter-61ab7",
      storageBucket: "kwitter-61ab7.appspot.com",
      databaseURL: "https://kwitter-61ab7-default-rtdb.firebaseio.com/",
      messagingSenderId: "204419466756",
      appId: "1:204419466756:web:3b28356594e90bb9f11751"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("User name")
    document.getElementById("welcome").innerHTML="Welcome " + user_name + "!";
    function Addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "Add room name"
          });
          localStorage.setItem("Room Name",room_name);
          //window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirct(this.id)'>#"+Room_names+" </div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirct(name){
      console.log(name);
      localStorage.setItem("Room Name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}