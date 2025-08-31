
    var quotes = [
      "The only way to do great work is to love what you do. – Steve Jobs",
      "Life is what happens when you’re busy making other plans. – John Lennon",
      "The purpose of our lives is to be happy. – Dalai Lama",
      "Get busy living or get busy dying. – Stephen King",
      "You only live once, but if you do it right, once is enough. – Mae West",
      "If you want to live a happy life, tie it to a goal, not to people or things. – Albert Einstein",
      "Never let the fear of striking out keep you from playing the game. – Babe Ruth"
    ];

    var number = -1; 

    function showQuote() {
      number = number + 1;
      if (number  >= quotes.length) {
        number = 0; 
      }
      document.getElementById("quoteDisplay").textContent = quotes[number];
    }