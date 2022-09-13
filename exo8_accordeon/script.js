// selectionner les questions
const questions = document.querySelectorAll(".question");
console.log(questions);

// boucler sur les questions
questions.forEach(question => {
    question.addEventListener("click",function(){
        //cibler l'element suivant
        const next = question.nextElementSibling;
        //  faire apparaitre
        next.classList.toggle("visible");
        // ou un seule ligne
        // question.nextElementSibling.classList.toggle("visible");
        
        // changer l'icone "chevron" vers le ahut ou le bas
        // cibler l'icone
        const icone = question.lastElementChild;
        //modifier l'icone
        icone.classList.toggle('fa-chevron-up');
        
    });
    
});

// ajoute un évenement