const correctAnswer = ["A", "B", "A", "B", "B"]
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result"); 
const question = document.querySelectorAll(".question");  
form.addEventListener("submit", event => {
    event.preventDefault();
    let score = 0;
    const userAnswers = [form.option.value, form.option2.value, form.option3.value, form.option4.value, form.option5.value];
    // console.log(userAnswers);
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            question[index].classList.add("correct");
            score += 1;
        }
        else {
            question[index].classList.add("wrong");
        }
    })
    console.log(score);
    scrollTo(0, 0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `You Scored ${score}/5!`;


    
});
