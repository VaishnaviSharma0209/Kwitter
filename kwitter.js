var firebaseConfig = {
    apiKey: "AIzaSyAGh4lOzkSJ923XyaoW5QYUFIqbnvxe-BA",
    authDomain: "kwitter-61ab7.firebaseapp.com",
    projectId: "kwitter-61ab7",
    storageBucket: "kwitter-61ab7.appspot.com",
    databaseURL: "https://kwitter-61ab7-default-rtdb.firebaseio.com/",
    messagingSenderId: "204419466756",
    appId: "1:204419466756:web:3b28356594e90bb9f11751"
  };

  function User(){
    var user_name=document.getElementById("user_name").value;
    localStorage.setItem("User name",user_name);
    window.location="kwitter_room.html";
  }