if (Meteor.isClient) {

  // This code configures the Mongol package: http://mongol.meteor.com/
  Session.set("Mongol", {
    'collections': ['Thumbs'],
    'display': true,
    'opacity_normal': ".7",
    'opacity_expand': ".9",
    'disable_warning': 'false'
  });

}