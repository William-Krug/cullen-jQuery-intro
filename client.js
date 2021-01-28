console.log('I have JavaScript');

$(document).ready(onReady);

function onReady() {
  console.log('I have jQuery');

  const h1 = $('h1');
  console.log('h1:', h1);

  const h2 = $('h2');
  // make it blue
  // h2.css('background-color', 'blue');
  // same as ...
  // $('h2').css('background-color', 'green');
  $('h2').addClass('froggy');
  $('h2').addClass('moarClasses');
  $('h2').removeClass('moarClasses');
  $('h2').toggleClass('froggy');
}
