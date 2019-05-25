$(function() {
    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: 'json',
        url: "https://admin.adriamayne.com/api/project",
        async: "true",
        success: function(json) {
            console.log("Projects: " + json.data);

        },
        error: function(jqxhr, exception) {
            console.log("Error al recibir los proyectos.");
            console.log("Status: " + jqxhr.status + " Exception: " + exception);
        }
    });
});