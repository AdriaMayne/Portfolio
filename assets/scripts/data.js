var adminURL = "https://admin.adriamayne.com/";

function getLanguages() {
    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: 'json',
        url: adminURL + "api/language",
        async: "true",
        success: function(json) {
            console.log("----- Languages -----");
            console.log(json.data);
            // Do something.
        },
        error: function(jqxhr, exception) {
            console.log("Error al recibir los lenguajes.");
            console.log("Status: " + jqxhr.status + " Exception: " + exception);
        }
    });
}

function getProjects() {
    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: 'json',
        url: adminURL + "api/project",
        async: "true",
        success: function(json) {
            console.log("----- Projects -----");
            console.log(json.data);
            // Do something.
        },
        error: function(jqxhr, exception) {
            console.log("Error al recibir los proyectos.");
            console.log("Status: " + jqxhr.status + " Exception: " + exception);
        }
    });
}

function getTestimonials() {
    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: 'json',
        url: adminURL + "api/testimonial",
        async: "true",
        success: function(json) {
            console.log("----- Testimonials -----");
            console.log(json.data);

            var testimonials = json.data;

            testimonials.forEach(testimonial => {
                var newTestimonial = "<div class='personal-card col-lg-3 mb-3 mt-5 text-center'><img class='col-8 mb-2' src=" + adminURL + testimonial.image + " alt=" + testimonial.name + "><p>" + testimonial.message + "</p><a href=" + testimonial.url + " target='_blank' rel='noopener noreferrer'>- " + testimonial.name + "</a></div>";
                $('#personal-content').append(newTestimonial);
            });
        },
        error: function(jqxhr, exception) {
            console.log("Error al recibir los testimonials.");
            console.log("Status: " + jqxhr.status + " Exception: " + exception);
        }
    });
}

getTestimonials();
getLanguages();
getProjects();