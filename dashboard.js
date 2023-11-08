document.addEventListener("DOMContentLoaded", () => {
    const userStatus = document.getElementById("user-status");
    const loginButton = document.getElementById("login-button");
    const userDropdownButton = document.getElementById("user-dropdown-button");
    const logoutButton = document.getElementById("logout-button");
    const createReviewButton = document.getElementById("create-review-button");
    const createReviewOptions = document.getElementById("create-review-options");

    // Simulate user login
    const simulateUserLogin = () => {
        // Replace this with your actual authentication logic
        return true; // For testing purposes, assume the user is not logged in
    };

    // Function to toggle the visibility of login and user dropdown
    const toggleLoginButton = () => {
        const isLoggedIn = simulateUserLogin();

        if (isLoggedIn) {
            userStatus.style.display = "block";
            loginButton.style.display = "none";
            createReviewButton.style.display = "block"; // Show the button if the user is logged in
        } else {
            userStatus.style.display = "none";
            loginButton.style.display = "block";
            createReviewButton.style.display = "none"; // Hide the button if the user is not logged in
        }
    };

    // Function to handle the login button click
    loginButton.addEventListener("click", () => {
        // Redirect to the login screen (firstiteration.html)
        window.location.href = "FirstIteration.html";
    });

    // Function to toggle the visibility of the "Create a Review" options
    const toggleCreateReviewOptions = () => {
        createReviewOptions.style.display = createReviewOptions.style.display === "none" ? "block" : "none";
    };

    // Add event listeners
    createReviewButton.addEventListener("click", () => {
        toggleCreateReviewOptions();
    });

    toggleLoginButton(); // Call this to initialize the buttons

    // You can add more functionality for user dropdown, logout, and review creation.
});
