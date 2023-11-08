$(document).ready(function () {
    // Sample data for demonstration
    const professors = [
        { name: "Professor 1", course: "Course A" },
        { name: "Professor 2", course: "Course B" },
        { name: "Professor 3", course: "Course C" },
        // Add more data as needed
    ];

    const searchInput = $("#search-bar");
    const resultsContainer = $(".all-container");

    // Function to filter professors based on the search input
    function filterProfessors(query) {
        return professors.filter((professor) => {
            return (
                professor.name.toLowerCase().includes(query.toLowerCase()) ||
                professor.course.toLowerCase().includes(query.toLowerCase())
            );
        });
    }

    // Function to update the displayed results
    function updateResults(query) {
        const filteredProfessors = filterProfessors(query);

        resultsContainer.empty();

        if (filteredProfessors.length > 0) {
            filteredProfessors.forEach((professor) => {
                const resultItem = $("<div class='review'>").html(
                    `<div class='review-header'>
                        <div class='professor-info'>
                            <p>${professor.name}</p>
                            <p>Course: ${professor.course}</p>
                        </div>
                    </div>`
                );

                resultsContainer.append(resultItem);
            });
        } else {
            resultsContainer.text("No results found.");
        }
    }

    // Search input event listener
    searchInput.on("input", function () {
        const query = $(this).val();
        updateResults(query);
    });
});
