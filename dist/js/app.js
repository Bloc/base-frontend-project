var blocChat = angular.module('BlocChat', ['ui.router', 'firebase']);
blocChat.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$stateProvider.state('home', {
		url: '/',
		controller: 'Home.controller',
		templateUrl: '/templates/home.html'
	});
}])

blocChat.controller('Home.controller', ['$scope', 'Room', function($scope, Room) {
	$scope.chatRoom = {
		room: [{name: "Chat Room 1"}, {name: "Chat Room 2"}, {name: "Chat Room 3"}]
	};
}])

blocChat.factory('Room', ['$firebase', function($firebase) {
	var ref = new Firebase("https://screaming-wind-7497.firebaseio.com/");
	var rooms = $firebase(ref.child('rooms')).$asArray();;
	return {
		all: rooms
	}
}])

