(function () {
    'use strict';

    angular.module('mwa').controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [];

    function HomeCtrl($scope) {

        // se refere ao controller. Usa-se desta forma ao invés de injetar o $scope
        var vm = this;

        // controller
        // chamadas sempre ao topo do arquivo;
        activate();

        // function sempre ao final do arquivo;
        function activate() {

        };

    };

})();