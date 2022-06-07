window.onbeforeunload = function () 
{
    window.scrollTo(0, 0);
    behavior: smooth;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => 
{
    anchor.addEventListener('click', function (e) 
    {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView
        (
            {
            behavior: 'smooth'
            }
        );
    });
});

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
        else
        {
            reveals[i].classList.remove('active');
        }
    }
}

function openSlideMenu(){
    document.getElementById('side-menu').style.width = '45%';
    // document.getElementById('main').style.marginLeft = '250px';
  }

  function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    // document.getElementById('main').style.marginLeft = '0';
  }
