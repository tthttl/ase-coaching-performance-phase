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
  _Today I also started the day by looking at the solution from yesterday and I identified some potential improvements. Maybe this is not the purpose of this training but I cannot help it, I want to reach feature completion, so I keep improving on my day 1 solution until I manage to finish the implementation, instead of trying out new approaches._
  _Now that I have a working solution which covers the whole functionality I might try a different approach tomorrow because it would be more of a challenge than improving the quality of the current approach, which is already ok enough._
  _In order to reach feature completion I had to abandon a few unit tests and focus on implementing the overflowing rolls._
  _I think my solution would be able to handle different board sizes, as I no longer check for 100 but for the length of the input squares. Unfortunately I had no time to write tests for this._
  _Responsibilities are clearly separated now between Snakes and Players. The play method could still be refactored though.._

- **Day 4:**  
  _Today I started the session with researching potential alternatives to my initial approach, which is apparently called: "dense portal array". Since it is considered one of the easiest ways to implement the sliding/climbing logic, I decided not to change it but instead write a converter which parses a different kind of input and creates the portal array for my existing implementation to use._
  _After creating the parser I realized it is not much of a help as it is still completely depending on the input type. Now I selected an array of tuples but it could be really anything. What I should have done is to supply the input in the constructor to the Parser/BoardCreator so that it is not a part of the parse method signature. It would allow for different parsers to be used._
  _Since I lost a ton of time implementing the defaultPortals array, I only had time for a rudimentary game implementation, so I can test that the portals work as expected. There are no players/game over/win check or anything this time._

- **Day 5:**  
  _Write your reflection here._