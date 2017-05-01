module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/**/*.module.js',
            'app/**/*.js'
        ],

        exclude: [],

        preprocessors: {
            'app/**/!(*.test).js': ['coverage']
        },

        reporters: ['progress', 'coverage', 'coveralls'],


        //coverage reporter
        coverageReporter: {
            // check: {
            //     global: {
            //         statements: 100,
            //         lines: 100,
            //         functions: 100,
            //         branches: 100
            //     }
            // },
            reporters: [
                {
                    type: 'html',
                    dir: 'coverage/'
                },
                {
                    type: 'lcov', // lcov or lcovonly are required for generating lcov.info files
                    dir: 'coverage/'
                },
                {
                    type: 'text-summary'
                }
            ]
        },

        port: 9876,

        colors: true,

        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ['PhantomJS'],

        singleRun: false,

        concurrency: Infinity
    })
};
