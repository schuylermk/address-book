function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = [];
}

Contact.prototype.fullName = function() {
 return this.firstName + " " + this.lastName;
}


$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("#new-first-name").val();
    var inputtedLastName = $("#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val('');
    $("input#new-last-name").val('');

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });
});
