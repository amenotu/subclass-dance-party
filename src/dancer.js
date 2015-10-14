// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  //var obj = Object.create(Dancer.prototype);
  this.$node = $('<span class="dancer"></span>');
  
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.lineUp();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  //return obj;
};

Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var context = this;
    setTimeout(function(){context.step.call(context)}, context.timeBetweenSteps);
  };

Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
      var styleSettings = {
        top: top,
        left: left
      };
    this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){

  window.dancers.push(this.$node);
  console.log(window.dancers);
};
