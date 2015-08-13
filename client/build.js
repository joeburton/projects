{
    //https://github.com/jrburke/almond
    
    // If you've got a main config file, this is the palce for it
    mainConfigFile: 'js/main.js',    
    
    // Relative to this file's location
    baseUrl: 'js',
    
    // Use almond the lightweight library instead of full requirejs
    name: 'lib/almond',
    
    // main module
    include: ['main'],

    // ?
    insertRequire: ['main'], 

    // output
    out: '../public/js/main.js',

    // If set to true, any files that were combined into a
    // build bundle will be removed from the output folder.
    removeCombined: true,
    
    // squish it - uglify
    optimize: 'none'
}