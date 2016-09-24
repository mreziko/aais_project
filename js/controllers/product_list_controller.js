angular.module("shopping_cart").controller("products_controller", ["$scope", "product_list_service", "product_type_service", function($scope, product_list_service, product_type_service){
    
//    $scope.productListIds=product_list_service.productListIds;
//    
//    $scope.productList=product_list_service.productList;
//    
//    $scope.productTypes=product_type_service.productTypes;
//    
//    $scope.productTypeIds=product_type_service.productTypeIds;
    
//    $scope.title+"Izzy is my Nigge";
//    $scope.productList="";
//    //$scope.productTypes="";
    
    
//  console.log("PRODUCTS CONTROLLER");
// 
//    
//    
//    
//  $scope.$watch(function(){
// // return product_list_service.productList; 
//  },function(newVal,oldVal){
//  if (oldVal != newVal){
//  console.log("FROM PRODUCT LIST");
//  console.log("NEW VAL")
//  console.log(newVal);
//  console.log("OLD VAL");
//  console.log(oldVal);
//  $scope.productList=newVal;
//  }
//});
//    
//    //ProductTypeIds
//    
//     console.log("PRODUCTS CONTROLLER");
// 
//    
//    
  $scope.$watch(function(){
  return product_type_service.productTypeIds; 
  },function(newVal,oldVal){
  if (oldVal != newVal){
  console.log("FROM INVENTORY_TYPE by IDS LIST");
  console.log("NEW VAL")
  console.log(newVal);
  console.log("OLD VAL");
  console.log(oldVal);
  $scope.productTypeIds=newVal;
  }
});
//    
//    
//    console.log("PRODUCTS CONTROLLER");
//  
//    
//    
//    
//    
//  $scope.$watch(function(){
//  return product_list_service.productListIds; 
//  },function(newVal,oldVal){
//  if (oldVal != newVal){
//  console.log("FROM PRODUCT LIST");
//  console.log("NEW VAL")
//  console.log(newVal);
//  console.log("OLD VAL");
//  console.log(oldVal);
//  $scope.productListIds=newVal;
//  }
//});
//    
//  console.log("PRODUCTS CONTROLLER");
//    
//  
//    
//    
//  $scope.$watch(function(){
//  return product_type_service.productTypes; 
//  },function(newVal,oldVal){
//  if (oldVal != newVal){
//  console.log("FROM PRODUCT LIST");
//  console.log("NEW VAL")
//  console.log(newVal);
//  console.log("OLD VAL");
//  console.log(oldVal);
//  $scope.productTypes=newVal;
//  }
//});    
    
    
    
    //call inventory_type by id and values will be stored in var productTypeId
    
    
    
    
    
    
    
    
    
    
    
    
//    $scope.call =function(id, description){
//        $scope.selectId=id;
//        $scope.title=description;
////        product_type_service.productTypeIds =id;
////        product_list_service.productTypes.description = description;
////        product_list_service.getProductTypeids();
////        
////        $scope.title=description;
//    }
//    
    
   
    
//    $scope.call = function(id){
//    
//    var productTypes=product_type_service.productTypes;
//    var productList=product_list_service.productList;
//    var productTypeId = product_type_service.productTypeIds;
//    var productListIds=product_list_service.productListIds;    
//        
//        
//////        var url = "/service/itemTypes/"+id+/"itemList";
////        console.log(url);
//        
//        
//        
//        for(var i=0; i<productTypes.length; i++){
//            if($scope.productTypes[i].id==productListIds){
//                $scope.description=$scope.productType[i].description;
//                $scope.productList=product_list_service.productListIds;
//            }
//        }
//        
//    };
    
    
    
}]);