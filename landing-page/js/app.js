/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


//Define Global Variables
const sections = document.querySelectorAll('section');
const landingPageSections = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// for each loop that loops through each section creating a list and a link to append into the ul
function Lists(){
sections.forEach((section)=> {
    //creating links and lists
    let name = document.createElement('li');
    let link = document.createElement('a');
    //getting the text content from the section attribute
    link.textContent= section.dataset.nav;
    //putting the link into the name
    name.appendChild(link);
    //putting the name with the link in it to the navbar
    landingPageSections.appendChild(name);
    //listens for a click
    link.addEventListener('click', (e) => {
        //prevents defult from happening
        e.preventDefault(); 
        //smooth scrolling function
        section.scrollIntoView({behavior: 'smooth'}); 
    });
});
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


//checking if the section is in viewport then making it active if ttue
function active(){
    for (const section of sections){
        const area = section.getBoundingClientRect();
        if (area.top <= 150 && area.bottom >= 150){
            section.classList.add("your-active-class");
        } else {
            section.classList.remove('your-active-class');
        }
    }
}




//listens for a scrool to activite/call the function above
document.addEventListener("scroll", function() {
    active();
  });

  




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
Lists();

// Scroll to section on link click

// Set sections as active




