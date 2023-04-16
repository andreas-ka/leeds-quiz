/* Creating an Array containing all the questions and answers in boolean format */

const questions = [
    {   numb: 1,
        questions: "What year was Leeds United founded?",
        answer: [  { text: "1920", isCorrect: false },
                    { text: "1917", isCorrect: false },
                    { text: "1919", isCorrect: true },
                    { text: "1918", isCorrect: false }
          ]
  },
  {
        numb: 2,
        questions: "Who is the all time leading goalscorer for Leeds United?",
        answer: [  { text: "Peter Lorimer", isCorrect: true },
                    { text: "John Charles", isCorrect: false },
                    { text: "Tom Jennings", isCorrect: false },
                    { text: "Allan Clarke", isCorrect: false }
          ]
  },
  {     
        numb: 3,
        questions: "Who was the latest Swedish player that played for Leeds United?",
        answer: [  { text: "Rasmus Kristensen", isCorrect: false },
                    { text: "Pontus Jansson", isCorrect: true },
                    { text: "Tomas Brolin", isCorrect: false },
                    { text: "Brendan Aaronson", isCorrect: false }
          ]
  },
  {
        numb: 4,
        questions: "During the 19/20 season Leeds won the Championship but what was our total points?",
        answer: [  { text: "93", isCorrect: true },
                    { text: "92", isCorrect: false },
                    { text: "91", isCorrect: false },
                    { text: "90", isCorrect: false }
          ]
  },
  {
        numb: 5,
        questions: "In the first season back in the Premier League with Bielsa, what rank did we end up at?",
        answer: [  { text: "12", isCorrect: false },
                    { text: "10", isCorrect: false },
                    { text: "9", isCorrect: true },
                    { text: "11", isCorrect: false }
          ]
  },
  {
        numb: 6,
        questions: "Who was the co-owner with Andrea Radrizzani before he bought the remaining 50%?",
        answer: [  { text: "Mariano Chellini", isCorrect: false },
                    { text: "Matteo Claudio", isCorrect: false },
                    { text: "Maurizio Costa", isCorrect: false },
                    { text: "Massimo Cellino", isCorrect: true }
          ]
  },
  {
        numb: 7,
        questions: "What answer is a nickname for Leeds United?",
        answers: [  { text: "White Cockatoos", isCorrect: false },
                    { text: "The Doves", isCorrect: false },
                    { text: "The Peacocks", isCorrect: true },
                    { text: "The Marchies", isCorrect: false }
          ]
  },
  {
        numb: 8,
        questions: "What is the record attendance at Elland Road in 1967?",
        answer: [  { text: "57,892", isCorrect: true },
                    { text: "55,625", isCorrect: false },
                    { text: "52,992", isCorrect: false },
                    { text: "56,122", isCorrect: false }
          ]
  },
  {
        numb: 9,
        questions: "How many members does Leeds United Supporters Club of Scandinavia have?",
        answer: [  { text: "4000+", isCorrect: false },
                    { text: "2500+", isCorrect: false },
                    { text: "5000+", isCorrect: true },
                    { text: "1500+", isCorrect: false }
          ]
  },
  {
        numb: 10,
        questions: "Who is the most expensive player we have bought?",
        answer: [  { text: "Raphina", isCorrect: false },
                    { text: "Georgino Rutter", isCorrect: true },
                    { text: "Brendan Aaronson", isCorrect: false },
                    { text: "Rodrigo Moreno", isCorrect: false }
          ]
  },
  {
        numb: 11,
        questions: "What team did we lose to in 2000/2001 Champions League semi-final?",
        answer: [  { text: "Lazio", isCorrect: false },
                    { text: "Real Madrid", isCorrect: false },
                    { text: "Valencia", isCorrect: true },
                    { text: "Deportivo La Coruña", isCorrect: false }
          ]
  },
  {
        numb: 12,
        questions: "What is the official fee we got when we sold Raphina to Barcelona (in pounds)?",
        answer: [  { text: "£60,000,000", isCorrect: false },
                    { text: "£58,000,000", isCorrect: false },
                    { text: "£50,000,000", isCorrect: false },
                    { text: "£55,000,000", isCorrect: true }
          ]
  },
  {
        numb: 13,
        questions: "How many Leeds players have been inducted into the English football Hall of fame?",
        answer: [  { text: "11", isCorrect: true },
                    { text: "8", isCorrect: false },
                    { text: "10", isCorrect: false },
                    { text: "12", isCorrect: false }
          ]
  },
  {
        numb: 14,
        questions: "During the 1960s what team inspired Revie to change our colours?",
        answer: [  { text: "Juventus", isCorrect: false },
                    { text: "Lyon", isCorrect: false },
                    { text: "Schalke 04", isCorrect: false },
                    { text: "Real Madrid", isCorrect: true }
          ]
  },
  {
        numb: 15,
        questions: "What team did we beat in the FA Cup final 1972?",
        answer: [  { text: "Tottenham", isCorrect: false },
                    { text: "Liverpool", isCorrect: false },
                    { text: "Arsenal", isCorrect: true },
                    { text: "Derby", isCorrect: false }
          ]
  },
  {
        numb: 16,
        questions: "How many goals did Patrick Bamford score during the 20/21 season back in the Premier League?",
        answer: [  { text: "18", isCorrect: false },
                    { text: "15", isCorrect: false },
                    { text: "16", isCorrect: false },
                    { text: "17", isCorrect: true }
          ]
  },
  {
        numb: 17,
        questions: "What team did Marcelo Bielsa coach before Leeds United?",
        answer: [  { text: "Lazio", isCorrect: false },
                    { text: "Lille", isCorrect: true },
                    { text: "Marseille", isCorrect: false },
                    { text: "Athletic Bilbao", isCorrect: false }
          ]
  },
  {
        numb: 18,
        questions: "What position had former Leeds coach David O'Leary as a player?",
        answer: [  { text: "Right back", isCorrect: false },
                    { text: "Midfielder", isCorrect: false },
                    { text: "Centre back", isCorrect: true },
                    { text: "Left back", isCorrect: false }
          ]
  },
  {
        numb: 19,
        questions: "In 2022 The Old Peacock pub changed its name temporarily to what?",
        answer: [  { text: "The Dallas", isCorrect: false },
                    { text: "The Bamford", isCorrect: false },
                    { text: "Marching On", isCorrect: false },
                    { text: "The Bielsa", isCorrect: true }
          ]
  },
  {
        numb: 20;
        questions: "Which shirt manufacturer did we have before Adidas took over 2020?",
        answer: [  { text: "Diadora", isCorrect: false },
                    { text: "Admiral", isCorrect: false },
                    { text: "Macron", isCorrect: false },
                    { text: "Kappa", isCorrect: true }
          ]
  }];