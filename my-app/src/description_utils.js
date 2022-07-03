export function mapNametoTitle(name){
    switch (name) {
        case "pacman":
            return "Pac-Man"
        case "frigo":
            return "Frigo"
        case "tripplanner":
            return "Trip Planner"
        case "goodnewspartners":
            return "Good News Partners"
        case "bearroom":
            return "BearRoom"
        default:
            return ""
    }
}

export function mapNametoDescription(name){
    switch (name) {
        case "pacman":
            return "Recreation of the classic arcade game Pac-Man"
        case "frigo":
            return "Cooking made easier with recipe suggestions based on ingredients"
        case "tripplanner":
            return "Trip planning API providing routing and searching services"
        case "goodnewspartners":
            return "Case management system for Good News Parters Chicago to reduce paperwork and provide user metrics"
        case "bearroom":
            return "A board game platform that makes them more accessible digitally"
        default:
            return ""
    }
}