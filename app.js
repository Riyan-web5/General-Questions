const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
      
 const btn = question.querySelector(".question-btn");
//  console.log(btn);

btn.addEventListener("click", function(){
   
   questions.forEach(function(general){
    if(general !== question){
        general.classList.remove("show-text");
    }
   });
   
    question.classList.toggle("show-text");
});
});



// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//    btn.addEventListener("click", function(e){
//    const question = e.currentTarget.parentElement.parentElement;
//    question.classList.toggle("show-text");
//    });
// });