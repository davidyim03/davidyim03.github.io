## Overview
Frigo is a smart kitchen companion designed to reduce food waste and improve meal planning by helping users make the most of what they already have. Built during the WildHacks 2022 hackathon, Frigo allows users to input available ingredients and receive tailored recipe suggestions in real time. The project was awarded Best Design, thanks to its clean user experience and practical real-world utility.

The concept was born from a simple but common frustration: you look into your fridge, see random ingredients, and still feel like you have nothing to cook. Frigo solves that by combining a well-structured ingredient database, a smart search algorithm, and a clean API to return useful meal ideas instantly.

## Technologies Used
* **Flask**: Backend framework for serving recipe data through a custom REST API
* **PostgreSQL**: Relational database to store a large recipe dataset (~250,000+ rows)
* **Heroku Postgres**: Cloud-hosted deployment for fast and persistent database access
* **Python**: API and database processing scripts
* **Figma (Design Only)**: Used during the hackathon to prototype a smooth and intuitive user interface

## My Role
Responsible for the backend, I developed the core logic and infrastructure for Frigo’s recommendation system. I processed a large CSV-based recipe dataset and designed a PostgreSQL schema to store and retrieve information. I also built the REST API in Flask, enabling users to query recipes based on their available ingredients and dietary preferences. To ensure speed and relevance, I implemented a search algorithm that filters recipe results based on partial ingredient matches and ranks them by coverage and simplicity.

## Key Highlights
* **Ingredient-Based Recipe Matching**: Users input what’s in their fridge, and Frigo returns the most relevant recipes based on overlap and availability.
* **Efficient Data Handling**: Parsed and cleaned a large dataset of recipes and ingredients (~250k entries) and normalized it into a scalable relational structure.
* **Custom Search Algorithm**: Designed and implemented an algorithm that ranks recipes by how well they match user inputs, optimizing both coverage and ease of preparation.
* **RESTful API Architecture**: Built a clean and extensible backend structure for potential expansion to mobile.

## What I Learned
Frigo was not only a technical challenge but also a crash course in rapid, collaborative development. Working alongside a team of four over a single hackathon weekend, I learned how to divide responsibilities efficiently, communicate effectivly, and adapt fast when our initial plans didn’t align with the dataset or time constraints. We had to prioritize quickly, focusing on creating a minimum viable product that worked reliably and delivered real value.

On the technical side, I deepened my skills in data processing and relational database design, especially when working with messy, large-scale CSV data. I also gained practical experience in building and deploying a REST API that had to serve real-time, query-based responses with low latency. Just as important was aligning backend development with frontend design — making sure the data we provided was structured in a way that made sense to users.



