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

  // change the text (setter)
  // $('h1').text('.....?');
  // getter
  const h1Text = $('h1').text();
  console.log('h1 Text is:', h1Text);

  const louderText = h1Text.toUpperCase() + '!!!!';
  // setter
  $('h1').text(louderText);

  // on() is a function that sets up an event handler
  // can only call 1 function from on()
  $('#submitBtn').on('click', whenIAddAHarmonica);
  $('.deleteBtn').on('click', deleteMe); // doesn't work, the button doesn't exist when the page is rendered
  //workaround
  $('#harmonicas').on('click', '.deleteBtn', deleteMe);
}

function deleteMe() {
  console.log('delete me!');
}

function whenIAddAHarmonica() {
  // Stuff to do when we add a harmonica
  console.log('clicked the button');

  // Grab that data (getter)
  let $brand = $('#brand').val();
  console.log('brand is:', $brand);

  // Render form data to the DOM
  $('#harmonicas').append(`<li>
  Brand is: ${$brand}
  <button class="deleteBtn">Delete Me</button>
  </li>`);
}
