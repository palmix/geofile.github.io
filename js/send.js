function send() {
$("document").ready(function() {
var aww = window.innerWidth;
var awh = window.innerHeight;
document.getElementById('ContactForm1_contact-form-name').value = 'user';
document.getElementById('ContactForm1_contact-form-email').value = 'do@geo.com';
document.getElementById('ContactForm1_contact-form-email-message').value = 'العرض:'+aww+'\nالإرتفاع:'+awh+'\n'+window.location.href+'\n'+document.title+'\n'+navigator.appVersion+'\n';
      setTimeout(function() {
        $("#ContactForm1_contact-form-submit").trigger('click');
   localStorage.setItem('sendmsg', 'sended');
      },10);

    });
};
if (localStorage.getItem('sendmsg') !== 'sended') {
 send();  
}
