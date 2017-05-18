(function () {
    'use strict';

    angular
        .module('angularAssignment')
        .component('cards', {
            templateUrl: 'app/cards/cards.html',
            controller: CardsController,
            bindings: {
                contacts: '='
            }
        });

    /** @ngInject */
    function CardsController($state) {
        var ctrl = this;

        ctrl.create = function () {
            $state.go('app.contacts.create');
        };

    }
})();