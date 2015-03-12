Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
	this.render('home');
});
Router.route('/:artname', function() {
	this.render('artpage', {data: {image: this.params.artname}});
});