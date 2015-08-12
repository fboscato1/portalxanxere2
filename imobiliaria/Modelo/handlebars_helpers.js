/* return the '1' initial value based index */
Handlebars.registerHelper('index_1', function (index) {
    return index + 1;
});

Handlebars.registerHelper('percentual', function (value) {
    try {
        return (value * 100).toFixed(2).replace(/\./, ',').replace(/\d(?=(\d{3})+\,)/g, '$&.') + "%";
    } catch (e) { return ''; }
});

Handlebars.registerHelper('money', function (value) {
    try {
        return "R$ " + (value * 1).toFixed(2).replace(/\./, ',').replace(/\d(?=(\d{3})+\,)/g, '$&.');
    } catch (e) { return ''; }
});
