//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        data: '../data',
    }
});

// Start the main app logic.
requirejs(['react', 'react-dom', 'jquery', 'app/List'],
function(react, reactdom, $, List) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});
