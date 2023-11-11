document.addEventListener("DOMContentLoaded", () => {
    const userStatus = document.getElementById("user-status");
    const loginButton = document.getElementById("login-button");
    const userDropdownButton = document.getElementById("user-dropdown-button");
    const logoutButton = document.getElementById("logout-button");
    const createReviewButton = document.getElementById("create-review-button");
    const createReviewOptions = document.getElementById("create-review-options");
    const profileButton = document.getElementById("profile-button");
    const wantToLeaveReviewButtons = document.querySelectorAll(".review-button");
    const postReviewButton = document.getElementById("post-review-button");

    // Simulate user login
    const simulateUserLogin = () => {
        // Replace this with your actual authentication logic
        return true; // For testing purposes, assume the user is not logged in
    };

    // Function to toggle the visibility of login, user dropdown, and create review button
    const toggleButtonsVisibility = () => {
        const isLoggedIn = simulateUserLogin();

        if (isLoggedIn) {
            userStatus.style.display = "block";
            loginButton.style.display = "none";
            createReviewButton.style.display = "block";
        } else {
            userStatus.style.display = "none";
            loginButton.style.display = "block";
            createReviewButton.style.display = "none";
        }
    };

    // Function to handle profile button click
    const handleProfileButtonClick = () => {
        // Redirect to the profile page
        window.location.href = "profile.html";
    };

    // Function to toggle the visibility of the "Create a Review" options
    const toggleCreateReviewOptions = () => {
        createReviewOptions.style.display = createReviewOptions.style.display === "none" ? "block" : "none";
    };

    // Function to handle "Want to leave a review?" button click
    const handleWantToLeaveReviewButtonClick = () => {
        toggleCreateReviewOptions();
    };

    // Function to handle "Post Your Review" button click
    const handlePostReviewButtonClick = () => {
        // Perform any necessary actions for posting a review

        // Hide the "Create a Review" options
        createReviewOptions.style.display = "none";
    };

    // Function to handle login button click
    const handleLoginButtonClick = () => {
        // Redirect to the login page (firstiteration.html)
        window.location.href = "firstiteration.html";
    };

    // Add event listeners
    profileButton.addEventListener("click", handleProfileButtonClick);
    createReviewButton.addEventListener("click", () => {
        toggleCreateReviewOptions();
    });

    wantToLeaveReviewButtons.forEach(button => {
        button.addEventListener("click", handleWantToLeaveReviewButtonClick);
    });

    postReviewButton.addEventListener("click", handlePostReviewButtonClick);
    loginButton.addEventListener("click", handleLoginButtonClick); // Add this line

    toggleButtonsVisibility(); // Call this to initialize the buttons

    // You can add more functionality for user dropdown, logout, and review creation.
});
