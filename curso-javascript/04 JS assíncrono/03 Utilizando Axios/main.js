axios.get('https://api.github.com/users/Heitor-Monteiro')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });
