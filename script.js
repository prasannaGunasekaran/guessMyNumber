//elements
const btnSubmit=document.querySelector('.btn-submit')
const input=document.querySelector('.user-input')
const error=document.querySelector('.error-message')
const scores=document.querySelector('.score')

//global variables
const randomNumber1=Math.floor(Math.random()*100)+1;
let score=20;

//add event listener
btnSubmit.addEventListener('click',function (){
    const userInput=Math.ceil( Number(input.value));

//validating input
    if(userInput< 1 || userInput > 100)
    {
        error.style.display='block';
        error.innerText='Enter a valid input';
    }
    else
    {
    //validating  score
       if(score>0)
       {
        //validating correct input
            if(userInput===randomNumber1)
             {
               error.style.display='block';
               error.style.color='green';
               error.innerText=randomNumber1;
               error.innerText='you won & your score is '+score;
            }
        //validating correct input
            else
            { 
                if(userInput > randomNumber1)
                {
                  error.style.display='block';
                  error.style.color='red';
                  error.innerText='your guess is higher';
                  score=score-1;
                  scores.innerText=score;
                  //input.value=null;
                }
                else if(userInput < randomNumber1)
                {
                  error.style.display='block';
                  error.style.color='red';
                  error.innerText='your guess is lower';
                  score=score-1;
                  scores.innerText=score;
                  //input.value=null;
                }
            }
       }
       // if score will be 0
       else
       {
        error.style.display='block';
        error.innerText='Game  Is Over';
       }
    }
    console.log(userInput);
 });
