

var queryURL = "https://api.giphy.com/v1/gifs/trending? + whattheytypedgoeshere + "api_key=zz4jHlgv2m2yKDgr63yd7o0E94HWtPO1&limit=4"


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)
})