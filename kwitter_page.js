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
    user_name=localStorage.getItem("User name");
    room_name=localStorage.getItem("Room Name");

function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            user_name:user_name,
            Message:msg,
            likes:0,
            unlikes:0
      })
      document.getElementById("message").value="";
}

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         likes=message_data['likes'];
         unlikes=message_data['unlike'];
         user=message_data['user_name'];
         message=message_data['Message'];
         name_tag="<h4>"+user+"<img src='tick.png' class='user_tick'></h4>";
         message_1="<h4 class=message_h4>"+message+"</h4>";
         unlike_btn="<button class='btn btn-warning' id="+firebase_message_id+" onclick='update_down(this.id)' value="+unlikes+"><span class='glyphicon glyphicon-thumbs-down'> Unlikes:"+unlikes+"</span></button><hr>";
         like_btn="<button class='btn btn-success' id="+firebase_message_id+" onclick='update(this.id)' value="+likes+"><span class='glyphicon glyphicon-thumbs-up'> Likes:"+likes+"</span></button><br><br>";
         row=name_tag+message_1+like_btn+unlike_btn;
         document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();

function update(message_id){
      console.log(message_id);
      like=document.getElementById(message_id).value;
      update_like=Number(like)+1;
      console.log(update_like)
      firebase.database().ref(room_name).child(message_id).update({
            likes:update_like
      });
}
function update_down(message_id){
      console.log(message_id);
      unlike=document.getElementById(message_id).value;
      update_unlike=Number(unlike)+1;
      console.log(update_unlike)
      firebase.database().ref(room_name).child(message_id).update({
            unlikes:update_like
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}