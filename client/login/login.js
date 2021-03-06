(function () {

	angular
		.module('meanApp')
		.controller('loginCtrl', loginCtrl);

	loginCtrl.$inject = ['$scope', '$location', 'authentication'];
	
	function loginCtrl($scope, $location, authentication) {
		var vm = this;

		vm.credentials = {
			email : "",
			password : ""
		};

		vm.onSubmit = function () {
			authentication
				.login(vm.credentials)
				.error(function(err){
					$scope.errorMessage = err['message'];
				})
				.then(function(){
					$location.path('profile');
				});
		};

	}

})();