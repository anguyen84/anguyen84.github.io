const roleElement = document.getElementById('role');
const roles = ["Aspiring Software Developer"];
let index = 0;

function typeRole() {
    let role = roles[index];
    let letters = role.split('');
    let i = 0;

    // Clear previous animation classes
    roleElement.textContent = '';
    roleElement.style.visibility = 'visible';
    roleElement.classList.remove('blink');

    // Type out the role
    let typingInterval = setInterval(function() {
        if (i < letters.length) {
            roleElement.textContent += letters[i++];
        } else {
            clearInterval(typingInterval);
            roleElement.classList.add('blink');
            setTimeout(switchRole, 2000); // Blink for 2 seconds
        }
    }, 75); // Typing speed
}

function switchRole() {
    roleElement.style.visibility = 'hidden';
    index = (index + 1) % roles.length;
    setTimeout(typeRole, 500); // Wait for half a second before typing next role
}

// Start the typing animation
document.addEventListener('DOMContentLoaded', function() {
    typeRole();
});

function opentab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-contents");
    var y = document.getElementsByClassName("tab-links");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active-tab");
    }
    for (i = 0; i < y.length; i++) {
        y[i].classList.remove("active-link");
    }
    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}
// filters the skills
function filterSkills(category) {
    const buttons = document.querySelectorAll('.button');
    const skillBoxes = document.querySelectorAll('.skill-box');

    buttons.forEach(button => {
        if (button.dataset.category === category) {
            if (button.classList.contains('highlight')) {
                button.classList.remove('highlight');
                skillBoxes.forEach(box => box.classList.remove('filtered-out'));
            } else {
                buttons.forEach(btn => btn.classList.remove('highlight'));
                button.classList.add('highlight');
                skillBoxes.forEach(box => {
                    if (!box.classList.contains(category)) {
                        box.classList.add('filtered-out');
                    } else {
                        box.classList.remove('filtered-out');
                    }
                });
            }
        } else {
            button.classList.remove('highlight');
        }
    });
}

// Detect iOS and apply scroll background-attachment
if (/iP(hone|od|ad)/.test(navigator.userAgent)) {
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('#header').style.backgroundAttachment = 'scroll';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuItems = mobileMenu.querySelectorAll('a');

    // Function to open the mobile menu
    function openMenu() {
        mobileMenu.classList.add('visible');
        menuButton.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Function to close the mobile menu
    function closeMenu() {
        mobileMenu.classList.remove('visible');
        menuButton.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
    }

    // Event listener for the menu button click
    menuButton.addEventListener('click', function() {
        if (mobileMenu.classList.contains('visible')) {
            closeMenu(); // Close menu if already open
        } else {
            openMenu(); // Open menu if closed
        }
    });

    // Event listener for menu item clicks to close menu and scroll to section
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function(event) {
            // Close menu
            closeMenu();

            // Smooth scroll to section
            const targetId = menuItem.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault(); // Prevent default anchor behavior
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close the menu when the page loads on mobile devices
    function closeMenuOnLoad() {
        if (window.innerWidth <= 768) {
            closeMenu();
        }
    }

    // Check on initial load and resize
    closeMenuOnLoad();
    window.addEventListener('resize', closeMenuOnLoad);
});

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Adjust threshold as needed
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const target = document.querySelector('.about-col-1');
    observer.observe(target);
});
