angular.module('shopping_cart').directive('itemList', function () {
    return{
        restrict:'EA',
//        scope:{productList:'=' , productTypesDescription: '='},
        templateUrl:'/views/product_list.html',
        
//        link: function(scope){
//            console.log(scope.productTypesDescription);
//        }
    };
});