module.exports = function(grunt){
	grunt.initConfig({
		sass:{
			target:{
				options:{
					style: "compressed"
				},
				files:{
					"css/style.css" : "development_files/style.scss"
				}
			}
		},
		jshint:{
			beforeconcat: ['development_files/*.js'],
    		afterconcat: ['js/script.js']
		},
		concat:{
			target:{
				options:{
					separator: grunt.util.linefeed
				},
				files:{
					"js/script.js" : ["development_files/*.js"]
				}
			}
		},
		uglify:{
			target:{
				files: {
					"js/script.min.js" : "js/script.js"
				}
			}
		},
		watch:{
			options: {
			    livereload: true
			},
			css: {
			    files: 'development_files/*.scss',
			    tasks: ['sass']
			  },
			js: {
			    files: 'development_files/*.js',
			    tasks: ["jshint","concat","uglify"]
			 },
			jade:{
				files: 'development_files/*.jade',
			    tasks: ["jade"]
			}
		},
		karma:{
			target:{
				configFile: 'karma.conf.js'
			}
		},
		connect: {
			server: {
		      options: {
		      	hostname: 'localhost',
		        port: 8000
		      }
		    }
		},
		open: {
			dev : {
		      path: 'http://localhost:8000'
		    }
		},
		jade: {
			compile: {
				options:{
					pretty: true,
				},
	            files: [{
			      expand: true,
			      cwd: 'development_files',
			      src: [ '*.jade' ],
			      dest: '',
			      ext: '.html'
			    }]
			}
		}
	});
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask("default", ["jade","sass","jshint","concat","uglify","connect","open:dev","watch"]);
	grunt.registerTask("test","karma");
}
