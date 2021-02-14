/*Navbar Animations*/
let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav-links');
let links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade');
    })
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle('fade');
        })
    })
});


/*Cursor Animations*/
let mouseCursor = document.querySelector(".cursor");
let anchorLinks = document.querySelectorAll('.nav-links li a');
let spanTitle = document.querySelectorAll('.welcome-title span');
let cloudArea = document.querySelectorAll('.could-area');
let infoSection = document.querySelector('.info');
let countdownSection = document.querySelector('.countdown');
let competeSection = document.querySelector('.compete');
let swagsSection = document.querySelector('.swags');
let leaderboardSection = document.querySelector('#leaderboard');
let teamSection = document.querySelector('.our-team');
let footerSection = document.querySelector('.footer')

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

anchorLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('mouseover');
        link.classList.add('mouseleave');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add('mouseover');
        link.classList.remove('mouseleave');
    });
});

spanTitle.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('welcome-title-grow');
        link.classList.remove('hovered-welcome-title');
        link.classList.add('mouseleave');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('welcome-title-grow');
        link.classList.add('hovered-welcome-title');
        link.classList.remove('mouseleave');
    });
});

cloudArea.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cloud-animate');
        link.classList.remove('mouseleave');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cloud-animate');
        link.classList.add('mouseover');
    });
});

swagsSection.addEventListener('mouseover', () => {
    swagsSection.classList.add('change-test');
    mouseCursor.classList.add('set-white');
});

swagsSection.addEventListener('mouseleave', () => {
    swagsSection.classList.add('change-test');
    mouseCursor.classList.remove('set-white');
});

competeSection.addEventListener('mouseover', () => {
    competeSection.classList.add('change-test');
    mouseCursor.classList.add('set-white');
});

competeSection.addEventListener('mouseleave', () => {
    competeSection.classList.add('change-test');
    mouseCursor.classList.remove('set-white');
});

infoSection.addEventListener('mouseover', () => {
    infoSection.classList.add('change-test');
    mouseCursor.classList.add('set-white');
});

infoSection.addEventListener('mouseleave', () => {
    infoSection.classList.add('change-test');
    mouseCursor.classList.remove('set-white');
});

countdownSection.addEventListener('mouseover', () => {

    mouseCursor.classList.add('set-wheat');
});

countdownSection.addEventListener('mouseleave', () => {
    teamSection.classList.remove('mouseleave');
    mouseCursor.classList.remove('set-wheat');
});

footerSection.addEventListener('mouseover', () => {

    mouseCursor.classList.add('team-work');
    teamSection.classList.add('mouseover');
});

footerSection.addEventListener('mouseleave', () => {
    teamSection.classList.add('mouseleave');
    mouseCursor.classList.remove('team-work');
});

leaderboardSection.addEventListener('mouseover', () => {
    mouseCursor.classList.add('leaderboardcursor');
    teamSection.classList.add('mouseover');
});
leaderboardSection.addEventListener('mouseleave', () => {
    teamSection.classList.add('mouseleave');
    mouseCursor.classList.remove('leaderboardcursor');
});

teamSection.addEventListener('mouseover', () => {
    mouseCursor.classList.add('teamcursor');
    teamSection.classList.add('mouseover');
});
teamSection.addEventListener('mouseleave', () => {
    teamSection.classList.add('mouseleave');
    mouseCursor.classList.remove('teamcursor');
});




/*Partical Js*/

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);