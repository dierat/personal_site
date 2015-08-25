Posts = new Mongo.Collection('posts');
Tags = new Mongo.Collection('tags');


if (Meteor.isClient){
  Template.blog.helpers({
    posts: function(){
      return Posts.find({}, {sort: {createdAt: -1}});
    }
  });
  Template.post.helpers({
    createdFromNow: function(){
      return moment(this.createdAt).fromNow();
    }
  });
  Template.post.helpers({
    paragraphs: function(){
      return Posts.findOne({_id: this._id}).content.map(function(paragraph){
        if (typeof paragraph === 'string'){
          return paragraph;
        } else if (typeof paragraph === 'object'){
          if (paragraph.src) {
            return '<figure><img src=' + paragraph.src + '></figure>'
          }
        }
      });;

    }
  });
  // Template.tags.helpers({
  //   tags: function(){
  //     return Posts.find({_id: this._id}).tags;
  //   }
  // });
}


if (Meteor.isServer){
  Meteor.startup(function(){
    if (Posts.find().count() === 0){
      var posts = [
        {
          title: "JavaScript and English as universal languages",
          content: [
            "I’ve heard a lot of folks discussing JavaScript and whether or not it’s suitable for a language that is universally used in web development. I have to say that although I enjoy it, I have to agree. Its versatility is useful at times but it is mostly confusing and produces unforeseen bugs. Beginners often have trouble with the nuances of ==, !,  and this, and few developers really master the language. Unfortunately, we’re kind of stuck with it.","We’ve come to a point where JavaScript is so ubiquitous in web development that it’s too expensive for us to pick a new language now. There are millions of projects written in this often underestimated language, so it would be far too costly to turn around now. Even upgrading JavaScript is a huge undertaking that has taken years to push through.",
            "In this way, JavaScript actually reminds me of English. Both languages have become universal not because they are easiest to learn or because they are best suited for the concepts that need to be conveyed, but due to a series of events long in the past.",
            "There are, of course, alternatives for both languages. Esperanto is a language that was designed specifically to be an easy-to-learn, universal language that is easily adopted by people from all over the world. (Unfortunately, it was still very Euro-centric and drew primarily upon European languages while ignoring every other human civilization, so it did not quite meet even that goal.) However, Esperanto was never adopted by more than a few thousand people. It was an artificial, designed language, and those who encountered it felt that rigidity in the language. For it to become fluid, it would have to endure the alterations that every language goes through when being spoken by real people in real situations. But after going through such an editing process, would it still be so easy to learn? Perhaps a real-world language that is easy to speak is by its very nature difficult to learn, with all the eccentricities that comes along with it.",
            "But, perhaps more importantly, it would be too costly to translate all of the Western world’s documents and websites into a newer, more designed language such as Esperanto. And that is that is the problem facing JavaScript competitors as well - in order for a new alternative to become accepted, it would have to be backwards compatible and cost-effective.",
            "And yet another issue is that the more languages splinter off into sub-sections, the more time is required to learn all of these different alternatives. And that time is expensive as well."],
          tags: ["JavaScript", "programming"]
        }, {
          title: "Second Post",
          content: [{src: 'http://www.clker.com/cliparts/9/2/8/c/1195421944619161676typewriter_john_olsen_01.svg.hi.png'}, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"],
          tags: ["blue", "moonlight", "martian"]
        }, {
          title: "Third Post",
          content: ["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."],
          tags: ["blue", "nowhere", "martian"]
        }
      ];
      _.each(posts, function(post){
        Posts.insert({
          createdAt: new Date(),
          title: post.title,
          content: post.content,
          tags: post.tags
        });
      });
    }
  });
}
