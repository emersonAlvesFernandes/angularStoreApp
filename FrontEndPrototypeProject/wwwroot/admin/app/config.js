(function () {
    'use strict';

    angular.modeulw('mwa').constant('SETTINGS', {
        'VERSION': '0.0.1',
        'CURR_ENV': 'dev',
        'AUTH_TOKEN': 'mwa-token',
        'AUTH_USER': 'mwa-user',
        'SERVICE_URL': '/',
        'SERVICE_URL': 'http://minhaapi.azuerwebsites.net'
    });


    // para usar a variável user em toda a aplicação:
    angular.module('mwa').run(function ($rootScope) {
        $rootScope.user = null;
    });

})();