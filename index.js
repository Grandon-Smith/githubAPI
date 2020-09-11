

function run() {
    $('form').submit('#github-handle', event => {
        event.preventDefault();
        const searchHandle = $('#github-handle').val();
        const githubUrl = `https://api.github.com/users/${searchHandle}/repos`;
        console.log(githubUrl);
        // concatenate(searchHandle);
        sendRequest(githubUrl);
    }) 
}

function sendRequest(githubUrl) {
    fetch(githubUrl)
        .then(response => response.json())
        .then(responseJson => formatData(responseJson));
}

function formatData(responseJson) {
    console.log(responseJson);
    for (i = 0; i < responseJson.length; i++) {
        console.log(i);
        $('.js-content').append(`
        <h3>${responseJson[i].name}</h3>
        <p><a href="github.com/${responseJson[i].full_name}">${responseJson[i].full_name}</a></p>
        `) 
    }
}


// ------------- callback function ----------

$(function() {
    run()
});

// ------------- callback function ----------