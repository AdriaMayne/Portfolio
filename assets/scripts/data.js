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

            var languages = json.data;

            languages.forEach(language => {
                var newLanguage = "<div>LANG: " + language.name + "<img src=" + adminURL + language.image + " height='60' width='60' alt=" + language.name + "></div>";

                if (language.category == "0") {
                    $('#frontend .content').append(newLanguage);
                } else {
                    $('#backend .content').append(newLanguage);
                }

            });
            // $('#frontend .content')
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
            var projects = json.data;

            projects.forEach(project => {
                var newProject = "<div class='personal-card col-lg-4 mb-3 mt-5 text-center'><img class='col-8 mb-2' src=" + adminURL + project.image + " alt=" + project.title + ">";

                if (project.url) {
                    newProject += "<a href=" + project.url + " target='_blank' rel='noopener noreferrer'>" + project.title + "</a>";
                }

                newProject += "</div>";
                $('#projects-container').append(newProject);
            });
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
                var newTestimonial = "<div class='personal-card col-lg-4 mb-3 mt-5 text-center'><img class='col-8 mb-2' src=" + adminURL + testimonial.image + " alt=" + testimonial.name + "><p>" + testimonial.message + "</p><a href=" + testimonial.url + " target='_blank' rel='noopener noreferrer'>- " + testimonial.name + "</a></div>";
                $('#personal-content').append(newTestimonial);
            });
        },
        error: function(jqxhr, exception) {
            console.log("Error al recibir los testimonials.");
            console.log("Status: " + jqxhr.status + " Exception: " + exception);
        }
    });
}

$("#contact-form").submit(function(e) {
    e.preventDefault();
    var form = $(this);
    var url = adminURL + "api/contact";

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        success: function(data) {
            var response = "<div class='alert alert-success' role='alert'>" + data + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
            $('#form-response').append(response);
        },
        error: function(jqxhr, exception) {
            console.log("Status: " + jqxhr.status + " Exception: " + exception);
            var response = "<div class='alert alert-danger' role='alert'>Status: " + jqxhr.status + " Exception: " + exception + "</div>";
            $('#form-response').append(response);
        }
    });
});

getTestimonials();
getLanguages();
getProjects();