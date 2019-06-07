let numberOfUsers = 0;

function saveName() {
    //Create variables to store the html elements
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");

    // A variable to store usersCount input
    let usersCountInput = document.getElementById("usersCount");

    // Users table
    let usersTable = document.getElementById("usersTable");

    // Create a place to store name and email
    let name = nameInput.value;
    let email = emailInput.value;

    // Update number of users
    numberOfUsers++;

    // Update users count on the web page
    usersCountInput.value = numberOfUsers;

    let tableRow =
        "<tr>" +
        "<td>" + numberOfUsers + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + email + "</td>" +
        "</tr>";

    // Update users table
    usersTable.innerHTML += tableRow;

    // Clear the inputs
    nameInput.value = "";
    emailInput.value = "";
}
