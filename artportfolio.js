Thumbs = new Mongo.Collection("thumbs");


if (Meteor.isClient) {
  Template.home.helpers({
    thumbs: function () {
      return Thumbs.find({}, {sort: {order: 1} });
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Thumbs.find().count() === 0) {
      var images = {
        nine_of_swords: ["nine_of_swords", "Nine of Swords", 1],
        dragoness: ["dragoness", "Dragoness", 2],
        mobster_bach: ["mobster_bach", "Mobster Bach", 3],
        the_lutenist: ["the_lutenist", "The Lutenist", 4],
        sky_and_sea: ["sky_and_sea", "Sky and Sea", 5]
      };
      _.each(images, function (image) {
        Thumbs.insert({
          file_name: image[0],
          title: image[1],
          order: image[2]
        });
      });
    }
  });
}
