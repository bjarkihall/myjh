 'use strict';

angular.module('soundUpApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-soundUpApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-soundUpApp-params')});
                }
                return response;
            }
        };
    });
