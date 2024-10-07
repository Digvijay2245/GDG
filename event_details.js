document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('registerButton');
    const application = document.getElementById('application');
    const navBar = document.querySelector('.nav_register_placeholder');
    const navBara = document.querySelector('.nav_application_placeholder');
    const detailsBox = document.querySelector('.details_box');
    const registerButtonOffsetTop = registerButton.offsetTop;
    const applicationOffsetTop = application.offsetTop;

    

    window.addEventListener('scroll', function() {
        // Check if the page is scrolled beyond the register button's original position
        if (window.pageYOffset > applicationOffsetTop) {
            // Move the button to the navbar
            if (!navBara.contains(application)) {
                navBara.appendChild(application);
                document.getElementById("application").style.width = "30vw";
                document.getElementById("application").style.height = "7vh";
                document.getElementById("application").style.flexDirection = "row";
                document.getElementById("application").style.justifyContent = "space-evenly";
                document.getElementById("application").style.alignItems = "center";

                // document.getElementById("registerButton").style.backgroundColor = "white";
                // document.getElementById("registerButton").style.color = "black";
            }
        } else {
            // Move the button back to the original position in the details box
            if (!detailsBox.contains(application)) {
                detailsBox.appendChild(application);
                document.getElementById("application").style.width = "20vw";
                document.getElementById("application").style.height = "10vh";
                document.getElementById("application").style.flexDirection = "column";
                document.getElementById("application").style.justifyContent = "center";
                document.getElementById("application").style.alignItems = "flex-start---------------------";

                // document.getElementById("registerButton").style.backgroundColor = "white";
                // document.getElementById("registerButton").style.color = "black";
                
            }
        }
    });

    window.addEventListener('scroll', function() {
        // Check if the page is scrolled beyond the register button's original position
        if (window.pageYOffset > registerButtonOffsetTop) {
            // Move the button to the navbar
            if (!navBar.contains(registerButton)) {
                navBar.appendChild(registerButton);
                document.getElementById("registerButton").style.width = "10vw";
                // document.getElementById("registerButton").style.backgroundColor = "white";
                // document.getElementById("registerButton").style.color = "black";
            }
        } else {
            // Move the button back to the original position in the details box
            if (!detailsBox.contains(registerButton)) {
                detailsBox.appendChild(registerButton);
                document.getElementById("registerButton").style.width = "20vw";

                
            }
        }
    });

});
