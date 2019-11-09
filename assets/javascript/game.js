  $(document).ready(function(){


        // Variables for wins, losses, and ever-changing score for the round

        var wins = 0;
        
        var losses = 0;
        
        var roundscore = 0;


        // ?????Display number of wins and losses????? //


        
        // Set random-chosen target score for this round 
        var targetscore = Math.floor(Math.random() * 101) +19;
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
            alert("Random1 = " + random1);
            roundscore = roundscore + random1;
            console.log("Round score so far = " + roundscore);
                if(roundscore === targetscore){
                    youwin();
                } else if(roundscore > targetscore){
                    youlose();
                } else {
                    alert("You're doing fine. Keep touching the crystals.");
                    console.log("Game continues to next click on a crystal");
                }
            })


        $("#button2").on("click", function() {
            alert("Random2 = " + random2);
            roundscore = roundscore + random2;
            console.log("Round score so far = " + roundscore);
                if(roundscore === targetscore){
                    youwin();
                } else if(roundscore > targetscore){
                    youlose();
                } else {
                    alert("You're doing fine. Keep touching the crystals.");
                    console.log("Game continues to next click on a crystal");
                }
            })
    
        $("#button3").on("click", function() {
            alert("Random3 = " + random3);
            roundscore = roundscore + random3;
            console.log("Round score so far = " + roundscore);
                if(roundscore === targetscore){
                    youwin();
                } else if(roundscore > targetscore){
                    youlose();
                } else {
                    alert("You're doing fine. Keep touching the crystals.");
                    console.log("Game continues to next click on a crystal");
                }
            })

        $("#button4").on("click", function() {
            alert("Random4 = " + random4);
            roundscore = roundscore + random4;
            console.log("Round score so far = " + roundscore);
                if(roundscore === targetscore){
                    youwin();
                } else if(roundscore > targetscore){
                    youlose();
                } else {
                    alert("You're doing fine. Keep touching the crystals.");
                    console.log("Game continues to next click on a crystal");
                }
            })

        // Winning function
        function youwin(){
            alert("You win. The vault is opened. You may now leave the vault. Or stick around and play again!");
            wins++;
            console.log("Wins = " + wins + "and losses = " + losses);
            reset();
        }

        // Losing function
        function youlose(){
            alert("You lose. BOOM! An explosion breaks the bank.");
            losses++;
            console.log("Wins = " + wins + "and losses = " + losses);
            reset();
        }

        //Gamne reset function
        function reset(){
            targetscore=Math.floor(Math.random() * 101) + 19;
            console.log("New target is " + targetscore);
            random1=Math.floor(Math.random() * 11) + 1;
            random2=Math.floor(Math.random() * 11) + 1;
            random3=Math.floor(Math.random() * 11) + 1;
            random4=Math.floor(Math.random() * 11) + 1 ;
            roundscore = 0;            
        }

    });  