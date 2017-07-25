use(function () {
	var containerDiv = document.getElementById("tbContainer"),
    url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms",
    options = {
        hideTabs: true,
        onFirstInteractive: function () {
            console.log("Run this code when the viz has finished loading.");
        }
    };

    var viz = new tableau.Viz(containerDiv, url, options); 

    return {
        embed: viz
    };
});