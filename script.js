function greetUser() {
    try {
        const userName = prompt("Please enter your name:");
        if (!userName) {
            throw new Error("No name provided");
        } else {
            alert(`Hello, ${userName}! Welcome to our website.`);
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
        alert("An error occurred while trying to greet you. Please try again.");
    }
}

greetUser();