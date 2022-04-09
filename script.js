/* 
    Here is how this thing is going to be built:
        1. We are going to use a function to append a set number of divs to grid container div
        2. Each of those child divs are going to be styled minimally as defined by the linked
        style sheet.
        3. There will be an onpage input field to get the user defined grid size.
*/

// TODO: Create references to manipulate the DOM and add the function that will add the divs to .container

// The grid items style rules are defined by the function that creates them.

// When the function is called and the grid items are created the styles of grid-tm-rs and -col will be added
// according to the given arguments [DONE]

const div = document.querySelector('.container');


div.setAttribute('style', `grid-template-columns: repeat(${3},1fr); grid-template-rows: repeat(${3},2fr`);

