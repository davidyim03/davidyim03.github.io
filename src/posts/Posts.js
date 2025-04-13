import CampuStudyPost from '../posts/sample.md';
import CampuStudyImage from '../assets/img/campus.png'
import AiCheckersPost from '../posts/checkers.md';
import AiCheckersImage from '../assets/img/checkers.png'
import FrigoPost from '../posts/sample.md';
import FrigoImage from '../assets/img/frigo.jpg'
import GNPPost from '../posts/sample.md';
import GNPImage from '../assets/img/gnp.png'
import BoardHubPost from '../posts/sample.md';
import BoardHubImage from '../assets/img/boardhub.png'
import PacmanPost from '../posts/sample.md';
import PacmanImage from '../assets/img/pacman.png'



const Posts = [
    {
        title: "CampuStudy",
        description: "Designing a solution for students to share and rate their favorite study spots on campus",
        image: CampuStudyImage,
        content: CampuStudyPost,
        route: "campustudy"
    },
    {
        title: "AI Checkers",
        description: "Creation of an AI powered checker machine, using classical artificial intelligence algorithms and optimizations",
        image: AiCheckersImage,
        content: AiCheckersPost,
        route: "ai-checkers"
    },
    {
        title: "Frigo",
        description: "Northwestern Hackathon award-winning project - Cooking made easier with recipe suggestions based on whatever you got in your fridge",
        image: FrigoImage,
        content: FrigoPost,
        route: "frigo"
    },
    {
        title: "Good News Partners",
        description: "Case management system for Good News Parters Chicago to reduce paperwork and provide user metrics",
        image: GNPImage,
        content: GNPPost,
        route: "good-news-partners"
    },
    {
        title: "BoardHub",
        description: "Interactive baordgame project inspired from the boardgame Sushi Go",
        image: BoardHubImage,
        content: BoardHubPost,
        route: "boardhub"
    },
    {
        title: "Pac-Man",
        description: "Recreation of the classic arcade game Pac-Man, with AI pathfinding in place",
        image: PacmanImage,
        content: PacmanPost,
        route: "pacman"
    },
]

export default Posts;