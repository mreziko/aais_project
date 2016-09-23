

angular.module("shopping_cart").controller("home_controller",["$scope", "product_type_service", "product_list_service", function($scope, product_type_service,product_list_service){
    
    
        $scope.description="";
        $scope.productTypes = "";
    
    
    
    
    
        console.log("FROM CONTROLLER for inventory_type");
        console.log(product_type_service.productTypes);
        $scope.$watch(function(){
            return product_type_service.productTypes;
        },function(newVal,oldVal){
            if (oldVal != newVal){
                console.log("FROM WATCH LIST, inventory_type");
                console.log("NEW VAL, inventory_type")
                console.log(newVal);
                console.log("OLD VAL, inventory_type");
                console.log(oldVal);
                $scope.productTypes=newVal;
            }

        });
    
      console.log("FROM CONTROLLER for inventorytype_ids");
        console.log(product_list_service.productListIds);
        $scope.$watch(function(){
            return product_list_service.productListIds;
        },function(newVal,oldVal){
            if (oldVal != newVal){
                console.log("FROM WATCH LIST, inventory for inventorytype_id");
                console.log("NEW VAL, inventory for inventorytype_id")
                console.log(newVal);
                console.log("OLD VAL, inventory for inventorytype_id");
                console.log(oldVal);
                $scope.productListIds=newVal;
            }

        });
    
    
    
    $scope.call =function(id, description){
        $scope.id=product_type_service.productTypes.id;
        $scope.description=product_type_service.productTypes.description;
//        
        product_list_service.getProductListIds();
//        
//        $scope.title=description;
    }
    
    


    }]);