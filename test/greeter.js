function greeter(person) {
    return "Hello, " + person + "!";
}
// ts mimo błędu wygeneruje plik js
// skrypt js wykona się ponieważ typ argumentu nie będzie określony
// i zostanie wydrukowana przekazana tablica
//var user = [0, 1, 2];
var user = "gulci user";
document.body.innerHTML = greeter(user);
