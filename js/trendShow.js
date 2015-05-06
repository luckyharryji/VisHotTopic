load = function (dataset, id, coltype) {
    d3.json(dataset, function (error, data) {
        console.log(error);
        show_data = [];
        function sort(a, b) {
            return a[topic]
        };

        for (var topic in data) {
            item = data[topic];
            temp = {};
            count = [];
            for (var year = 1994; year < 2014; year++) {
                str_year = year.toString();
                if (item[str_year] == undefined) {
                    count.push(0);
                    continue;
                }
                count.push(item[str_year]);
            }
            temp['name'] = topic;
            temp['data'] = count;
            show_data.push(temp);
        }

        year_show = [];
        for (var year = 1994; year < 2014; year++) {
            year_show.push(year.toString());
        }


        $('#viscomp').highcharts({
            title: {
                text: id,
                x: -20 //center
            },
            subtitle: {
                text: 'trend analysis',
                x: -20
            },
            xAxis: {
                categories: year_show

            },
            yAxis: {
                title: {
                    text: 'times'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: 'time'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            plotOptions: {
                line: {
                    visible: false
                }
            },
            series: show_data
        });
    });
};


