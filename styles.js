"use strict";

// Scrolling
/*
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
        document.getElementById("navbar").style.display = "none";
    } else {
        document.getElementById("navbar").style.display = "initial";
    }
}
*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}


// Head
class Head extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <head>

            <!--Website Information -->
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="description" content="Bill Sun's Portfolio">
            <meta name="author" content="Bill (Yuan Hong) Sun">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
            <link rel="stylesheet" href="styles.css">
            <link rel="icon" type="image/png" href="logos/b.png" sizes="32x32">
        
        </head>

        `
    }
}


// Header (Navigation bar)
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="navbar" style="z-index: 2;">
            <div class="button"><a href="blogs.html" style="color: #e6e6e6; text-decoration: none; padding: 15px 15px">Blog</a>
            </div>
            <div class="dropdown">
                <button class="dropbtn"><a href="clubs.html"
                        style="color: #e6e6e6; text-decoration: none; padding: 15px 0px">Extracurriculars</a>
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="toastmasters.html">Toastmasters</a>
                    <a href="solarcar.html">Blue Sky Solar Racing Team, University of Toronto</a>
                    <a href="ewb.html">Engineers Without Borders, University of Toronto</a>
                    <a href="ilead.html">iLead The Game, University of Toronto</a>
                    <a href="deep.html">DEEP Summer Academy, University of Toronto</a>
                    <a href="fes.html">Future Engineers Society, Earl Haig Secondary School</a>
                    <a href="swim.html">Swimming and Lifeguarding</a>
                    <a href="weather.html">Earth Sciences Hobby Research</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn"><a href="projects.html"
                        style="color: #e6e6e6; text-decoration: none; padding: 15px 0px">Projects</a>
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="capstone.html">Undergraduate Capstone Project</a>
                    <a href="https://survey-demo.deepaffex.ai/login">Mental Health Questionnaire Website</a>
                    <a href="https://github.com/billyhsun/MusicGenre">Music Genre Classifier</a>
                    <a href="https://devpost.com/software/surroundsound-1u9ljk">Music Sharing App</a>
                    <a href="game.html">Boxhead Video Game</a>
                    <a href="parking.html">Parking Manager App Simulator</a>
                    <a href="aer201.html">Autonomous Pill Packaging Machine</a>
                    <a href="praxis.html">Engineering Design Course</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn"><a href="experience.html"
                        style="color: #e6e6e6; text-decoration: none; padding: 15px 0px">Experience</a>
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="pey.html">Data Science Software Developer - Nuralogix</a>
                    <a href="research.html">Transportation Modelling Research</a>
                    <a href="thesis.html">Undergraduate Thesis</a>
                </div>
            </div>
            <div class="button"><a href="overview.html" style="color: #e6e6e6; text-decoration: none; padding: 15px 15px">About
                    Me</a></div>
            <div class="logo">
                <h1 style="margin:1px;">
                    <a href="index.html" style="text-decoration: none;">bill.</a></h1>
            </div>
        </div>
        `
    }
}
  
// Footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
		<div class="footer">
			<br>

			<p style="margin-left: 2%;">
				<font color=#cccccc>Copyright 2018 © Bill Yuan Hong Sun</font>

			<div class="socialmedia">
				<a href="https://github.com/billyhsun"><img src="logos/github.png" alt="gh" width=30></a>
				<a href="https://www.linkedin.com/in/bill-yuan-hong-sun/"><img src="logos/linkedin.png" alt="li"
						width=30></a>
				<a href="https://angel.co/bill-sun-1"><img src="logos/angellist.png" alt="li" width=30></a>
				<a href="https://devpost.com/billyhsun"><img src="logos/devpost.png" alt="devpost" width=30></a>
				<a href="https://stackoverflow.com/users/11026180/bill-sun"><img src="logos/stackoverflow.png" alt="li"
						width=30></a>
				<a href="mailto:billyuanhong.sun@mail.utoronto.ca"><img src="logos/outlook.png" alt="mail" width=30></a>
			</div>

			</p>
			<br><br>
		</div>

        `
    }
}

customElements.define('main-head', Head);
customElements.define('main-header', Header);
customElements.define('main-footer', Footer);