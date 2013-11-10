//
// Semaphore
//
// Semaphore is a lock that allows `max` number of parallel clients
//
// Existing libraries were good, but none were vanilla Javascript with
// no external dependencies, which was a requirement.
//
// Example usage:
//
//    var Semaphore = require("Semaphore");
//    var pool = Semaphore(5);
//    for (int i = 0; i < 250; i++) {
//      pool.acquire(function() { console.log("Running..."); pool.release(); });
//    }
//
function Semaphore(max) {

  var queue = [];
  var active = 0;
  max = max || 4;

  return {
    acquire: function(callback) {
      queue.push(callback);
      step();
    },
    release: function() {
      active--;
      step();
    }
  };

  function step() {
    if (active >= max) return;

    var callback = queue.pop(0);
    if (callback) {
      callback();
      active++;
    }
  }
}

module.exports = Semaphore;
