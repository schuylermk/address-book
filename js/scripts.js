function Contact(firstName, lastName, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}
Contact.prototype.fullName = function() {
 return this.firstName + " " + this.lastName;
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}
Address.prototype.fullAddress = function() {
  return this.street + " " + this.city + ", " + this.state;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("#new-first-name").val();//get variables
    var inputtedLastName = $("#new-last-name").val();
    var inputtedStreet = $("#new-street").val();
    var inputtedCity = $("#new-city").val();
    var inputtedState = $("#new-state").val();
    var inputtedAddress = [];

    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");//appens contacts on contact list

    $("input#new-first-name").val('');//These reset fields after being submitted
    $("input#new-last-name").val('');
    $("input#new-street").val('');
    $("input#new-city").val('');
    $("input#new-state").val('');


    $(".contact").last().click(function(){//This shows the contact on the right side when it's clicked from the contact list
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".full-address").text(newAddress.fullAddress());
    });
  });
});
