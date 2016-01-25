describe ("Contact", function() {
  it("creates contact with given properties", function() {
    var myContact = new Contact("Seymour","Code");
    expect(myContact.firstName).to.equal("Seymour");
    expect(myContact.lastName).to.equal("Code");
    expect(myContact.address).to.eql([]);
  });
  it("will add the fullName method for any contact", function() {
    var myContact = new Contact("Seymour","Code");
    expect(myContact.fullName()).to.equal("Seymour Code");
  });

});
