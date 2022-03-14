// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
// Remove the last paragraph in the article.
// Set the font size of the title to be a random pixel size from 0 to 100.
// Add an item to the list; it can say whatever you want.
// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
// Add an event listener so that when you click on the image, it is removed from the DOM.

// 1)
$(document).ready(function(){
    console.log("Lets get ready to party with jQuery!")
})

// 2)
$('img').add('class','image-center')

//3)
$('p').eq(5).remove();

//4)
$('#title').css('font-size',`${Math.floor(Math.random()*101)}px`);

//5)
$('ol').append('<li>Whatever I Want</li>');

//6)
$('.col-sm-4').eq(0).empty();
$('.col-sm-4').eq(0).append('<p>Sorry for the terrible list. I shall fix my ways as soon as I humanly can.</p>');

//7

$('.form-control').on('keyup blur change', function(){
    $('body').css('background-color', `rgb(${$(".form-control").eq(0).val()},${$(".form-control").eq(1).val()},${$(".form-control").eq(2).val()})`);
})

//8)
$("img").on('click', function (e) {
    $(e.target).remove();
  });

