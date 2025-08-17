let prefersLight = window.matchMedia("(prefers-color-scheme: light)");
let prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
let prefersHC = window.matchMedia("(prefers-contrast: more)");
/* the previous 3 lines are used to ascertain whether the user has a preference
 * for light mode normal contrast, light mode high contrast, dark mode high
 * contrast, or dark mode normal contrast when paired with ".matches"
 */

window.onload = function() {
    if (window.matchMedia && prefersLight.matches && prefersHC.matches) {
        document.body.classList.add("lightmodehc");
    } else if (window.matchMedia && prefersLight.matches && !prefersHC.matches) {
        document.body.classList.add("lightmodehc");
    } else if (window.matchMedia && prefersDark.matches && prefersHC.matches) {
        document.body.classList.add("darkmodehc");
    } else {
        document.body.classList.add("darkmode");
    }
};
/* if user wants a light, high contrast theme
 *     add "lightmodehc" to body
 * else if user wants a light, non-high contrast theme
 *     add "lightmode" to body
 * else if user wants a dark, high contrast theme
 *     add "darkmodehc" to body
 * else
 *     add "darkmode" to body
 * end
 * these color/contrast themes are all defined in ../css/stylesheet.css from
 * lines 68-101
 */