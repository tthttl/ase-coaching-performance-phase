# Week 2 Journal

## Reflections

- **Day 1:**  
  _As under the link there was only the description of the game but no instructions on what to implement I searched for a Kata in google and found this one. Sounded simple enough to start with so I decided to implement it. https://codingdojo.org/kata/GameOfLife/._
  _I wanted to start with the test cases to make sure I understand the rules. Then I realized I still don't understand how the game shall work._
  _I started with a board which can be initialized with flexible sizes and was represented as a 2 dimensional array. But then I figured out, that it is easier to just input strings for rows and then parse them._
  _Also setting up the board is a pain if we always initialize it first. I decided that it is easier if the board can be setup to a certain starting state and the test should just calculate the next generation, because the game is also works like this._
  _Tomorrow I will try to continue this pattern and try to implement the first real tests._

- **Day 2:**  
  _I had to interpret the rules again, cause the question marks on the initial description page were confusing. I decided to use these rules: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life_
  _I am quite happy with the result, I managed to implement all the rules and the tests are passing._
  _calculateNextCellState could be refactored but with the consts and types it is already quite readable and the ifs are needed.
  _Copilot was more of an annoyance today than a helpful tool, it could only autofill the Directions const._

- **Day 3:**  
  _Write your reflection here._

- **Day 4:**  
  _Write your reflection here._

- **Day 5:**  
  _Write your reflection here._