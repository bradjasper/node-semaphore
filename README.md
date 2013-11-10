# Example package.json file

No matter how many package.json files I write/copy/steal, I am always forgetting various properties, because I don't always use all of them in every package.json. This package consists of a regular JavaScript object in a regular `src/package.js` file, fully documented with notes (since regular `.js` files allow comments), that is itself used to create the `package.json` file that manages this project.

About as close as I can get to a self documenting package.json file that also contains the format of settings I like to use.



## package.json docs
[Generated docs should be found here](http://htmlpreview.github.com/?https://github.com/jeremyosborne/packagejsonexample/blob/master/docs/package.html). If for some reason I broke this link, just check out the `docs/package.html` in your favorite browser (it'll work better if you've checked out/downloaded the code).



## Requirements for all dev tasks
If you are here, you know that this requires [Node.js](http://nodejs.org) and [npm](http://npmjs.org).

### Building the distribution
To refresh the `docs/` and the `package.json` file, run:

    npm install
    # since our dist script is non-standard, we need the run-script option
    npm run-script dist



## References
* [npm docs for package.json](https://npmjs.org/doc/json.html)
* [Introduction to npm (and package.json)](http://howtonode.org/introduction-to-npm)
* [A package.json interactive guide](http://package.json.nodejitsu.com/)



## Note on the license
I don't care how you use any of the code within this directory. I mean, almost none of it is my code, and all I really did was document stuff. The MIT licensing is included more as a template for the license that I usually use.
