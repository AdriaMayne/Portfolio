var adminURL = "https://admin.adriamayne.com/";

$(function() {
    var view_width = $(window).width();
    var animationName = "animated bounce";
    var animationEnd = "animationend";
    var interval;

    function animate() {
        $('#arrow').addClass(animationName).one(animationEnd, function() {
            $('#arrow').removeClass(animationName); 
        });
    }

    function start() {
        interval = setInterval(function(){
            animate();
        }, 4000);
    }

    $('#arrow').hover(function(){
        $('#arrow').removeClass(animationName);
        clearInterval(interval);
    }, function(){
        start();
    });

    if (view_width > 1140) {
        $('#frontend').hover(function() {
            $('#frontend').addClass("patata");
            $('#frontend-title').addClass("d-none");
            $('#backend').addClass("rotate rotate-acw");
            $('#frontend .content').removeClass('d-none');
        }, function() {
            $('#frontend').removeClass("patata");
            $('#frontend-title').removeClass("d-none");
            $('#backend').removeClass("rotate rotate-acw");
            $('#frontend .content').addClass('d-none');
        });

        $('#backend').hover(function() {
            $('#backend').addClass("patata");
            $('#backend-title').addClass("d-none");
            $('#frontend').addClass("rotate rotate-ccw");
            $('#backend .content').removeClass('d-none');
        }, function() {
            $('#backend').removeClass("patata");
            $('#backend-title').removeClass("d-none");
            $('#frontend').removeClass("rotate rotate-ccw");
            $('#backend .content').addClass('d-none');
        });
    } else {
        $('#frontend .content').removeClass('d-none');
        $('#backend .content').removeClass('d-none');
    }
});

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
                var newLanguage = "<div class='row text-center mt-3'>";
                        newLanguage += "<div class='skill-card m-auto col-2'>";
                            newLanguage += "<h6>" + language.name + "</h6>"
                        newLanguage += "</div><div class='skill-card m-auto col-2'>";
                            newLanguage += "<img src=" + adminURL + language.image + " height='60' width='60' alt=" + language.name + ">";
                        newLanguage += "</div><div class='skill-card my-auto col-md-8'>";
                            newLanguage += "<div class='progress' style='height: 4vh;'><div class='progress-bar  bg-warning' role='progressbar' aria-valuenow=" + language.percentage + " aria-valuemin='0' aria-valuemax='100' style='width: " + language.percentage + "%'>";
                                newLanguage += "<h6 class='justify-content-center d-flex position-absolute w-100'>" + language.percentage + "%</h6>";
                        newLanguage += "</div>";
                    newLanguage += "</div>";

                if (language.category == "0") {
                    $('#frontend .content').append(newLanguage);
                } else {
                    $('#backend .content').append(newLanguage);
                }

            });
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
            var count = 0;
            
            projects.forEach(project => {
                var tags = project.tags;

                var newProject = "<div class='project row mt-2'>";
                        newProject += "<div class='col-lg-7 m-auto'>";
                            newProject += "<img class='col-3 mx-auto mb-3' src=" + adminURL + project.logo + " alt='LOGO'>";
                            newProject += "<h4 class='my-3'>" + project.title + "</h4>";
                            newProject += "<div class='col-lg-8 mx-auto'>";
                                newProject += "<p class='text-justify'>" + project.description + "</p>";

                                if(tags && tags.length > 0){
                                    tags.forEach(tag => {
                                        newProject += "<div class='tag-pill'>" + tag.title + "</div>";
                                    });
                                }

                            newProject += "</div>";
                        newProject += "</div>";

                            if (count === 0 || (count%2)) {
                                newProject += "<div class='col-lg-5'>";
                            } else {
                                newProject += "<div class='col-lg-5 order-last order-lg-first'>";
                            }

                            newProject += "<img src=" + adminURL + project.mockup + " alt=" + project.title + ' mockup' + ">";
                        newProject += "</div>";
                    newProject += "</div>";
                $('#projects-container').append(newProject);
                count++;
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