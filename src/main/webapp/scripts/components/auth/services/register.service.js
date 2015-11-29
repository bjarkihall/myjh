'use strict';

angular.module('soundUpApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


