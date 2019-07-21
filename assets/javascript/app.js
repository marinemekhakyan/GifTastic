// $(document).ready(function(){ 

var topics = ["Developer", "Musician", "Artist", "Accountant", "Librarian", "Actor", "Scientist", "Teacher", "Gardener", "Lawyer", "Doctor", "Mechanic", "Unemployed"];

var button;
var newTopic = "";

// function to create new buttons from the topics array
var buttonGenerator = function () {
    // the previous div elements are emptied 
    $("#buttonArea").empty();
    // loops through the array and creates buttons
    for (i = 0; i < topics.length; i++) {
        button = $("<button type=" + "button" + ">" + topics[i] + "</button>").addClass("btn btn-warning").attr("data", topics[i]);
        $("#buttonArea").append(button);
    };
}

// The user clicks on a generated orange button, which generates 10 static, non-animated gif images from the GIPHY API and places them on the page. 
$("#buttonArea").on("click", ".btn", function () {
    var x = $(this).attr("data");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "$api_key=y0A6UrdU5gN1P7kr87Jubc7Y11m4HBjg&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"

    }).done(function (response) {
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            // a div is created to hold a gif of any topic
            var topicDiv = $("<div>");

            // Under every gif, display its rating (PG, G, so on).
            var p = $("<p>");
            p.text(results[i].rating);
            var p = $("<p>").text("Rating: " + results[i].rating);

            

            