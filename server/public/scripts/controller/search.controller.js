app.controller('SearchController', ['SearchService', function(SearchServices) {
    var self = this;
    self.src = SearchServices.src;
    self.searchIn = '';

    self.getSearch = function(){
        SearchServices.getChocolate(self.searchIn);
    }
 

}]);