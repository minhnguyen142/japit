window.onbeforeunload = function () 
{
    window.scrollTo(0, 0);
}

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('audio').play();
    document.removeEventListener('click', musicPlay);
}

window.addEventListener('scroll', reveal)

function reveal()
{
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++)
    {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint)
        {
            reveals[i].classList.add('active');
        }
    }
}
