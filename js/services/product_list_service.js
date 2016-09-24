angular.module("shopping_cart").service("product_list_service", ["$http", function($http){
    
    //calling inventory (products)
   
   
   
    
    
    $http.get("/service/inventory").then(function(response){
        console.log("logging to inventory for the List");
        console.log("End of response");
                
        plObject.productList= response.data;
      console.log(plObject.productList);
    });
    
   // calling inventory list by inventorytype_id
    
    //this service is being called when clicked, invoking call() function
    
    
//    this.inventorytype_id = null;
     var plObject=this;    
    this.id=null;
    
    this.getProductListIds=function(){
        
      var url ="/service/inventory/"+plObject.id;     
   
     
    
    $http.get(url).then(function(response){
        
        
        console.log("logging to inventory to get inventorytype_ids");
        console.log("End of response");
        
        
        plObject.productListIds= response.data;
        
        console.log(plObject.productListIds);
    });
    }
    
    
}]);