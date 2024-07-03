document.getElementById('UserForm').addEventListener('submit', function (event) {
    /* `event.preventDefault();` is a method in JavaScript that stops the default behavior of an event
    from occurring. In this specific code snippet, it is used within an event listener for a form
    submission (`submit` event). By calling `event.preventDefault();`, the form submission is
    prevented from triggering a page reload or any other default action associated with form
    submission. This allows the JavaScript code to handle the form data submission in a custom way
    without the default browser behavior interfering. */
    event.preventDefault();


    /* These lines of code are retrieving the input values from specific form fields in an HTML
    document. Here's a breakdown of what each line is doing: */
    const firstNameInput = document.getElementById('firstName').value.trim();
    const secondNameInput = document.getElementById('secondName').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const birthYearInput = document.getElementById('birthYear').value.trim();

    /* The lines `const firstName = cleanAndFormateName(firstNameInput);` and `const secondName =
    cleanAndFormateName(secondNameInput);` are calling a function named `cleanAndFormateName` with
    the input values `firstNameInput` and `secondNameInput` respectively. */
    const firstName = cleanAndFormateName(firstNameInput);
    const secondName = cleanAndFormateName(secondNameInput);

    /* The line `let email = emailInput.replace(/\s+/g, '');` is removing any whitespace characters
    (spaces, tabs, etc.) from the `emailInput` string. */
    let email = emailInput.replace(/\s+/g, '');

    /* This block of code is performing validation checks on the email input to ensure it meets certain
    criteria. Here's a breakdown of each condition: */
    if (!email.includes('@')) {
        email = `not valid email <b>${email}</b> (symbol @ not exist)`;
    } else if (email.startsWith('@')) {
        email = `not valid email <b>${email}</b> (symbol @ at the start)`;
    } else if (email.endsWith('@')) {
        email = `not valid email <b>${email}</b> (symbol @ at the end)`;
    } else if (!/\.[a-zA-Z]{2,}$/.test(email)) {
        email = `not valid email <b>${email}</b> (missing valid domain)`;
    }

    /* The code snippet `let birthYear = birthYearInput.replace(/\s+/g, ''); let age;` is performing the
    following actions: */
    let birthYear = birthYearInput.replace(/\s+/g, '');
    let age;

    /* The line `const currentYear = new Date().getFullYear();` is creating a new Date object and then
    calling the `getFullYear()` method on that object to retrieve the current year. This line of
    code essentially stores the current year as a constant value in the variable `currentYear`. */
    const currentYear = new Date().getFullYear();

    /* This block of code is responsible for validating the input `birthYear` value. Here's a breakdown
    of what it does: */
    if (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
        birthYear = `not valid birth year <b>${birthYear}</b>`
    }
    else {
        age = currentYear - birthYear;
    }

    /* `const userDataDiv = document.getElementById('userData');` is retrieving a reference to an HTML
    element with the id 'userData' from the document. This line of code assigns this element to the
    variable `userDataDiv`, allowing further manipulation of its content or properties using
    JavaScript. In this specific context, it is likely that the element with id 'userData' is
    intended to display user data or information collected from a form submission. */
    const userDataDiv = document.getElementById('userData');

    /* The `userDataDiv.innerHTML` assignment is setting the HTML content of the element referenced by
    `userDataDiv`. It is dynamically generating a list (`<ul>`) with user data based on the form
    inputs and variables processed in the JavaScript code. Here's a breakdown of what each line
    inside the backticks is doing: */
    userDataDiv.innerHTML = `
    <ul>
    <li>Ім'я: ${firstName}</li>
    <li>Прізвище: ${secondName}</li>
    <li>Email: ${email}</li>
    <li>Вік: ${age}</li>
    </ul>
    `
});

/**
 * The function `cleanAndFormateName` takes a name as input, cleans it by capitalizing the first letter
 * of each word and lowercasing the rest, and then formats it with hyphens between words.
 * @param name - The function `cleanAndFormateName` takes a name as input and cleans and formats it by
 * capitalizing the first letter of each word and converting the rest of the letters to lowercase. The
 * function then joins the words with a hyphen (-) and returns the formatted name.
 * @returns The function `cleanAndFormateName` takes a name as input, splits it by spaces or hyphens,
 * capitalizes the first letter of each word, converts the rest of the letters to lowercase, and then
 * joins the words back together with hyphens. The function returns the formatted name.
 */
function cleanAndFormateName(name) {
    return name
        .split(/\s+|-/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('-');
}
