app.controller('SearchController', ['$http', function($http) {
    console.log('angular.js');
    const myKey = 'nr7lnegD2M71DZLZ5KcLHipXbA3bpMu6';
    var self = this;
    self.src = '';
    self.searchIn = '';
    
  
    self.getSearch = function () {
      $http({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {api_key: myKey, q: self.searchIn, limit: 1},
        
      })
        .then(function(response) {
          console.log(response.data.data);
          self.src = response.data.data[0].images.original.url;
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  }])