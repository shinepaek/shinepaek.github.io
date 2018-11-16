
var name = localStorage.getItem('customeName');
if (name) {
  $("#myName").html(name);
}

$("#changeName").click(function() {
  var newName = prompt("What's Your New Name?");
  if (newName) {
    $("#myName").html(newName);
    localStorage.setItem('customName', newName);
  }
}
