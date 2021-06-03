$(document).ready(function() {
  $('#formOne').submit(function(event){
    event.preventDefault();
    const animalInput = $('input#animal').val();
    const animalsInput = $('input#animals').val();
    $('.animals').append(animalsInput);
    $('.animal').append(animalInput);
    
    $('#story').show();
  })


})

