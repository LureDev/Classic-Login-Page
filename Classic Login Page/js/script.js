$(window).on('load', () => {

    var showPwdIcon = $('#show-pwd');
    var pwdInput = $('#pwd-input');
    var userInput = $('#username-input');
    var isText;

    showPwdIcon.click(() => {
        isText = !isText;

        if(!isText) {
            pwdInput.attr('type', 'password')
            showPwdIcon.attr('class', 'fas fa-eye');
        }
        else {
            pwdInput.attr('type', 'text');
            showPwdIcon.attr('class', 'fas fa-eye-slash');
        }
    });

    responsiveOnFocus = () => {
        let width = $(window).width(); // Gets the screen width
        
        if(width <= 760){  // Checking if the user is using a mobile device
            userInput.focusin(() => {
                $('main').css('height', 'auto').css('min-height', 'auto');
            }).focusout(() => {
                $('main').css('height', '100%').css('min-height', '100%');
            });

            pwdInput.focusin(() => {
                $('main').css('height', 'auto').css('min-height', 'auto');
            }).focusout(() => {
                $('main').css('height', '100%').css('min-height', '100%');
            });
        }
    };

    responsiveOnFocus();

});
