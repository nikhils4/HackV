grecaptcha.ready(function() {
    grecaptcha.execute('6LdwaqgUAAAAAHq8aXnOCQBhTaMh9vFsDlZ_ikZ_', {action: 'homepage'}).then(function(token) {
        console.log(token);
    });
});