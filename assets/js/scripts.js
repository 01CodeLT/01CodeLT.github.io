/* -----------------------
    Name Writer Function
   ----------------------- */
const introElement = document.getElementById('intro');
const introText = "H+i+,+ +I+'+m+ +L+u+k+e+!".split('+');

// Loop through
let i = 0;
const writer = setInterval(() => {
    // Write text
    introElement.innerHTML = introText.slice(0, i+1).join('') + "<span class='fade-in-out'>|</span>";
    i++;

    // Stop?
    if(i === introText.length) {
        clearInterval(writer);
    }
}, 100);

/* -----------------------
    Timeline navigation
   ----------------------- */
document.querySelectorAll('.timeline .nav li').forEach(
    (timelineLink, index) => {
        timelineLink.addEventListener('click', () => {
            [
                '.timeline .nav li',
                '.timeline .content > div'
            ].forEach((elementQuery) => {
                // Reset all
                document.querySelectorAll(elementQuery).forEach((content) => {
                    content.classList.remove('active');
                })

                document.querySelectorAll(elementQuery)[index].classList.add('active')
            });
        });
    }
);