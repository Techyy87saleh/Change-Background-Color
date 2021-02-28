//color for arrays
const colors = ['green','blue','black','orange','tomato','pink','mirinda'];
 
 
//button
const button = document.getElementById('btn');

//button event to occur
button.addEventListener('click',()=>{
 
  const body = document.getElementById('body');

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;

      });
 

 

