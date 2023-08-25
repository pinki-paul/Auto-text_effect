const containerEl = document.querySelector(".container");

const careers = ["Freelancer","Youtuber", "Web Designer", "3D Artist", "Student", "Instructor","Web Developer"];

let DefaultcareerIndex = 0; // ata carrers array r index number der store kre.
let characterIndex = 0; //protita word er letter k store krar jnno banano variable. 


careerUpdate();

function careerUpdate() {
    characterIndex++ ;//++ a barate hbe letter gulo k.

//dynamically backquote er bhitore slice method niye word gulor sb letter der paowa jbe.
    containerEl.innerHTML = `<h1>I am ${careers[DefaultcareerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[DefaultcareerIndex].slice(0,characterIndex)}</h1>`;

   

    //if condition banate hbe karon protita word k array thke tulte hbe.

    if (characterIndex === careers[DefaultcareerIndex].length) {
        DefaultcareerIndex++
        characterIndex = 0; 

        //jkhn carrerIndex barbe tkhn characterIndex 0 hye jbe
    }

    //jkhn array sesh hye jbe, trpor abr prothom thke sb start krar jnno if condition banate hbe.

   
    if(DefaultcareerIndex === careers.length){
        DefaultcareerIndex = 0;
    }

    setTimeout(careerUpdate, 400);
};



