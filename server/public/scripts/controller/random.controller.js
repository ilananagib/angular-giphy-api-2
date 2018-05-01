app.controller('RandomController', ['$http', function($http) {
  console.log('random');
  var self = this;
  const myKey = 'nr7lnegD2M71DZLZ5KcLHipXbA3bpMu6';
  self.src = '';

  
  self.getRandom = function () {
    $http({
      method:'GET', 
      url: 'https://api.giphy.com/v1/gifs/random',
      params: {api_key: myKey, limit: 1}
    })
      .then(function(response) {
        console.log(response.data.data.images.original.url);
        self.src = response.data.data.images.original.url;
      })
  }
}])