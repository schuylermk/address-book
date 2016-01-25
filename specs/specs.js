describe ("Contact", function() {
  it("creates object for contact with given properties", function() {
    var myContact = new Contact("Seymour","Code");
    expect(myContact.firstName).to.equal("Seymour");
    expect(myContact.lastName).to.equal("Code");

  });
  it("will add the fullName method for any contact", function() {
    var myContact = new Contact("Seymour","Code");
    expect(myContact.fullName()).to.equal("Seymour Code");
  });
});

describe ("Address", function() {
  it("will create an object for address properties", function() {
    var myAddress = new Address("street", "city", "state");
    expect(myAddress.street).to.equal("street");
    expect(myAddress.city).to.equal("city");
    expect(myAddress.state).to.equal("state");
 });
  it("will add the fullAddress method for any address", function() {
    var myAddress = new Address("street", "city", "state");
    expect(myAddress.fullAddress()).to.equal("street city, state");
  });
});
