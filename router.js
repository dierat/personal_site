Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  this.render('art');
});

Router.route('/art');

Router.route('/blog');

Router.route('/blog/:_id', function(){
  this.render('blogpage', {data: Posts.findOne({_id: this.params._id})});
});

Router.route('/art/:artname', function() {
  this.render('artpage', {data: {image: this.params.artname}});
});
