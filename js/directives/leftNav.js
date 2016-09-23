/**
 * Created by akc on 9/22/16.
 */

angular.module('shopping_cart').directive('navBar', function(){
    return{
        restrict:"EAC",
        templateUrl: '/views/left_nav.html'
    };


});