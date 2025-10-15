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
  _The solution from yesterday was already ok, but I have the feeling I am done today :). I am happy with this result and honestly I don't think I can make it better._
  _I wanted to introduce new objects. Board makes sense, so GameOfLife can function as the application layer, Cell calculates it's next state._
  _I think I managed to improve on the calculate methods and the naming is more intention revealing. Everything is SRP and IOSP compliant._
  _The only cheating I've done is that I copied the "end to end" tests from yesterday, because if I have to write them again, then I cannot do anything else.._

- **Day 4:**  
  _Write your reflection here._

- **Day 5:**  
  _Write your reflection here._