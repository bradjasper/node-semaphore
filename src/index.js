//
// Semaphore
//
// Semaphore is a lock that allows `num` number of parallel clients
//
// Existing libraries were good, but none were vanilla Javascript with
// no external dependencies, which was a requirement.
//
// Example usage:
//
//    var Semaphore = require("node-semaphore");
//    var pool = Semaphore(5);
//    for (int i = 0; i < 250; i++) {
//      pool.acquire(function() { console.log("Running..."); pool.release(); });
//    }
//
module.exports = function Semaphore(num) {

  var queue = [], active = 0;
  num = num || 10;

  function acquire(callback) {
    if (active >= num)
      return queue.push(callback);
    lock(callback);
  }

  function release() {
    if (active == 0) return;
    active--;
    lock(queue.pop());
  }

  function lock(callback) {
    if (!callback) return;
    callback();
    active++;
  }

  return {acquire: acquire, release: release};
}
