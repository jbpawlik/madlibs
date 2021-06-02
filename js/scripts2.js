
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const animal1Input = $("input#animal1").val();
    const animalsInput = $("input#animals").val();
    $(".animal1").append("input#animal1");
    $(".animals").append("input#animals");
    $("#story").show();
  })
});
