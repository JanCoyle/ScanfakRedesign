$(function () {
    var $result = $('#invoice-result');

    $('#invoice-table').bootstrapTable({
        /*
        onAll: function(name, args) {
        console.log('Event: onAll, data: ', args);
        }
        onClickRow: function(row) {
        $result.text('Event: onClickRow, data: ' + JSON.stringify(row));
        },
        onDblClickRow: function(row) {
        $result.text('Event: onDblClickRow, data: ' + JSON.stringify(row));
        },
        onSort: function(name, order) {
        $result.text('Event: onSort, data: ' + name + ', ' + order);
        },
        onCheck: function(row) {
        $result.text('Event: onCheck, data: ' + JSON.stringify(row));
        },
        onUncheck: function(row) {
        $result.text('Event: onUncheck, data: ' + JSON.stringify(row));
        },
        onCheckAll: function() {
        $result.text('Event: onCheckAll');
        },
        onUncheckAll: function() {
        $result.text('Event: onUncheckAll');
        }
        */
    }).on('all.bs.table', function (e, name, args) {
        console.log('Event:', name, ', data:', args);
    }).on('click-row.bs.table', function (e, row, $element) {
        $result.text('Event: click-row.bs.table, data: ' + JSON.stringify(row));
    }).on('dbl-click-row.bs.table', function (e, row, $element) {
        $result.text('Event: dbl-click-row.bs.table, data: ' + JSON.stringify(row));
    }).on('sort.bs.table', function (e, name, order) {
        $result.text('Event: sort.bs.table, data: ' + name + ', ' + order);
    }).on('check.bs.table', function (e, row) {
        $result.text('Event: check.bs.table, data: ' + JSON.stringify(row));
        fillinvoice(row);
    }).on('uncheck.bs.table', function (e, row) {
        $result.text('Event: uncheck.bs.table, data: ' + JSON.stringify(row));
    }).on('check-all.bs.table', function (e) {
        $result.text('Event: check-all.bs.table');
    }).on('uncheck-all.bs.table', function (e) {
        $result.text('Event: uncheck-all.bs.table');
    });

    function fillinvoice(row) {
        $("#inputGodkender").val('Test');
    }
});
