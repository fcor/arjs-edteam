AFRAME.registerComponent("listen-to-scale", {
  init: function () {
    this.handleClick = this.handleClick.bind(this);
    this.scaleFactor = 0.15;
    
    var up = document.getElementById("up");
    var down = document.getElementById("down");

    up.addEventListener("click", this.handleClick);
    down.addEventListener("click", this.handleClick);
  },

  handleClick: function (e) {
    console.log(this.scaleFactor);
    if (e.target.id === "up") {
      this.scaleFactor *= 1.5;
    } else {
      this.scaleFactor *= 0.6667;
    }

    this.el.object3D.scale.x = this.scaleFactor;
    this.el.object3D.scale.y = this.scaleFactor;
    this.el.object3D.scale.z = this.scaleFactor;
  },
});
