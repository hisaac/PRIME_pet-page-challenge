myApp.controller("CatsController", ["$http", function($http) {
    var self = this;
    var key = 'a1dfe9ada8d4bc4c65bf2db882562c29';
    var baseURL = 'http://api.petfinder.com/';

    self.getRandomPet = function() {
        var query = baseURL + 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=cat';
        query += '&output=basic';
        query += '&format=json';
        console.log('query: ', query);

        var request = encodeURI(query) + '&callback=JSON_CALLBACK';

        $http.jsonp(request).then(function(response) {
            self.pet = response.data.petfinder.pet;
            console.log(self.pet);
        });
    };
}]);
