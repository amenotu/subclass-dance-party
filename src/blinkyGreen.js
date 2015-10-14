var makeBlinkyGreen = function(top, left, timeBetweenSteps){
  //var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr("class", "green");

  //this.oldStep = Dancer.prototype.step;
  
  //return blinkyDancer;
};

makeBlinkyGreen.prototype = Object.create(makeBlinkyDancer.prototype);
makeBlinkyGreen.prototype.constructor = makeBlinkyGreen;

