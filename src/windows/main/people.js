var workers = require(__dirname + '/models/worker.js')
var jQuery = require(__dirname + '/../../jquery.min.js')
var ipc = require('ipc');


var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', function($scope) {
    var viewWorker = function() {
        $scope.workers = workers.viewWorkers().items;
    }
    viewWorker();
    
    $scope.newWorker = function(name, second, third) {
        workers.newWorker(name, second, third);
        jQuery('.delWorker').val("");
        viewWorker();
    }
    
    $scope.deleteWorker = function(cid) {
        workers.deleteWorker(cid);
        viewWorker();
        $scope.pays = '';
    }
    
    var viewPay = function(id) {
        var result = workers.viewPay(id).items;
        var payed = 0;
        var notPayed = 0;
        angular.forEach(result, function(value, key) {
            if(value.val) {
                payed += value.zp;
            }else {
                notPayed += value.zp;
            }
        });
        $scope.op = payed;
        $scope.np = notPayed;
        $scope.al = payed + notPayed;
        return result;
    }
    
    $scope.activeWorker = function(cid) {
        jQuery('.list-group-item').removeClass('active osom');
        jQuery('#' + cid).addClass('list-group-item active osom');
        $scope.pays = viewPay(cid);
    }
    
    $scope.addPay = function(zp, what) {
        var cid = Number(document.querySelector('.osom').id);
        var data = document.getElementById('date').value;
        workers.newPay(data, zp, what, cid);
        $scope.pays = viewPay(cid);
        $scope.pay = '';
    }
    
    $scope.delPay = function(cid) {
        workers.removePay(cid);
        var id = Number(document.querySelector('.osom').id);
        $scope.pays = viewPay(id);
    }
    
    $scope.updateStatus = function(cid, val) {
        workers.updateValue(cid, val);
        var id = Number(document.querySelector('.osom').id);
        viewPay(id);
    }
}]);