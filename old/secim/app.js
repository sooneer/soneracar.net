'use strict';

// // Declare app level module which depends on views, and components
// 

(function(angular) {
    angular.module("sApp", []);
})(angular);

var myApp = angular.module('sApp', []);

myApp.controller("sController", ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        $scope.countAKP = 0;
        $scope.countCHP = 0;
        $scope.countIYI = 0;
        $scope.countHPD = 0;
        $scope.countSP = 0;
        $scope.countDiger = 0;

        $scope.Ekle = function(parti) {
            if (parti === 'CHP') {
                $scope.countCHP++;
            } else if (parti === 'AKP') {
                $scope.countAKP++;
            } else if (parti === 'IYI') {
                $scope.countIYI++;
            } else if (parti === 'HDP') {
                $scope.countHPD++;
            } else if (parti === 'SP') {
                $scope.countSP++;
            } else if (parti === 'Diger') {
                $scope.countDiger++;
            }
        };


        $scope.Cikart = function(parti) {
            if (parti === 'CHP') {
                $scope.countCHP--;
            } else if (parti === 'AKP') {
                $scope.countAKP--;
            } else if (parti === 'IYI') {
                $scope.countIYI--;
            } else if (parti === 'HDP') {
                $scope.countHPD--;
            } else if (parti === 'SP') {
                $scope.countSP--;
            } else if (parti === 'Diger') {
                $scope.countDiger--;
            }
        };

        // Millet Vekili Seçimi

        $scope.countAKPMV = 0;
        $scope.countCHPMV = 0;
        $scope.countIYIMV = 0;
        $scope.countHPDMV = 0;
        $scope.countSPMV = 0;
        $scope.countDigerMV = 0;

        $scope.EkleMV = function(parti) {
            if (parti === 'CHP') {
                $scope.countCHPMV++;
            } else if (parti === 'AKP') {
                $scope.countAKPMV++;
            } else if (parti === 'IYI') {
                $scope.countIYIMV++;
            } else if (parti === 'HDP') {
                $scope.countHPDMV++;
            } else if (parti === 'SP') {
                $scope.countSPMV++;
            } else if (parti === 'Diger') {
                $scope.countDigerMV++;
            }
        };


        $scope.CikartMV = function(parti) {
            if (parti === 'CHP') {
                $scope.countCHPMV--;
            } else if (parti === 'AKP') {
                $scope.countAKPMV--;
            } else if (parti === 'IYI') {
                $scope.countIYIMV--;
            } else if (parti === 'HDP') {
                $scope.countHPDMV--;
            } else if (parti === 'SP') {
                $scope.countSPMV--;
            } else if (parti === 'Diger') {
                $scope.countDigerMV--;
            }
        };
    }
]);