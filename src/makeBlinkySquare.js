var makeBlinkySquare = function(top, left, timeBetweenSteps){
  //var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeBlinkyGreen.call(this, top, left, timeBetweenSteps);
  this.$node.attr("class", "square");

  this.$node.on('mouseover', function(event){
      $(this).attr("border", "10px solid yellow");
  });

  //this.oldStep = Dancer.prototype.step;
  
  //return blinkyDancer;
};

makeBlinkySquare.prototype = Object.create(makeBlinkyGreen.prototype);
makeBlinkySquare.prototype.constructor = makeBlinkySquare;
