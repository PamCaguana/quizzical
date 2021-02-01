document.querySelector('#q').addEventListener('click',getQuestion)
document.querySelector('#a').addEventListener('click',showAnswer)

let answer = ""

function getQuestion(){

  const url = "https://jservice.io/api/random"
  document.querySelector('#answer').style.visibility = "hidden"

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector('#question').innerText = data[0].question
      document.querySelector('h4').innerText = data[0].category.title;
      document.querySelector('h3').style.color = "white";
      document.querySelector('h4').style.color = "white";

      answer = data[0].answer
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
function showAnswer(){
  document.querySelector('#answer').style.visibility = "visible";
  document.querySelector('#answer').innerText = answer
  document.querySelector('#answer').style.color = "white";
}