$(document).ready(function () {
  initializeViz()
});

function initializeViz() {
var containerDiv = document.getElementById("tbContainer");
if(containerDiv) {
    url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms",
    options = {
        hideTabs: true,
        onFirstInteractive: function () {
            console.log("Run this code when the viz has finished loading.");
        }
    };
    var viz = new tableau.Viz(containerDiv, url, options);
    // Create a viz object and embed it in the container div.
  }
}
