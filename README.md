Frontend Jetpack
===========

Frontend workflow with [Grunt](http://gruntjs.com/), [Bower](http://bower.io/), using [Jade](http://jade-lang.com), [Sass](http://sass-lang.com/), [Bourbon](http://bourbon.io) and [Neat](http://neat.bourbon.io).

Installation
------------

1. Install [node.js](http://nodejs.org/)
2. Install [ruby](https://www.ruby-lang.org/en/installation/)
3. Install [sass](http://sass-lang.com/install)
4. Clone this git repo `git clone https://github.com/TheBlasfem/frontend-jetpack.git`
5. Install Grunt `npm install -g grunt-cli`
6. Install dependencies `npm install` and `bower install`
You can also use our [yeoman generator](https://github.com/TheBlasfem/generator-frontendjetpack)

How to use
----------

Run `grunt` and start coding inside /development_files. Your browser will open in http://localhost:8000. Your files jade/sass will be compiled and the browser will refresh automatically with livereload. Also your js files have a minifier, and a concat for create one js file to the output. If there is code wrong in your js files, a notification of your SO will appear to warning you.

Run `grunt sprites` for create styles and a sprite file using all .pngs in images/sprites/

Run `grunt images` to optimize all your images in images/

Run `grunt test` for run your specs in /test folder
