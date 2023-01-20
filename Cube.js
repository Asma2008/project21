class Cube {
  constructor(xInput, yInput, widthInput, heightInput) {
    var options = {
      restitution: 1,
    };
    this.width = widthInput;
    this.height = heightInput;
    this.body = Bodies.rectangle(xInput, yInput, widthInput, heightInput, options);
    World.add(userWorld, this.body);
  }
  display() {
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
  }
};
