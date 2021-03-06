angular.module('noteService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Notes', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/notes');
			},
			create : function(noteData) {
				return $http.post('/api/notes', noteData);
			},
			update : function(noteData) {
				return $http.post('/api/notes/' + noteData._id, noteData);
			},
			delete : function(id) {
				return $http.delete('/api/notes/' + id);
			}
		}
	}]);