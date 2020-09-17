// Immediately invoked function expression
// to not pollute the global scope
(function nai() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  var deg = 0;

  startButton.addEventListener('click', () => {
    // Disable button during spin
    audio();
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    wheel.style.transition = 'all 10s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    // Enable button when spin is over

    
    startButton.style.pointerEvents = 'auto';

    wheel.style.transition = 'none';
     text();

    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
//amar function gula

function text() {

  var list=['বিড়ি খাইয়ো',
            'কি করবা এগুলা নিয়া?',
      'আমাকে হাফ দিও',
      'ধারের টাকা দিয়ে দিও',
      'আমরা সবাই রাজা আমাদের এই রাজার রাজত্বে ',
      'Care to give your bank a/c number?',``
      'এনাম সৈনিক এর ফান্ডে দান করো'
  ]

  document.getElementById("text1").innerHTML = "You won $"+ Math.floor(5000+Math.random()*5000) + "dollar.";
  document.getElementById("text2").innerHTML="Advice:"+list[Math.floor(Math.random()*list.length)]
}
// function declareWinner() {
//   document.querySelector(".endgame").style.display = "block";
//   //document.querySelector(".endgame .text").innerText = "eita";
//   var list=['বিড়ি খাইয়ো',
//     'কি করবা এগুলা নিয়া?',
//     'আমাকে হাফ দিও',
//     'দেখিয়ো পেছনে লাইন লাগি যাবে',
//     'কারন আমরা সবাই রাজা আমাদের এই রাজার রাজত্বে ',
//     'Care to give your bank a/c number? -_-',
//     'tumi onek cute tai dichi'
//   ]
//
//   document.querySelector(".endgame .text").innerText = "You won $"+ Math.floor(5000+Math.random()*5000) + "dollar."+list[Math.floor(Math.random()*list.length)];
// }
function audio() {
  var x = document.getElementById("myAudio");
  x.play();
}
