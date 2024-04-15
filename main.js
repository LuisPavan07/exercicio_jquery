$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefa = $('#tarefa').val();
        const novoItem = $('<li></li>') ;
        novoItem.text(tarefa); 
        $('ul').append(novoItem);
        $('#tarefa').val('');

        novoItem.on('click', function() {
            $(this).toggleClass('check');
        })
    })
})

