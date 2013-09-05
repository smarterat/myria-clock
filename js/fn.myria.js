/* 
 * Extra functions to enable the myria clock
 * at http://frqnc.net/code/myria-clock.
 */

// Globals
var myria_OUT;
var myria_PRO;

// Display and loop the clock
function myria_Display() {
  var loop = setTimeout(function () {
    // Get the current myria time
    var myria_now = myriaseconds.now();

    // Split the time into an array
    var myria_ary = myria_now.toString().split("");

    // Separate the hours from the seconds
    var myria_hrs = myria_ary.slice(0, 4).join("").replace(/,/g, "");
    var myria_sec = myria_ary.slice(4, 6).join("").replace(/,/g, "");

    // Write the time
    myria_OUT.innerHTML = myria_hrs;

    // Set NProgress percentage
    NProgress.set(parseFloat(myria_sec / 100));

    // Time of day gradient
    var thatscheating = new Date().getHours();
    myria_PRO.className = "t" + thatscheating.toString();

    // Loop the function
    myria_Display();

  }, 1000);
}

window.onload = function() {
  // Initialize globals
  myria_OUT = document.getElementById("myrOut");
  myria_PRO = document.getElementById("myrPro");

  // Start the clock
  myria_Display();
}