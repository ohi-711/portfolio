"use strict";

// Scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar123").style.top = "0";
    } else {
        document.getElementById("navbar123").style.top = "-60px";
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
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
            <link rel="stylesheet" href="styles.css">
            <link rel="icon" type="image/png" href="logos/b.png" sizes="32x32">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        </head>

        `
    }
}


// Header (Navigation bar)
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="navbar" id="navbar123" style="z-index: 2;">
            <div class="button"><a href="blogs.html" style="color: #e6e6e6; text-decoration: none; padding: 15px 15px">Blog</a>
            </div>
            <div class="dropdown">
                <button class="dropbtn"><a href="clubs.html"
                        style="color: #e6e6e6; text-decoration: none; padding: 15px 0px">Extracurriculars</a>
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="toastmasters.html">Toastmasters</a>
                    <a href="ewb.html">Engineers Without Borders - High School / University of Toronto</a>
                    <a href="solarcar.html">Blue Sky Solar Racing Team - University of Toronto</a>
                    <a href="ilead.html">iLead The Game - University of Toronto</a>
                    <a href="deep.html">DEEP Summer Academy - High School / University of Toronto</a>
                    <a href="swim.html">Swimming and Lifeguarding - High School / City of Toronto</a>
                    <a href="weather.html">Hobbies</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn"><a href="projects.html"
                        style="color: #e6e6e6; text-decoration: none; padding: 15px 0px">Projects</a>
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
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
                    <a href="capstone.html">Capstone Project - Public Health Ontario</a>
                    <a href="thesis.html">Undergraduate Thesis - University of Toronto</a>
                    <a href="research.html">Transportation Modelling Research - University of Toronto</a>
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
				<a href="https://github.com/billyhsun"><i class="fab fa-github" aria-hidden="true"></i></a>
				<a href="https://www.linkedin.com/in/bill-yuan-hong-sun/"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
				<a href="https://devpost.com/billyhsun"><i class="fab fa-dev"></i></a>
                <a href="https://www.facebook.com/billyuanhong.sun"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
				<a href="https://www.instagram.com/billyhsun/"><i class="fab fa-instagram" aria-hidden="true"></i></a>
				<a href="mailto:billyuanhong.sun@mail.utoronto.ca"><i class="fas fa-envelope" aria-hidden="true"></i></a>
			</div>

			</p>
			<br><br>
		</div>

        `
    }
}

/* More links
<a href="https://angel.co/bill-sun-1"><i class="fab fa-angellist"></i></a>
<a href="https://stackoverflow.com/users/11026180/bill-sun"><i class="fab fa-stack-overflow"></i></a>
<a href="https://www.kaggle.com/billyhsun"><i class="fab fa-kaggle"></i></a>
<a href="https://twitter.com/byhsun"><i class="fab fa-twitter"></i></a>
<a href="https://thewanderingengineer.medium.com/"><i class="fab fa-medium-m"></i></a>
*/

customElements.define('main-head', Head);
customElements.define('main-header', Header);
customElements.define('main-footer', Footer);