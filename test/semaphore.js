var should    = require("should");
var Semaphore = require("../src/index.js");

describe("Semaphore", function() {
  it("takes queue and processes it", function(done) {

    var pool  = Semaphore(5);
    var num   = 100;
    var start = 0;
    var curr  = 0;

    while (start++ < num) {
      pool.acquire(function() {
        curr++;
        pool.release();

        if (++curr == num) done();
      });
    }

  });

  it("will block until a new lock is available", function(done) {

    var pool  = Semaphore(5);
    var num   = 100;
    var start = 0;
    var curr  = 0;

    while (start++ < num) {
      pool.acquire(function() {
        curr++;
        // Don't release the pool. Everything else should block.
      });
    }

    // Check in 10ms that we've only proccessed 5 (because they're blocking)
    setTimeout(function() {
      should(curr).equal(5);
      done();
    }, 10);

  });
});
