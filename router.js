Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  this.render('art');
});

Router.route('/art');

Router.route('/blog');

Router.route('/:artname', function() {
  this.render('artpage', {data: {image: this.params.artname}});
});
