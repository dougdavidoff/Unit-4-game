  $(document).ready(function(){


        // Variables for wins, losses, and ever-changing score for the round

        var wins = 0;
            var winsSpan = $('.wins-score');
            console.log(winsSpan)
        
        var losses = 0;
            var lossesSpan = $('.losses-score');
            console.log(lossesSpan)

        var roundscore = 0;

        var message = "Let's Begin Play"
            var messageSpan = $('.new-message');

        messageSpan.text(message)


        
        // Set random-chosen target score for this round 
        var targetscore = Math.floor(Math.random() * 101) +19;
            var targetScoreSpan = $('.target-score');
            var roundScoreSpan = $('.round-score');
            targetScoreSpan.text(targetscore);
            console.log("Target Score = " + targetscore);




         // Set random numbers for the crystals in ths round   
        var random1 = Math.floor(Math.random() * 11) + 1;
            console.log("Random 1 = " + random1);

        var random2 = Math.floor(Math.random() * 11) + 1;
            console.log("Random 2 = " + random2);

        var random3 = Math.floor(Math.random() * 11) + 1;
            console.log("Random 3 = " + random3);

        var random4 = Math.floor(Math.random() * 11) + 1;
            console.log("Random 4 = " + random4);

        
        // ??? BELOW: ATTEMPT TO AVOID REPEAT GEM VALUES ???
        // var randomtest2 = 0;
        // randomtest2 = Math.floor(Math.random() * 12) + 1;
            // if randomtest2 === random1 {
                // randomtest2 = Math.floor(Math.random() * 12) + 1;
            // } else {
                // random2 = randomtest2;
            // }
        // ????? Also, if first three crystals are even numbers, need to set fourth crystal to an odd number


        // Crystal click operations

        $("#button1").on("click", function() {
            roundscore = roundscore + random1;
            roundScoreSpan.text(roundscore);
                if(roundscore === targetscore){
                    youwin();
                } else if(roundscore > targetscore){
                    youlose();
                } 
            })


        $("#button2").on("click", function() {
            roundscore = roundscore + random2;
            roundScoreSpan.text(roundscore);
            if(roundscore === targetscore){
                    youwin();
                } else if(roundscore > targetscore){
                    youlose();
                } 
            })
    
        $("#button3").on("click", function() {
            roundscore = roundscore + random3;
            roundScoreSpan.text(roundscore);
            if(roundscore === targetscore){
                    youwin();
                } else if(roundscore > targetscore){
                    youlose();
                } 
            })

        $("#button4").on("click", function() {
            roundscore = roundscore + random4;
            roundScoreSpan.text(roundscore);
            if(roundscore === targetscore){
                    youwin();
                } else if(roundscore > targetscore){
                    youlose();
                } 
            })

        // Winning function
        function youwin(){
            message = "You win. The vault is opened. You may now leave the vault. Or stick around and play again!";
            messageSpan.text(message)
            message = "Let's play again."
            setTimeout(function(){messageSpan.text(message)}, 5000);
            wins++;
            console.log("Wins = " + wins + "and losses = " + losses);
            winsSpan.text(wins);
            reset();
        }

        // Losing function
        function youlose(){
            message = "You lose. BOOM! An explosion breaks the bank.";
            messageSpan.text(message)
            message = "Let's play again."
            setTimeout(function(){messageSpan.text(message)}, 5000);
            losses++;
            console.log("Wins = " + wins + "and losses = " + losses);
            lossesSpan.text(losses);
            reset();
        }

        //Game reset function
        function reset(){
            targetscore=Math.floor(Math.random() * 101) + 19;   
            console.log("New target is " + targetscore);
            random1=Math.floor(Math.random() * 11) + 1;
            random2=Math.floor(Math.random() * 11) + 1;
            random3=Math.floor(Math.random() * 11) + 1;
            random4=Math.floor(Math.random() * 11) + 1 ;
            roundscore = 0; 
            targetScoreSpan.text(targetscore);
            roundScoreSpan.text(0);         
        }

    });  