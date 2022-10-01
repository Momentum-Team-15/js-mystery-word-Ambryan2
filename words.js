let words = ['lobby', 'of', 'conscious', 'proud', 'summary', 'orientation', 'indication', 'member', 'dictionary', 'lodge', 'wisecrack', 'experiment', 'corner', 'relaxation', 'gem', 'pressure', 'spider', 'hide', 'bacon', 'attack', 'shout', 'legend', 'ferry', 'endorse', 'course', 'confuse', 'aluminium', 'employee', 'drink', 'define', 'cooperative', 'activity', 'repeat', 'administration', 'predator', 'store', 'tiptoe', 'arrange', 'useful', 'remark', 'flatware', 'brake', 'notebook', 'sanctuary', 'plane', 'break', 'borrow', 'management', 'advice', 'alarm', 'morsel', 'catch', 'prey', 'vat', 'grief', 'nest', 'spine', 'oral', 'beam', 'eye', 'summit', 'casualty', 'series', 'episode', 'poll', 'dare', 'end', 'argument', 'dorm', 'flatware', 'rainbow', 'organ', 'enter', 'relax', 'regulation', 'smell', 's enior', 'enlarge', 'laundry', 'quote', 'tendency', 'deprivation', 'mood', 'eagle', 'payment', 'ethics', 'remind', 'expenditure', 'nap', 'rear', 'trunk', 'publicity', 'blind', 'chase', 'deer', 'carve', 'understanding', 'projection', 'analyst', 'closed', 'conductor', 'harmony', 'orbit', 'dominant', 'slime', 'complain', 'suit', 'quantity', 'waste', 'chocolate', 'slave', 'urge', 'amber', 'winner', 'beg', 'bird', 'sleeve', 'commerce', 'empire', 'responsible', 'security', 'doctor', 'profile', 'wind', 'air', 'curl', 'tenant', 'network', 'superintendent', 'cycle', 'garlic', 'family', 'gaffe', 'minor', 'goalkeeper', 'red', 'trance', 'impulse', 'relax', 'sacrifice', 'courage', 'management', 'thought', 'movement', 'culture', 'average', 'fool', 'seize', 'book', 'stroke']
let enAlphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ'



//references to locations in html
let alphabet = document.querySelector('#alphabetCont');


//this creates the letter grid
let guessGrid = (array) => {
    for (let letters of enAlphabet){
        let letter = document.createElement('div');
        letter.classList.add('letter');
        letter.innerText = letters;
        letter.setAttribute('id',letter.innerText);

        letter.addEventListener('click',(event)=> {
            //this is going to add .innerText to the div elements that are created in word display function
            console.log(letter.innerText + ' was clicked')
        })

        alphabet.appendChild(letter);
    }
}

guessGrid(enAlphabet);