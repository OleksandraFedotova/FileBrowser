app.factory('directoriesService', ['$http', function ($http) {

    var fileExplorerUrl = 'http://localhost:64132/api/FileBrowser/Index/';
    var countOfFilesUrl = 'http://localhost:64132/api/FileBrowser/GetDirectoryFilesSizeStatistic/';

    var directoriesService = {};

        directoriesService.getExplorerModel = function (path) {
            if(typeof path === 'undefined'){
                path = '';
            } else {
                path = '?realpath=' + path;
            }
            return $http.get(fileExplorerUrl + path, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
        };

        directoriesService.getCountOfFiles = function (path) {
            if(typeof path === 'undefined'){
                path = '';
            } else {
                path = '/' + path;
            }
            return $http.get(countOfFilesUrl + path);
        };


        return directoriesService;
}]);
