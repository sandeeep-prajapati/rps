const game = ()=>{
    let pScore = 0;
    let cScore = 0;
    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match"); 

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add('fadeIn');
        });
    };
    const playMatch = ()=>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand =>{
            hand.addEventListener("animationend",function(){
                this.style.animation = "";
            });
        });
        // computer option
        const computerOption = ['rock', 'paper', 'scissors'];
        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoise = computerOption[computerNumber];
                
                playerHand.style.animation = "sakePlayer 2s ease";
                computerHand.style.animation = "sakeComputer 2s ease";
                setTimeout(() => {
                    //here we are calling compair function
                    compairHand(this.textContent, computerChoise);
    
    
                    //updating images
                    playerHand.src = `${this.textContent}.png`;
                    computerHand.src =`${computerChoise}.png`;
                },2000)
            });
        });
        
        
    };
    const updateScroe = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compairHand = (playerChoice, computerChoise)=>{
        // here we compaire hand
        const  winner = document.querySelector('.winner');
        // tie condition
        if(playerChoice === computerChoise){
            winner.textContent='It is a tie';
            updateScroe();
            return;
        }
        //checking for rock
        if(playerChoice==='rock'){
            if(computerChoise==='scissors'){
                winner.textContent='Player wins'
                pScore++;
                updateScroe();
                return;
            }
            else{
                winner.textContent='Computer wins'
                cScore++;
                updateScroe();
                return;
            }
        }
        //checking for scissors
        if(playerChoice==='scissors'){
            if(computerChoise==='rock'){
                winner.textContent='Computer wins'
                cScore++;
                updateScroe();
                return;
            }
            else{
                winner.textContent='Player wins'
                pScore++;
                updateScroe();
                return;
            }
        }
        //cheaking for paper
        if(playerChoice==='paper'){
            if(computerChoise==='scissors'){
                winner.textContent='Player wins'
                pScore++;
                updateScroe();
                return;
            }
            else{
                winner.textContent='Computer wins'
                cScore++;
                updateScroe();
                return;
            }
        }


    }

    startGame();
    playMatch();

};

// calling main function
game();