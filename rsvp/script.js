// JavaScript Document
console.log("script.js")
$('document').ready(function () {
    /* validation */
    $("#rsvp-form").validate({
        rules: {
            guest_name0: {
                required: true,
                minlength: 3,
                wordCount: ['2']
            },
            guest_name1: {
                minlength: 3,
                wordCount: ['2']
            },
            guest_name2: {
                minlength: 3,
                wordCount: ['2']
            },
            guest_name3: {
                minlength: 3,
                wordCount: ['2']
            },
            guest_name4: {
                minlength: 3,
                wordCount: ['2']
            },
            guest_name5: {
                minlength: 3,
                wordCount: ['2']
            },
            guest_email: {
                required: true,
                email: true
            },
        },
        messages: {
            guest_name0: "Proszę wprowadzić \"Imię i Nazwisko\"",
            guest_name1: "Proszę wprowadzić \"Imię i Nazwisko\"",
            guest_name2: "Proszę wprowadzić \"Imię i Nazwisko\"",
            guest_name3: "Proszę wprowadzić \"Imię i Nazwisko\"",
            guest_name4: "Proszę wprowadzić \"Imię i Nazwisko\"",
            guest_name5: "Proszę wprowadzić \"Imię i Nazwisko\"",
            guest_email: "Proszę wprowadzić prawidłowy adres email"
        },
        submitHandler: submitForm
    });
    /* validation */
    function getWordCount(wordString) {
        var words = wordString.split(" ");
        words = words.filter(function(words) {
            return words.length > 0
        }).length;
        return words;
    }

    //add the custom validation method
    jQuery.validator.addMethod("wordCount",
        function(value, element, params) {
            var count = getWordCount(value);
            if(count >= params[0]) {
                return true;
            }
        },
        jQuery.format("A minimum of {0} words is required here.")
    );
    /* form submit */
    function submitForm() {

        var data = $("#rsvp-form").serialize();

        var values = {};

        //Serialize the Form
        $.each($("#rsvp-form").serializeArray(), function (i, field) {
            values[field.name] = field.value;
        });

        //Value Retrieval Function
        var getValue = function (valueName) {
            return values[valueName];
        };

        console.log(getValue("guest_guests"));

        $.ajax({

            type: 'POST',
            url: 'rsvp/register.php',
            data: data,
            beforeSend: function () {
                $("#error").fadeOut();
                $("#btn-submit").html('<span class="glyphicon glyphicon-transfer"></span> &nbsp; Wysyłanie ...');
            },
            success: function (data) {

                if (data == 1) {

                    $("#error").fadeIn(1000, function () {


                        $("#error").html('<div class="alert alert-danger"><div class="info-left"><span class="glyphicon glyphicon-info-sign"></span></div><div class="info-right">Przykro nam ale ten adres email został już wprowadzony.<!--br /> Jeżeli chcesz edytować potwierdzenie zaznacz "Edytuj potwierdzenie"-->!</div></div>');

                        $("#btn-submit").html('<span class="glyphicon glyphicon-send"></span> &nbsp; Wyślij');

                        $("#rsvp-form")[0].reset();

                        setTimeout('$("#error").fadeOut(500, function () { setTimeout(\'$("#error").html("");\' ,5000); console.log("closing info..."); }); ',10000);

                        $( '#rsvp-form' ).each(function(){
                            for (var i=1;i<=5;i++) {
                                $("#guest_guests_row"+i).hide();
                            }
                            this.reset();
                        });
                        $( '#guest_guests').css('color','#999');

                    });

                }
                else if (data == "registered") {

                    $("#btn-submit").html('<img style="vertical-align: middle;" src="rsvp/btn-ajax-loader2.gif" /> &nbsp; Wysyłanie ...');

                    $("#error").fadeIn(1000, function () {

                        $("#error").html('<div class="alert alert-success"><div class="info-left"><span class="glyphicon glyphicon-info-sign"></span></div> <div class="info-right">Dziękujemy '+getValue("guest_name0")+'. Twoje potwierdzenie zostało wysłane.</div></div>');

                        $("#btn-submit").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Wyślij');

                        setTimeout('$("#error").fadeOut(1000, function () { setTimeout(\'$("#error").html("");\' ,5000);  console.log("closing info..."); }); ',10000);

                        $( '#rsvp-form' ).each(function(){
                            for (var i=1;i<=5;i++) {
                                $("#guest_guests_row"+i).hide();
                            }
                            this.reset();
                        });
                        $( '#guest_guests').css('color','#999');

                    });

                }
                else if (data == "update") {

                    $("#btn-submit").html('<img src="btn-ajax-loader.gif" /> &nbsp; Signing Up ...');

                    $("#error").fadeIn(1000, function () {

                        $("#error").html('<div class="alert alert-success"><span class="glyphicon glyphicon-info-sign"></span> &nbsp; :-)</div>');

                        $("#btn-submit").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Wyślij');

                        $("#rsvp-form")[0].reset();

                        setTimeout('$("#error").fadeOut(1000, function () { setTimeout(\'$("#error").html("");\' ,5000);  console.log("closing info..."); }); ',5000);

                    });

                }
                else {

                    $("#error").fadeIn(1000, function () {

                        $("#error").html('<div class="alert alert-danger"><span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + data + ' !</div>');

                        $("#btn-submit").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Wyślij');

                    });
                }
            }
        });
        return false;
    }

    /* form submit */
});