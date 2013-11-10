# node-semaphore

A small semaphore in vanilla JS, useful as a lock pool for something like rate limiting

[![Build Status](https://travis-ci.org/bradjasper/node-semaphore.png?branch=master)](https://travis-ci.org/bradjasper/node-semaphore)

## Install

    npm install node-semaphore


## Usage

Using `Sempahore` is really easy, just acquire() when you want access to a lock and release() when you're done.
    
    var Semaphore = require("node-semaphore");
    var pool = Semaphore(5);
    for (int i = 0; i < 250; i++) {
        pool.acquire(function() {
            console.log("Running...");
            pool.release();
        });
    }

This code will run through 250 iterations, 5 clients at a time.

## Contact

Please visit my site at http://bradjasper.com to contact me.
