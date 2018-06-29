window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementsByClassName("navbar").getElementsByClassName("logo").style.font-size = '19pt';
        document.getElementsByClassName("navbar").style.background-color = '#4d4d4d';
        document.getElementsByClassName("dropdown").getElementsByClassName("dropbtn").style.background-color = '#4d4d4d';
        document.getElementsByClassName("dropdown").style.top = '5px';
        document.getElementsByClassName("navbar").getElementsByClassName("button").style.top = '5px';
    } 
    else {
        document.getElementsByClassName("navbar").getElementsByClassName("logo").style.font-size = '25pt';
        document.getElementsByClassName("navbar").style.background-color = 'transparent';
        document.getElementsByClassName("dropdown").getElementsByClassName("dropbtn").style.background-color = 'transparent';
        document.getElementsByClassName("dropdown").style.top = '17px';
        document.getElementsByClassName("navbar").getElementsByClassName("button").style.top = '17px';
    }
}