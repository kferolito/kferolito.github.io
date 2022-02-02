//nav menu
let headerLeft = document.getElementById("header-left");
let navigationBar = document.getElementById("navigation-bar-main");
let hamburgerMenu = document.getElementById("hamburger-menu");
//active link
let navLinks = document.getElementsByClassName("navigation-bar-link");
let mainSections = document.getElementsByClassName("main-section");
var currentHighlightedLink;

headerLeft.addEventListener("mouseover", navigationBarDisplay);
headerLeft.addEventListener("mouseout", navigationBarHide);

var decorateActiveLinkInterval = setInterval(decorateActiveLink, 50);

function navigationBarDisplay()
{
    navigationBar.style.transition = "0.4s";
    navigationBar.style.transform = "translate(0px)";
    navigationBar.style.opacity = "1.0";

    hamburgerMenu.style.transition = "0.4s";
    hamburgerMenu.style.transform = "rotate(90deg)";
}

function navigationBarHide()
{
    navigationBar.style.transition = "0.4s";
    navigationBar.style.transform = "translate(-50px)";
    navigationBar.style.opacity = "0";

    hamburgerMenu.style.transition = "0.4s";
    hamburgerMenu.style.transform = "rotate(0)";
}

function decorateActiveLink()
{
    for(i = 0; i < mainSections.length; i++)
    {
        if(mainSections[i + 1])
        {
          if(window.pageYOffset <= mainSections[i + 1].offsetTop - 700)
            {
                removeTextDecoration();
                navLinks[i].style.textDecoration = "underline 0.05em rgb(150, 73, 73)";
                currentHighlightedLink = navLinks[i];
                return;
            }
        }
        else
        {
            removeTextDecoration();
            navLinks[i].style.textDecoration = "underline 0.05em rgb(150, 73, 73)";
            currentHighlightedLink = navLinks[i];
            return;
        }
    }
}

function removeTextDecoration()
{
    if(currentHighlightedLink)
    {
        currentHighlightedLink.style.textDecoration = "none";
    }
}