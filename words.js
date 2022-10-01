let words = ['lobby', 'of', 'conscious', 'proud', 'summary', 'orientation', 'indication', 'member', 'dictionary', 'lodge', 'wisecrack', 'experiment', 'corner', 'relaxation', 'gem', 'pressure', 'spider', 'hide', 'bacon', 'attack', 'shout', 'legend', 'ferry', 'endorse', 'course', 'confuse', 'aluminium', 'employee', 'drink', 'define', 'cooperative', 'activity', 'repeat', 'administration', 'predator', 'store', 'tiptoe', 'arrange', 'useful', 'remark', 'flatware', 'brake', 'notebook', 'sanctuary', 'plane', 'break', 'borrow', 'management', 'advice', 'alarm', 'morsel', 'catch', 'prey', 'vat', 'grief', 'nest', 'spine', 'oral', 'beam', 'eye', 'summit', 'casualty', 'series', 'episode', 'poll', 'dare', 'end', 'argument', 'dorm', 'flatware', 'rainbow', 'organ', 'enter', 'relax', 'regulation', 'smell', 's enior', 'enlarge', 'laundry', 'quote', 'tendency', 'deprivation', 'mood', 'eagle', 'payment', 'ethics', 'remind', 'expenditure', 'nap', 'rear', 'trunk', 'publicity', 'blind', 'chase', 'deer', 'carve', 'understanding', 'projection', 'analyst', 'closed', 'conductor', 'harmony', 'orbit', 'dominant', 'slime', 'complain', 'suit', 'quantity', 'waste', 'chocolate', 'slave', 'urge', 'amber', 'winner', 'beg', 'bird', 'sleeve', 'commerce', 'empire', 'responsible', 'security', 'doctor', 'profile', 'wind', 'air', 'curl', 'tenant', 'network', 'superintendent', 'cycle', 'garlic', 'family', 'gaffe', 'minor', 'goalkeeper', 'red', 'trance', 'impulse', 'relax', 'sacrifice', 'courage', 'management', 'thought', 'movement', 'culture', 'average', 'fool', 'seize', 'book', 'stroke']
let enAlphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

//empty arrays to hold element
let displayLetCont = [];

//references to locations in html
let alphabet = document.querySelector('#alphabetCont');
let chosenWord = document.querySelector('#wordDisplay');
let wrong = document.querySelector('#incorrectCont');

//function that selects the next word in array that will be put as parameter in displayGrid
let exampleWord = 'lobby'
exampleWord = exampleWord.toUpperCase();
console.log(exampleWord)

//this creates the chosen letter display
let displayGrid = (array) => {
    for (let display of exampleWord){
        let guessedLetter = document.createElement('div')
        guessedLetter.classList.add('right')

        displayLetCont.push(guessedLetter)

        chosenWord.appendChild(guessedLetter);
    }
}

//this creates the letter grid
let guessGrid = (array) => {
    for (let letters of enAlphabet){
        let letter = document.createElement('div');
        letter.classList.add('letter');
        letter.innerText = letters;
        letter.setAttribute('id',letter.innerText);

        letter.addEventListener('click',(event)=> {
            //if letter clicked matches a letter in array then change inner text of associated div
            let tracker = 0
            for (i=0;i<exampleWord.length;i++){
                if(exampleWord[i]===letter.innerText){
                    displayLetCont[i].innerText = letter.innerText
                    tracker++
                }
                else{
                    letter.classList.remove('letter')
                    letter.classList.add('selected')
                }
            }
            if (tracker === 0){
                let strike = document.createElement('div')
                strike.classList.add('strike');

                wrong.appendChild(strike);
                console.log('letter was not found')
            }

            //this is going to add .innerText to the div elements that are created in word display function
            console.log(letter.innerText + ' was clicked')
            // console.log('this letter was found ' + tracker + ' times')
        })

        alphabet.appendChild(letter);
    }
}

displayGrid(exampleWord);
// displayLetCont[2].innerText = 'T'
console.log(displayLetCont)
guessGrid(enAlphabet);