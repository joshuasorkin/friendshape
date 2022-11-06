# FriendShape

FriendShape is a game in which players connect with each other to form edges in a social graph, in order to draw a graph that represents a picture.

A slide deck describing gameplay is found at:
https://docs.google.com/presentation/d/1EtmX0DP52wGDoazNVlYlzpx7S-7hC8xPgD016TcjmeM/edit?usp=sharing

## Gameplay

One or more players begin with a goal in the form of a graph, and a unique ID for this goal.  To form an edge, a player sends a message via XMTP to another player with the goal ID.  If the other player responds with the same goal ID, an edge is created.  The aim is to encourage players to meet new people and deepen their relationships with existing friends, so that they can form the necessary edges to build the goal.  Players win by creating a graph that is topologically equivalent to the goal.  Once they win, they become a DAO which collectively owns an NFT commemorating their victory.

