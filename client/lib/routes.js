// I Tend To Think Too Deeply
//
// My friend was eating an orange,
// So I asked him,
// Is the fruit called an orange
// Because it is the color orange?
// Or is the color called orange,
// Because the fruit is orange?
//
// He said,
// This is a tangerine.
//
// #PoetryTier
// #PoemsFromKidsIHadEnglishWith
// #ThisIsABoringFile

Router.route('/', function() {
  this.render('landing');
});

Router.route('/about', function() {
  this.render('about');
});

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
