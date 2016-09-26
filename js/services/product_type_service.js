
angular.module("shopping_cart").service("product_type_service", ["$http", function($http){
    
    
    
    
//     var obj =this;
//    //calling inventory_type
//    
//    this.id=null;
    
     var plObject=this;    
    this.id=null;
    
   
    
    $http.get("/service/inventory_type").then(function(response){
        console.log("loggin just the response");
        console.log("End of response");
        //this.productTypes={};

        plObject.productTypes= response.data;
        console.log(plObject.productTypes);
    });
    
    
    
    //calling inventorytype_ids
    
   
    
        
    
    this.getProductTypeids = function(){
        var url = "/service/inventory_type/"+plObject.id;
    
    
    $http.get(url).then(function(response){
        
        
        console.log("logging to inventory_type_ids just the response");
        console.log("End of response");
        //this.productTypes={};
        
        plObject.productTypeIds= response.data;
        console.log(plObject.productTypeIds);
    });
    
    
    }
    
    

}]);