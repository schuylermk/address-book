function Contact(firstName, lastName, address) {
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

    var inputtedFirstName = $("#new-first-name").val();//get variables
    var inputtedLastName = $("#new-last-name").val();
    var inputtedCity = $("#new-city").val();
    var inputtedState = $("#new-state").val();
    var inputtedAddress = [];

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");//appens contacts on contact list

    $("input#new-first-name").val('');//These are converting our inputs into strings.
    $("input#new-last-name").val('');//set
    inputtedAddress.push($("input#new-city").val(''));
    inputtedAddress.push($("input#new-state").val(''));


    $(".contact").last().click(function(){//This shows the contact on the right side when it's clicked from the contact list
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });
});
