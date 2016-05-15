angular.module('recipe.services', [])
.factory('recipeServices', function($http) {

     var recipes = [
       {
         id: 1,
         title: 'Jeera Chicken',
         isFavorite: false,
         rating: 4.1,
         imgUrl: 'http://lorempixel.com/150/150/food/',
         steps: [
           {
             stepIndex: 1,
             detail: 'mix it kajsdk as hdkjashd kajshd kahsd kashdkajsh kdasjhd khasdk haksdjh ashd',
           },
           {
             stepIndex: 2,
             detail: 'mix it kajsdk as hdkjashd kajshd kahsd kashdkajsh kdasjhd khasdk haksdjh ashd',
           },
           {
             stepIndex: 3,
             detail: 'mix it kajsdk as hdkjashd kajshd kahsd kashdkajsh kdasjhd khasdk haksdjh ashd',
           },
           {
             stepIndex: 4,
             detail: 'mix it kajsdk as hdkjashd kajshd kahsd kashdkajsh kdasjhd khasdk haksdjh ashd',
           },
           {
             stepIndex: 5,
             detail: 'mix it kajsdk as hdkjashd kajshd kahsd kashdkajsh kdasjhd khasdk haksdjh ashd',
           },
           {
             stepIndex: 6,
             detail: 'mix it kajsdk as hdkjashd kajshd kahsd kashdkajsh kdasjhd khasdk haksdjh ashd',
           },
           {
             stepIndex: 7,
             detail: 'mix it kajsdk as hdkjashd kajshd kahsd kashdkajsh kdasjhd khasdk haksdjh ashd',
           },
           {
             stepIndex: 8,
             detail: 'mix it kajsdk as hdkjashd kajshd kahsd kashdkajsh kdasjhd khasdk haksdjh ashd',
           }
         ],
         ingredents: [
           {
              name: 'Chicken',
              quantity: '1',
              unit: 'lbs'
           },
           {
              name: 'Tomato',
              quantity: '1',
              unit: 'cts'
           },
           {
              name: 'Onion',
              quantity: '1',
              unit: 'cts'
           },
           {
              name: 'Chilly',
              quantity: '2',
              unit: 'cts'
           },
         ]
       },
       {
         id: 2,
         title: 'Chicken Biryani',
         isFavorite: true,
         rating: 0.2,
         imgUrl: 'http://lorempixel.com/150/150/food/'
       },
       {
         id: 3,
         title: 'Bharta Rengna',
         isFavorite: true,
         rating: 1,
         imgUrl: 'http://lorempixel.com/150/150/food/'
       },
       {
         id: 4,
         title: 'Testy Faluda with mali kulfi flavour',
         isFavorite: true,
         rating: 1.6,
         imgUrl: 'http://lorempixel.com/150/150/food/'
       },
       {
         id: 5,
         title: 'Dabba Ghost',
         isFavorite: false,
         rating: 2,
         imgUrl: 'http://lorempixel.com/150/150/food/'
       },
       {
         id: 6,
         title: 'Bhendi Masala',
         isFavorite: false,
         rating: 2.3,
         imgUrl: 'http://lorempixel.com/150/150/food/'
       },
       {
         id: 7,
         title: 'Lassi',
         isFavorite: false,
         rating: 5.2,
         imgUrl: 'http://lorempixel.com/150/150/food/'
       }
     ];

   return {
     all : all,
     get : get
   };

   function all(){
     $http.get('https://api.mlab.com/api/1/databases/home_recipes/collections/recipes?apiKey=xlKkXtSD0seav4tWRbKMaPII7gKndHpT').then(
       function(response){
         recipes = response.data;
       }
     )
     return recipes;
   }

   function get(id){
     return recipes[id - 1];
   }
});
