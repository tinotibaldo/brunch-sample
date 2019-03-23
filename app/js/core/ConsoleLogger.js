class ConsoleLogger{
  constructor() {

  }

  onUpdate(i) {
    console.log('running', i )
  }
}

const consoleLogger = new ConsoleLogger();
module.exports = consoleLogger;