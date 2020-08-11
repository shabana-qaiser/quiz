window.onload = function(){
    show(0);
}

let questions = [
    {
        id : 1,
        question: "What is the abrivation of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None Of Above"
        ]
    },
    {
        id : 2,
        question : "How many permanent teeth does a dog have ?",
        answer: "42",
        options: [
            "32",
            "64",
            "30",
            "42"
        ]
    },
    {
        id : 3,
        question: "How many centimetres in a metre ?",
        answer: "100",
        options: [
            "150",
            "100",
            "120",
            "170"
        ]
    },
    {
        id : 4,
        question: "How many zeros are there in one thousand ?",
        answer: "three",
        options: [
            "one",
            "four",
            "three",
            "five"
        ]

    },
    {
        id : 5,
        question: "What is taller, an elephant or a giraffe ?",
        answer: "giraffe",
        options: [
            "elephant",
            "giraffe",
            "both have same height",
            "none of these"
        ]
    },
    {
        id : 6,
        question: "How many players are in a football team ?",
        answer: "11 players",
        options:[
            "16 players",
            "14 players",
            "12 players",
            "11 players"
        ]
    },
    {
        id : 7,
        question: "How many planets are in our solar system ?",
        answer: "eight",
        options: [
            "seven",
            "nine",
            "eleven",
            "eight"
        ]
    },
    {
        id : 8,
        question: "How many hearts does an octopus have ?",
        answer: "3",
        options: [
            "6",
            "8",
            "3",
            "9"
        ]

    },
    {
        id : 9,
        question: "Where is the smallest bone in the human body located ?",
        answer: "ear",
        options: [
            "nose",
            "eye",
            "ear",
            "finger"
        ]
    },
    {
        id : 10,
        question: "How many elements are in the periodic table ?",
        answer: "118",
        options: [
            "123",
            "118",
            "111",
            "108"
        ]
    }
    

];


function submitForm(e){
    e.preventDefault();
    let name = document.forms["welcome-form"]["name"].value;


    sessionStorage.setItem("name", name);

    location.href="quiz.html";
}

let question_count =0;
let point = 0;

function next(){

    let user_answer = document.querySelector("li.option.active").innerHTML;

    if(user_answer == questions[question_count].answer){
        point += 10;
        sessionStorage.setItem("points", point);
    }
    

  if(question_count == questions.length - 1 ){
     sessionStorage.setItem("time" ,minutes + " " + 'minutes and' + " "  + seconds + " " + 'seconds' )
     clearInterval(myTime); 
     location.href = "end.html";
      return;
  }    
    

    question_count++;
    show(question_count);
    

}

function show(count){
    let question = document.getElementById("questions");

    question.innerHTML = "<h2>" + "Q" + (question_count + 1)+ "." + " " + questions[count].question + "</h2>" +
    
    '<ul class=option-group>' + 
    '<li class="option" , "active">'+ questions[count].options[0] + '</li>' +
    '<li class="option" , "active">' + questions[count].options[1] + '</li>' + 
    '<li class="option" , "active">' + questions[count].options[2] + '</li>' +
    '<li class="option" , "active">' + questions[count].options[3] + '</li>' +
    '</ul> ';

    toggleActive();

}

function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for(let i = 0; i< option.length; i++){
        option[i].onclick = function() {
            for(let j=0; j< option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}