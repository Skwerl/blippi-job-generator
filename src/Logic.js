export const QUESTIONS = [
    {
        header: "Question 1",
        question: "What is your favorite place to play?",
        choices: [
            {
                label: "Inside",
                class: "bigger",
                style: {
                    backgroundImage: "url('/images/bg-inside.jpg')",
                }
            },
            {
                label: "Outside",
                class: "bigger",
                style: {
                    backgroundImage: "url('/images/bg-outside.jpg')",
                }

            }
        ]
    },
    {
        header: "Question 2",
        question: "What is your favorite color to wear?",
        choices: [
            {
                label: "Red",
                class: "big-text",
                style: {
                    color: "#fff",
                    backgroundColor: "red"
                }
            },
            {
                label: "White",
                class: "big-text no-shadow",
                style: {
                    color: "#000",
                    backgroundColor: "#fff"
                }
            },
            {
                label: "Blue",
                class: "big-text",
                style: {
                    color: "#fff",
                    backgroundColor: "blue"
                }
            },
            {
                label: "Orange",
                class: "big-text",
                style: {
                    color: "#fff",
                    backgroundColor: "orange"
                }
            },
            {
                label: "Purple",
                class: "big-text",
                style: {
                    color: "#fff",
                    backgroundColor: "purple"
                }
            }
        ]
    },
    {
        header: "Question 3",
        question: "What is your favorite Blippi song?",
        choices: [
            {
                label: "Excavator",
                class: "push-bottom",
                style: {
                    fontSize: "0.5em",
                    backgroundImage: "url('/images/bg-construction.jpg')",
                }
            },
            {
                label: "Monster Truck Song",
                class: "push-bottom",
                style: {
                    fontSize: "0.5em",
                    backgroundImage: "url('/images/bg-monstertruck.jpg')",
                }

            },
            {
                label: "Fire Truck Song",
                class: "push-bottom",
                style: {
                    fontSize: "0.5em",
                    backgroundImage: "url('/images/bg-firetruck.jpg')",
                }

            },
            {
                label: "Blippi Wiggle",
                class: "push-bottom",
                style: {
                    fontSize: "0.5em",
                    backgroundImage: "url('/images/bg-wiggle.jpg')",
                }

            },
            {
                label: "Garbage Truck Song",
                class: "push-bottom",
                style: {
                    fontSize: "0.5em"
                }

            }
        ]
    },
];

export const RESULTS = {
    "Art Teacher": {
        description: "Art Teachers show students how to shape clay, mix paints, and add details to make art.",
        audio: "/audio/Art Teacher.wav"
    },
    "Astronaut": {
        description: "Astronauts fly rocket ships and use space suits to explore the moon.",
        audio: "/audio/Astronaut.wav"
    },
    "Construction Worker": {
        description: "Construction workers use trucks and tools to build something awesome!",
        audio: "/audio/Excavator.wav"
    },
    "Dancer": {
        description: "Dancers move their bodies to the rhythm of music and combine steps into a routine.",
        audio: "/audio/Dancer.wav"
    },
    "Doctor": {
        description: "Doctors use tests and medical instruments to make sure their patients are healthy.",
        audio: "/audio/Doctor.wav"
    },
    "Farmer": {
        description: "Farmers feed animals, give them exercise and a place to live. They are very caring!",
        audio: "/audio/Farmer.wav"
    },
    "Firefighter": {
        description: "Firefighters are brave and use a hose and ladder to rescue people.",
        audio: "/audio/Firefighter.wav"
    },
    "Grocery Worker": {
        description: "Grocery Workers help customers find groceries and check out grocery orders.",
        audio: "/audio/Grocer.wav"
    },
    "Monster Truck Driver": {
        description: "Monster Truck Drivers have special vehicles to put on a great show!",
        audio: "/audio/Monster Trucks.wav"
    },
    "Pizza Chef": {
        description: "Pizza chefs gather ingredients and follow a recipe to make delicious pizza.",
        audio: "/audio/Pizza.wav"
    }
};

export const getResult = (answers) => {
    let result;
    if (answers[0] === 0) {
        // Inside:
        switch (answers[1]) {
            // Colors:
            case 0: // Red
                result = "Pizza Chef";
                break;
            case 1: // White
                result = "Doctor";
                break;
            case 2: // Blue
                result = "Grocery Worker";
                break;
            case 3: // Orange
                result = "Dancer";
                break;
            case 4: // Purple
                result = "Art Teacher";
                break;
        }
        if (answers[2] === 3) result = "Dancer";
    } else {
        // Outside:
        switch (answers[1]) {
            // Colors:
            case 0: // Red
                result = "Firefighter";
                break;
            case 1: // White
                result = "Astronaut";
                break;
            case 2: // Blue
                result = "Farmer";
                break;
            case 3: // Orange
                result = "Construction Worker";
                break;
            case 4: // Purple
                result = "Monster Truck Driver";
                break;
        }
        if (answers[2] === 0) result = "Construction Worker";
        if (answers[2] === 1) result = "Monster Truck Driver";
        if (answers[2] === 2) result = "Firefighter";
    }
    return result;
}