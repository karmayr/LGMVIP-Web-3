function displayData() {
    const form = document.getElementById("myForm");
    const output = document.getElementById("output");
    const dataContainer = document.querySelector(".data-container");

    // Get form data
    const formData = new FormData(form);
    let data = "<h2>Form Data:</h2>";

    for (const pair of formData.entries()) {
        if (pair[0] === "image") {
            data += "<img src='" + pair[1] + "' alt='Selected Image' style='max-width: 100px; height: auto;'><br>";
        } else {
            data += pair[0] + ": " + pair[1] + "<br>";
        }
    }

    // Create a new div element for each submission
    const submissionDiv = document.createElement("div");
    submissionDiv.className = "submission";
    submissionDiv.innerHTML = data;

    // Append the new submission to the output container
    output.appendChild(submissionDiv);

    // Clear the form after submission
    form.reset();

    // Animate the data container using GSAP
    gsap.from(dataContainer, { y: -100, duration: 0.5, ease: "power2.out", opacity: 0 });
}
