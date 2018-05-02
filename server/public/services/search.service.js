app.service('SearchService', ['$http', function($http) {
    console.log('SearchService is loaded');
    var self = this;
    self.src = {url: ''};
    const myKey = 'nr7lnegD2M71DZLZ5KcLHipXbA3bpMu6';
  

    self.getChocolate = function (taco) {
        $http({
          method: 'GET',
          url: 'https://api.giphy.com/v1/gifs/search',
          params: {api_key: myKey, q: taco, limit: 1},
          
        })
          .then(function(response) {
            console.log(response.data.data);
            self.src.url = response.data.data[0].images.original.url;
          })
          .catch(function(error) {
            console.log(error);
          })
      }
    }])