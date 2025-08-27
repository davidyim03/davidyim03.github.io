## Overview
AI Checkers is an automated Checkers game in which the opposing player is an AI agents that make decisions using the Minimax algorithm enhanced with Alpha-Beta Pruning. The goal of this project was to explore adversarial search algorithms and see how they perform in a real-time, visually interactive setting. 

The goal was to build a Checkers engine that I could eventually play against — ideally one that could outperform me — by applying the  algorithms I've learned in class.

## Technicals
* **Python**: Core game logic, AI algorithms, and performance tuning
* **Pygame**: Rendering the game board, animating piece movement, and handling user interactions
* **Minimax Algorithm**: Recursive decision-making engine used to simulate optimal play
* **Alpha-Beta Pruning**: Optimization technique to reduce the number of nodes evaluated in the search tree

## Key Highlights
* **Strategic AI with Board Evaluation**: The AI evaluates each possible board state using a scoring function that considers piece count, king status, and advnacement potential.
* **Minimax-Powered Decision Making**: At the core of the AI is the Minimax algorithm, which simulates future game states to determine the most strategic move. It assumes that both players play optimally, which makes it ideal for adversarial games like Checkers.
* **Alpha-Beta Optimization**: Adding Alpha-Beta Pruning significantly improved performance, enabling the AI to simulate 5–6 moves ahead within a reasonable time frame.

## What I Learned
This project was a hands-on experience in how classical AI algorithms like Minimax and Alpha-Beta Pruning operate in applications. I gained a much stronger intuition for recursive problem solving and how search tree depth and branching affect performance. Most importantly, this project showed me how even foundational AI concepts can create functional and intelligent results — and how exciting it is to see those ideas come to life.



