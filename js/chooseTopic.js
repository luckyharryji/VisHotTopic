
$(function () {

    $(".dropdown-menu li a").click(function () {
        var id = $(this).attr('id');
        var value_display = $(this).attr('value');
        $('button[id="' + id + '"]:first-child').text($(this).text());
        $('button[id="' + id + '"]:first-child').val($(this).text());
        if (id == 'dataset') {
            if (value(id) == 'data mining') {
                var dataset = './data/datamining_word_countSort_longer.json';
            }

            if (value(id) == 'machine learning') {
                var dataset = './data/machinelearning_word_countSort_longer.json';
            }
            if (value(id) == 'deep learning') {
                var dataset = './data/deeplearning_word_countSort_longer.json';
            }
            if (value(id) == 'online learning') {
                var dataset = './data/onlinelearning_word_countSort_longer.json';
            }
            if (value(id) == 'big data') {
                var dataset = './data/bigdata_word_countSort_longer.json';
            }
            load(dataset, value(id));
        }
    });
});

function value(id) {
    return $('button[id="' + id + '"]:first-child').text();
};