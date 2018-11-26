$(document).ready(function () {

// This is the first buttons functionality as well as the ajax that calls on the user search data    
$(".button01").on("click", function(event) {
    event.preventDefault();

    var resultsData = $(this).attr("data");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + resultsData + "&api_key=zz4jHlgv2m2yKDgr63yd7o0E94HWtPO1&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data;

// Looping the results and allowing the gifs to show on the page 
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(p);
            gifDiv.append(gifImage);
            $("#gifGoesHere").prepend(gifDiv);
        }
    })
})
    
})


