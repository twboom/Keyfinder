development = [];
development.url = 'https://api.github.com/repos/twboom/musictoolkit/commits/main';

development.data = {}

development.process = function(data) {
    let output = {};
    
    output.files = data.files;

    output.data = data;
    return output
}

development.output = function(data) {
    const output = development.process(data);
    console.log(output)
}

fetch(development.url)
    .then(response => response.json())
    .then(data => development.output(data))