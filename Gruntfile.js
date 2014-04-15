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
		karma:{
			target:{
				configFile: 'karma.conf.js'
			}
		}
	});
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask("default", ["sass","jshint","concat","uglify"]);
	grunt.registerTask("test","karma");
}