angular.module('App')

.controller('SearchCtrl', function($scope, PrmsSrv, $http, API){
	
	// Create Variables from URL parameters
	// var url = window.location.href;
	// var min = PrmsSrv.getParams('min', url);
	// var max = PrmsSrv.getParams('max', url);
	// var gq1 = PrmsSrv.getParams('gq1', url);
	// var gq2 = PrmsSrv.getParams('gq2', url);
	// var gq3 = PrmsSrv.getParams('gq3', url);
	// var beds = PrmsSrv.getParams('beds', url);
	// var location = PrmsSrv.getParams('location', url);

	// Get the results from the initial search
	// $http.get(API+'search?min='+min+'&max='+max+'&location='+location+'&beds='+beds+'&gq1='+gq1+'&gq2='+gq2+'&gq3='+gq3)
	// .success(function(data){
	// 	$scope.properties = data.properties;
	// 	$scope.neighborhoods = data.neighborhoods;
	// });





	// Este es un ejemplo del resultado de la busqueda
	$scope.properties = [
		{
			_source: {
				address: "355 W 85th St",
				amenities: {
					cats:0,
					central_ac:0,
					childrens_playroom:0,
					common_outdoor:0,
					concierge:0,
					dish_washer:0,
					dogs:0,
					doorman1:0,
					elevator1:1,
					fire_place:0,
					furnished:0,
					gym:0,
					laundry_building1:1,
					laundry_unit1:0,
					live_in_super:1,
					lounge:0,
					no_fee:0,
					parking:0,
					pool:0,
					private_outdoor1:0,
					storage_room:0
				},
				baths: 1,
				beds: 1,
				description: "Here some description",
				location:"40.789171, -73.980059",
				neighborhood:"Upper West Side",
				postal_code:"",
				price:2250,
				selling_points: {
					haracter:1,
					chefs_kitchen:0,
					closet_space:0,
					doorman1:0,
					elevator1:1,
					laundry_building1:1,
					laundry_unit1:0,
					low_floor:0,
					luxury_building:0,
					modern:0,
					natural_light:0,
					newly_renovated:0,
					private_outdoor1:0,
					proximity_subway:1,
					quiet_peaceful:1,
					size:0,
					views:0
				},
				slug:"355-W-85th-St",
				thumbnail:"http://www.gzbrokers.com/media/com_iproperty/pictures/1438382673563a2a4359e29.jpg",
				user_id:8,

			},
			amenitiesClasses: {
				0:"elevator1",
				1:"laundry_building1",
				2:"live_in_super"
			},
			calculated_value: 70,
			match:83
		},
		{
			_source: {
				address: "277 West End Ave",
				amenities: {
					cats:0,
					central_ac:0,
					childrens_playroom:0,
					common_outdoor:0,
					concierge:0,
					dish_washer:0,
					dogs:0,
					doorman1:0,
					elevator1:1,
					fire_place:0,
					furnished:0,
					gym:0,
					laundry_building1:1,
					laundry_unit1:0,
					live_in_super:1,
					lounge:0,
					no_fee:0,
					parking:0,
					pool:0,
					private_outdoor1:0,
					storage_room:0
				},
				baths: 1,
				beds: 1,
				description: "Here some Other description",
				location:"40.7803754, -73.9843681",
				neighborhood:"Upper West Side",
				postal_code:"",
				price:1450,
				selling_points: {
					haracter:1,
					chefs_kitchen:0,
					closet_space:0,
					doorman1:0,
					elevator1:1,
					laundry_building1:1,
					laundry_unit1:0,
					low_floor:0,
					luxury_building:0,
					modern:0,
					natural_light:0,
					newly_renovated:0,
					private_outdoor1:0,
					proximity_subway:1,
					quiet_peaceful:1,
					size:0,
					views:0
				},
				slug:"355-W-85th-St",
				thumbnail:"http://www.gzbrokers.com/media/com_iproperty/pictures/1438382673563a2a4359e29.jpg",
				user_id:8,

			},
			amenitiesClasses: {
				0:"elevator1",
				1:"laundry_building1",
				2:"live_in_super"
			},
			calculated_value: 70,
			match:83
		}
	];
});