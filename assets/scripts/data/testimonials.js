$(function() {
    var adminURL = "https://admin.adriamayne.com/";

    $.ajax({
        type: "GET",
        crossDomain: true,
        dataType: 'json',
        url: adminURL + "api/testimonial",
        async: "true",
        success: function(json) {
            console.log(json.data);

            var testimonials = json.data;

            testimonials.forEach(testimonial => {
                var newTestimonial = "<div class='personal-card col-lg-4 mb-3 mt-5'><img class='col-8 mb-2' src=" + adminURL + testimonial.image + " alt=" + testimonial.name + "><p>" + testimonial.message + "</p><a href=" + testimonial.url + " target='_blank'>- " + testimonial.name + "</a></div>";
                $('#personal-content').append(newTestimonial);
            });
        },
        error: function(jqxhr, exception) {
            console.log("Error al recibir los testimonials.");
            console.log("Status: " + jqxhr.status + " Exception: " + exception);
        }
    });
});