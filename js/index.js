$(document).ready(function(){

    $( '.datepicker' ).pickadate()

    $('.placePicker').geocomplete()

    $('#radios').radiosToSlider();


    
    $('#showModalButton').on('click', function() {
    var departureValue = $('#departureField').val()
    var arrivalValue = $('#arrivalField').val()
    var departureCity = $('#departureCity').val()
    var arrivalCity = $('#arrivalCity').val()
        if (departureValue !== '' && arrivalValue !== '' && departureCity !== '' && arrivalCity !== '') {
            $('#modal').removeClass('hidden')
            $('#modalText').text(`Your flight will depart from ${departureCity} on ${departureValue} and arrive in ${arrivalCity} on ${arrivalValue}`)
            $('.overlay-background').on('click', function() {
                $('#modal').addClass('hidden')
            })
        } else {
                alert('You must enter dates and locations')
        }
})

$('#hideModalButton').on('click', function() {
    $('#modal').addClass('hidden')
    // $('#modal2').removeClass('hidden')
    alertify.confirm('Are you sure you want to book this flight?', function () {
    alertify.alert('Your flight has been successfully booked');
        }, function() {
    alertify.alert('Your flight has not been booked. Your card will not be charged')
    });
})


})