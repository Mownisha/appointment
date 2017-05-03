$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var desInput = $("input#description").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();

    $(".name").text(nameInput);
    $(".description").text(desInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);

    $("#appoint").show();

    event.preventDefault();
  });
});
