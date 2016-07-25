// load locallydb
var locallydb = require('locallydb');

// load the database (folder) in './mydb', will be created if doesn't exist 
var db = new locallydb('./mydb');

// load the collection (file) in './mydb/monsters', will be created if doesn't exist 
var worker = db.collection('worker');
var pay = db.collection('pay');

locallydb.newWorker = function(name, second, third) {
    worker.insert({name: name, second: second, third: third});
}

locallydb.viewWorkers = function() {
    return worker.where({});
}

locallydb.deleteWorker = function(cid) {
    worker.remove(cid);
    pay.remove(null,{id: cid});
}

locallydb.newPay = function(data, zp, what, cid) {
    pay.insert({data: data, zp: zp, what: what, id: cid});
}

locallydb.viewPay = function(id) {
    return pay.where({id: id});
}

locallydb.removePay = function(cid) {
    pay.remove(cid);
}

locallydb.updateValue = function(cid, val) {
    pay.update(cid, {val: val});
}

module.exports = locallydb;