## Overview
This project stemmed from my artificial intelligence class, where I learned the algorithms to traverse a multi agent game tree. 

The objective was to create a checkers engine that I would be able to play against (hopefully it plays better than me), by using the algorithms I've learned from class. 

## Technicals
The checkers engine was written in entirely Python, and I used the Minimax algorithm with Alpha-Beta Pruning for optmization, reachings depths of 10 future moves for decision making.

First I've created an algorithm to evaluate the game state for the minimax algorithm, as the min and max players will be evaluating thier future moves to minimize or maximize the outcome. Then the standard minimax algorithm was applied to see which move would result in the optimal result based on the search. 

By using the AB pruning optimization and cutting out inefficient game trees, I was able to slighty mitigate the horizon effect, alloing me to reach greater depth (or traverse same depth much faster: on same depth it resulted in running 71% faster).

Further imporvements could involve more significant pruning like quiescence searching to achieve greater depths and improve runtime.
## Demo