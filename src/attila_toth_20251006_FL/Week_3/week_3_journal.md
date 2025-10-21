# Week 3 Journal

## Reflections

- **Day 1:**  
  _I read the concept of the game in advance so today I could start the implementation with an idea in mind._
  _I decided to implement the board as a simple array, where I already replace the numbers on the indices affected by a ladder bottom or a snake head to represent the slides._
  _I was not sure if I should add a Board class or just two Players, so I started to write the test cases, to see which one I actually need._
  _Some of the rules already work, I am confident the approach works and I can reach a near complete solution tomorrow._

- **Day 2:**  
  _I have started the day by looking at the implementation from yesterday and realized the Game class has no significant relevance, if time would not be an issue it could be added, to keep a separate application layer, but it is not necessarily needed._
  _I was focusing on separating the concerns of the players and the gameState. I ended up moving the whole calculation of the playerState message into the Player class, so the Parent is only responsible for checking if the game is over and alternating the players._
  _The play method is still not completely clean but it looks better than yesterday. I still need to implement the last rule to calculate the positions backwards if the result would be more than a 100._
  _Copilot was very helpful today, basically re-created all the tests from yesterday with a TAB, which helped me with the time.._
  _I have to confess I copied over the defaultSquares constant, otherwise I had no time to improve much compared to yesterday._

- **Day 3:**  
  _Write your reflection here._

- **Day 4:**  
  _Write your reflection here._

- **Day 5:**  
  _Write your reflection here._