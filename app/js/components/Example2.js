import Example from './Example';
import consoleLogger from 'js/core/ConsoleLogger';

class Example2 extends THREE.Object3D {
  constructor() {
    super();
    this.example1 = new Example();
    this.example2 = new Example();
    this.add(this.example1);
    this.add(this.example2);
	   this.example1.position.x = -2
	   this.example2.position.x = 2
    this.onUpdate = this.onUpdate.bind(this);
    //this.log = new ConsoleLogger();
    this.i = 0;
  }

  onUpdate() {
  	this.example1.onUpdate()
  	this.example2.onUpdate()
    consoleLogger.onUpdate(this.i++)
  }
}

module.exports = Example2;