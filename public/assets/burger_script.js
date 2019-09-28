$(document).ready(function () {
    $('#add-burger').click(function (e) {
        e.preventDefault();
        var newBurger = { name: $('#order').val().trim() };

        $.ajax("/api/burgers", {
            type: 'POST',
            data: newBurger
        }).then(() => {
            // console.log('new burger added');
            location.reload();
        })
    });
    $('.burger').click(function (e) {
        e.preventDefault();
        burgerID = $(this).data('id');
        // console.log($(this).data('id'));
        var burgetEat = {
            id: burgerID,
            devoured: true
        }

        //move the selected burger to the right column 
        $('#right-col').append(`<li id=new-${burgerID}>${$(this).data('name')}</li>`);
        $(`#new-${burgerID}`).append("<button class='btn btn-primary'>DEVOURED!!!</button>")
        $(`#${burgerID}`).remove();

        $.ajax('/api/burgers', {
            type: 'PUT',
            data: burgetEat
        }).then(() =>{
            // location.reload();
        })
    })
});