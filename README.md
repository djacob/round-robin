# round-robin
Web app that handles setting up and running tournaments of many types

### Players
* Player list stored in DB
* Players log in
* Option to set up tournament
* Players join tournament
* Potentially different roles for tournament admnins and read-only players
  * Admins can enter results, manage events
  * Players have read-only views but get notifications
    *  Players can submit comments, complaints, notify the tournament admin(s)
 
### Setting up a tournament
* Determine format
  * multiple rounds
  * each round can be a different format
  * rounds are seeded randomly or from previous round results/ranking
* Tournaments may need categories/sport/league/group/something so that results/rankings make sense
  * if the same DB is used for ping pong and dodgeball tournaments and the same player is in both they should have a separate rating for each sport/league/group
* Can send invites to players
  * can see who is currently logged in/online 

### Tournament
* Notifies players when it is their turn
* Allow either/any players to enter score for match
  * Players can contest scores if they were entered incorrectly
  * Scores can be updated/edited
* Notifies players of round and tournament results

### Post Tournament
* Save results to DB
* Track player rankings
  * Look at TrueSkill-like algorithms for ranking
* Show neat visualizations 
  * on a tournament basis
  * on a player basis
  * comparing players
