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
