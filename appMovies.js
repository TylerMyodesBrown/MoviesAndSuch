$('form').on('click','#Submit', function(e){
    e.preventDefault();
    let $Title = $('#Text').val()
    let $Rating = $('#Rating').val()
    let $DelBtn = $('<button>',{
        class: 'Delete',
        text: 'Delete'
    }).on('click', function(e){
        e.target.closest('div').remove();
    })
    let $Div = $('<div>', {
        class: 'user-Submission'
    })
    .text(`Title: ${$Title} | Rating: ${$Rating}`)
    .appendTo('.Field');
    $DelBtn.appendTo($Div);
})