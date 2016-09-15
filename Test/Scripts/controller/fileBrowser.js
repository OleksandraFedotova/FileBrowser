app.controller('fileBrowserCtrl', function ($scope, directoriesService) {

    $scope.getCurrentFolder = function (path) {
        directoriesService.getExplorerModel(path)
            .success(function (response) {
                $scope.currentFolder = response["CurrentFolder"];
                $scope.DirModelList = response["DirectModelList"];
                $scope.FileModelList = response["FileModelList"];
                $scope.getCountOfFiles(path);
            });
    };

    $scope.getCountOfFiles = function (path) {
        directoriesService.getCountOfFiles(path)
            .success(function (data) {
                $scope.sizes = data;
            });
    };

    $scope.moveBack = function (path) {
        if (/^[A-Z]:\\$/.test(path)) {
            $scope.getCurrentFolder();
        } else {
            $scope.getCurrentFolder(path.substr(0, path.lastIndexOf('\\')));
        }
    };

    $scope.folderIsRoot = function (folder) {
        return folder != '';
    };

    $scope.getCurrentFolder();
}
);