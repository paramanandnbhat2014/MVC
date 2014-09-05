$(document).ready(function () {

    $("#table tr:even").addClass("evenRow");
    $("#table tr:even a").addClass("evenA");
    $("#table tr:odd a").addClass("oddA");

    $('#table tbody tr a').mouseover(function () {
        $(this).addClass('evenA');
    });
    $('#table tbody tr a').mouseout(function () {
        $(this).removeClass('evenA');
    });

    $('#table tbody tr').mouseover(function () {
        $(this).addClass('dataHover');
    });
    $('#table tbody tr').mouseout(function () {
        $(this).removeClass('dataHover');
    });
});