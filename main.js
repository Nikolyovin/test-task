
  const text = document.getElementById('text');
  const spaceBar=document.getElementById('body');

  function handleClick() {
    text.style.visibility ='hidden'
  }

  spaceBar.addEventListener('keydown', function(e){
    if(e.key === ' '){
      console.log('ты нажал на пробел')
      text.remove();
    }
  })