angular.module("shopping_cart").service("product_list_service", ["$http", function($http){
    
    //calling inventory (products)
    this.productList="productList";
    var plObject=this;
    
    
    $http.get("/service/inventory").then(function(response){
        console.log("logging to inventory for the List");
        console.log("End of response");
                
        plObject.productList= response.data;
      console.log(plObject.productList);
    });
    
   // calling inventory list by inventorytype_id
    
    
    
    var pliobject = this;
    this.productListIds = null;
    
    this.getProductListIds=function(){
    var url ="/service/inventory/"+this.productListIds;    
     
    
    $http.get(url).then(function(response){
        console.log("logging to inventory to get inventorytype_ids");
        console.log("End of response");
        //this.productTypes={};
        
        pliobject.productListIds= response.data;
        console.log(pliobject.productListIds);
    });
    }
    
    
}]);