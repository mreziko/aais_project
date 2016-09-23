
angular.module("shopping_cart").service("product_type_service", ["$http", function($http){
    
    
    
    
    
    //calling inventory_type
    this.productTypes = "";
    var obj =this;
    
        $http.get("/service/inventory_type").then(function(response){
        console.log("loggin just the response");
        console.log("End of response");
        //this.productTypes={};

        obj.productTypes= response.data;
        console.log(obj.productTypes);
    });
    
    
    
    //calling inventorytype_ids
    
    
    var ptiobject = this;
    this.id=null;
    
    
    
    this.getProductTypeids = function(){
        var url = "/service/inventory_type/"+this.id;
    
    
    $http.get(url).then(function(response){
        console.log("logging to inventory_type_ids just the response");
        console.log("End of response");
        //this.productTypes={};
        
        ptiobject.productTypeIds= response.data;
        console.log(ptiobject.productTypeIds);
    });
    
    
    }
    
    

}]);