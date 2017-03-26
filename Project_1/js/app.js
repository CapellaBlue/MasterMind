  $(function(){

  //==============================================================================
  //---------------------------ARRAYS FOR CODE & GUESSES--------------------------
  //==============================================================================
    //array to hold the codemaker's selection
    var code = [];
    var guess = [];


  //==============================================================================
  //--------------------------------BUTTONS GRABBED-------------------------------
  //==============================================================================
    //these are my buttons to choose sequences
    var $redBtn = $('#red');
    var $yellowBtn = $('#yellow');
    var $blueBtn = $('#blue');
    var $orangeBtn = $('#orange');
    var $greenBtn = $('#green');
    var $purpleBtn = $('#purple');


    var start = function(){
      codeMakerFirstTurn();
    };

    console.log("You're doing fine");
  //==============================================================================
  //----------------------------CODEMAKER SELECTS CODE ---------------------------
  //==============================================================================
    //when button is clicked....store in code-storage array and append
    var codeMakerFirstTurn = function(){
      if(code.length < 4){
        var storeCode = function(){
          var $selectedCode = $('<div>').attr('id',$(this).attr('id'));
          $selectedCode.addClass('sequence-square');
          code.push($(this).attr('id'));
          $('#code-storage').append($selectedCode);
          if (code.length == 4){
            $('h1').text("Code Breaker: make your guess.");

            $redBtn.off('click', storeCode);
            $yellowBtn.off('click', storeCode);
            $blueBtn.off('click', storeCode);
            $orangeBtn.off('click', storeCode);
            $greenBtn.off('click', storeCode);
            $purpleBtn.off('click', storeCode);

            codeBreakerGuess();
          };
        };
        var $instruction = $('<h1>').text("Code Maker: Select your code.");
        $('.instruction').prepend($instruction);
        $redBtn.on('click', storeCode);
        $yellowBtn.on('click', storeCode);
        $blueBtn.on('click', storeCode);
        $orangeBtn.on('click', storeCode);
        $greenBtn.on('click', storeCode);
        $purpleBtn.on('click', storeCode);
      };
    };

//==============================================================================
//---------------------------CODEBREAKER MAKES GUESS----------------------------
//==============================================================================
    //when button is clicked, store in guess code-guess-container array and append
    var codeBreakerGuess = function(){
      console.log("still doing swell:)");
      var storeGuess = function(){
        if(guess.length < 4){
          var $selectedGuess = $('<div>').attr('id',$(this).attr('id'));
          $selectedGuess.addClass('guessed-square');
          guess.push($(this).attr('id'));
          $('#code-guess-container').append($selectedGuess);
          console.log(guess);
        };
      };
      if(guess.length < 4){
        // $('h1').text("Code Breaker: make your guess.");
        $redBtn.on('click', storeGuess);
        $yellowBtn.on('click', storeGuess);
        $blueBtn.on('click', storeGuess);
        $orangeBtn.on('click', storeGuess);
        $greenBtn.on('click', storeGuess);
        $purpleBtn.on('click', storeGuess);
      };
      console.log(code);
      console.log(guess);
    };


//==============================================================================
//---------------------------CODE MAKER GIVES FEEDBACK--------------------------
//==============================================================================

    start();



  });
