app.service('RandomService', ['$http', function (http) {
  console.log('random');
  var self = this;
  self.src = { url: '' };




  self.getRandom = function () {
    $http({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/random',
      params: { api_key: myKey, limit: 1 }
    })
      .then(function (response) {
        console.log(response.data.data.images.original.url);
        self.src.url = response.data.data.images.original.url;
      })
  }
}])