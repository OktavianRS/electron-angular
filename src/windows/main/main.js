var ipc = require('ipc');
var locallydb = require(__dirname + '/../../index.js')
var jQuery = require(__dirname + '/../../jquery.min.js')
var Clipboard = require('clipboard');

var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', function($scope) {
    
    var viewServices = function() { 
        $scope.services = locallydb.viewService().items;
        $scope.products = locallydb.viewProduct().items;
        new Clipboard('.clipboard');
    }
    viewServices();
    
    $scope.cb = function(){
        var id = Number(document.querySelector('.osom').id);
        var values = locallydb.viewPurchase(id).items;
        var result = '';
        var all = 0;
        angular.forEach(values, function(value, key) {
            all += Number(value.Al);
            result += value.Us + ' ' + value.Kl + 'шт. ' + value.Al + 'грн.\n';
        });
        result += 'Всего: ' + all + 'грн.';
        $scope.copy = result;
    }
    
        $scope.cbp = function(){
            var id = Number(document.querySelector('.osom').id);
            var values = locallydb.viewPurchase(id).items;
            var result = '';
            var all = 0;
            angular.forEach(values, function(value, key) {
                all += Number(value.Al);
                result += value.Us + ' ' + value.Kl + 'шт. ' + value.Al + 'грн.\n';
            });
            result += 'Всего: ' + all + 'грн.';
            $scope.copy = result;
            var docDefinition = { content: result };
                pdfMake.createPdf(docDefinition).print();
        }
    
    $scope.newService = function( name, age) {
        var date = document.getElementById('date').value;
        locallydb.newService(date, name, age);
        viewServices();
        $scope.service = '';
    }
    
    var all = function(id, pch) {
        var values = pch;
        var Sb = 0,
            Zb = 0,
            Al = 0;
        angular.forEach(values, function(value, key) {
            if(!value.val){
            Sb += Number(value.Sb) * Number(value.Kl);
            Zb += Number(value.Zb) * Number(value.Kl);
            Al += Number(value.Al);
            }
        });
        return {Sb: Sb, Zb: Zb, Al: Al};
    }
    
    $scope.go = function(id) {
        jQuery('.list-group-item').removeClass('active osom');
        jQuery('#' + id).addClass('list-group-item active osom');
        $scope.purchases = locallydb.viewPurchase(Number(id)).items;
        $scope.res = all(id, $scope.purchases);
    }
    
    $scope.addProduct = function(what, Sb, Zb) {
        locallydb.newProduct(what, Sb, Zb);
         $scope.data = {
            repeatSelect: null,
            availableOptions: locallydb.viewProduct().items
        };
        $scope.product = '';
    }
    
    $scope.updateProduct = function(cid, what, Sb, Zb) {
        locallydb.updateProduct(cid, what, Sb, Zb);
    }
    
    $scope.updateService = function(cid, name, age) {
        var date = document.getElementById('dateModal').value;
        locallydb.updateService(cid, date, name, age);
        $scope.selectedName = '';
    }
    
    $scope.data = {
        repeatSelect: null,
        availableOptions: locallydb.viewProduct().items
    };
    
    $scope.addPurchase = function(data) {
        var id = Number(document.querySelector('.osom').id);
        var Kl = Number(document.getElementById('Kl').value);
        var Zb = data.Zb;
        var Al = Kl*(Zb+data.Sb);
        locallydb.newPurchase(id, data.what, data.Sb,  Zb, Kl, Al);//ВОзможно неправильный заработок и общая сумма и вобще пошло оно всё нахер я иду спать!
        $scope.purchases = locallydb.viewPurchase(id).items;
        $scope.res = all(id, $scope.purchases);
    }    
    
    $scope.delPurchase = function(cid) {
        locallydb.removePurchase(cid);
        var id = Number(document.querySelector('.osom').id);
        $scope.purchases = locallydb.viewPurchase(Number(id)).items;
        $scope.res = all(id, $scope.purchases);
    }
    
    $scope.delService = function(cid) {
        locallydb.removeService(cid);
        viewServices();
        $scope.purchases = '';
    }
    
    $scope.updateStatus = function(cid, val) {
        locallydb.updateValue(cid, val);
        var id = Number(document.querySelector('.osom').id);
        $scope.purchases = locallydb.viewPurchase(Number(id)).items;
        $scope.res = all(id, $scope.purchases);
    }
    
    $scope.compareDate = function() {
       //Note: 00 is month i.e. January
        var dateOne = document.getElementById('dateStarting').value;
        var dateTwo = document.getElementById('dateEnding').value;
       var min = new Date(dateOne); //Year, Month, Date
       var max = new Date(dateTwo); //Year, Month, Date
        var date;
        var result;
        var apache = [];
        var shark = [];
        var Zb = 0;
        $scope.date = {start: dateOne, end: dateTwo};
        angular.forEach($scope.services, function(value, key) {
            date = new Date(value.date);
            if(date >= min && date <= max){
                result =  locallydb.viewPurchase(Number(value.cid)).items;
                Zb += all(0, result).Zb;
                
            }
        });
        $scope.income = Zb;
    }
 
}]);