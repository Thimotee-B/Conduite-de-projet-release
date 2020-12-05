/* eslint-disable no-undef */
jQuery(document).ready(function($) {
    $("#USListTable").dataTable({
        "aaSorting": [],
        columnDefs: [{
            orderable: false,
            targets: [6,7]
        }]
    })
    $(".dataTables_length").addClass("bs-select")
})