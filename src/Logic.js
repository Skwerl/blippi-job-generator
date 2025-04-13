export const QUESTIONS = [
    {
        header: "Question 1",
        question: "What is your favorite place to play?",
        choices: [
            {
                label: "Inside",
                style: {
                    backgroundImage: "url('/images/bg-inside.jpg')",
                }
            },
            {
                label: "Outside",
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
                style: {
                    color: "#fff",
                    backgroundColor: "red"
                }
            },
            {
                label: "White",
                class: "no-shadow",
                style: {
                    color: "#000",
                    backgroundColor: "#fff"
                }
            },
            {
                label: "Blue",
                style: {
                    color: "#fff",
                    backgroundColor: "blue"
                }
            },
            {
                label: "Orange",
                style: {
                    color: "#fff",
                    backgroundColor: "orange"
                }
            },
            {
                label: "Purple",
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
                style: {
                    fontSize: "0.5em",
                    backgroundImage: "url('/images/bg-construction.jpg')",
                }
            },
            {
                label: "Monster Truck Song",
                style: {
                    fontSize: "0.5em",
                    backgroundImage: "url('/images/bg-monstertruck.jpg')",
                }

            },
            {
                label: "Fire Truck Song",
                style: {
                    fontSize: "0.5em",
                    backgroundImage: "url('/images/bg-firetruck.jpg')",
                }

            },
            {
                label: "Blippi Wiggle",
                style: {
                    fontSize: "0.5em",
                    backgroundImage: "url('/images/bg-wiggle.jpg')",
                }

            }
        ]
    },
];

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