const body = document.querySelector('body');
const header = document.querySelector('.header');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__darkmode');

function store(value){
  localStorage.setItem('darkmode', value);
}

function load(){
  const darkmode = localStorage.getItem('darkmode');

  if(!darkmode){
    store(false);
  } else if( darkmode == 'true'){ //if the dark mode is activated
    body.classList.add('darkmode');
    header.classList.add('darkmode');
  } else if(darkmode == 'false'){ //if the dark mode exists but is disabled
  }
}


load();

btn.addEventListener('click', () => {

  body.classList.toggle('darkmode');
  header.classList.toggle('darkmode');
  icon.classList.add('animated');

  //save true or false
  store(body.classList.contains('darkmode'));

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})