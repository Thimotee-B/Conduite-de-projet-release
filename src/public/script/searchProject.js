/* eslint-disable no-undef */
$(document).ready(function(){
    $("#searchProjetInput").on("keyup", function() {
        let value = $(this).val().toLowerCase()
        $("#projectTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })
})
  