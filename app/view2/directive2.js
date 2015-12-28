/**
 * Created by lifake on 12/28/15.
 */
'use strict';

define(['angular'], function(angular) {
    angular.module('myApp.view2')
    .directive("hello", function(){
        return {
            restrict: 'EA',
            template: "<div>success！</div>"
        }
    });
});