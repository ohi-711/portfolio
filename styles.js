window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementsByClassName("navbar").getElementsByClassName("logo").style.font-size = '20pt';
    } 
    else {
        document.getElementsByClassName("navbar").getElementsByClassName("logo").style.font-size = '25pt';
    }
}