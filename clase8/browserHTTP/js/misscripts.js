function ejemploGet1() {
    fetch('hola.txt')
        .then(function(z) {
            return z.text()
        })
        .then(function(data) {
            console.log('data = ', data)
            alert(data)
        })
        .catch(function(err) {
            console.error(err);
        });
}
