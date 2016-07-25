// load locallydb
var locallydb = require('locallydb');

// load the database (folder) in './mydb', will be created if doesn't exist 
var db = new locallydb('./mydb');

// load the collection (file) in './mydb/monsters', will be created if doesn't exist 
var service = db.collection('service');
var purchase = db.collection('purchase');
var product = db.collection('product');

locallydb.newService = function(date, name, age) {
    service.insert({date: date, name: name, age: age});
}
locallydb.updateService = function(cid, date, name, age) {
    service.update(cid, {date, name, age});
}

locallydb.viewService = function() {
    return service.where({});
}

locallydb.removeService = function(cid) {
    service.remove(cid);
}

locallydb.removePurchase = function(cid) {
    purchase.remove(cid);
}

locallydb.updateValue = function(cid, val) {
    purchase.update(cid, {val: val});
}

locallydb.newPurchase = function(id, Us, Sb, Zb, Kl, Al) {
    purchase.insert({id: id, Us: Us, Sb: Sb, Zb: Zb, Kl: Kl, Al: Al });
}

locallydb.viewPurchase = function(id) {
    return purchase.where({id: id});
}

locallydb.newProduct = function(what, Sb, Zb) {
    product.insert({what: what, Sb: Sb, Zb: Zb});
}

locallydb.updateProduct = function(cid, what, Sb, Zb) {
    product.update(cid, {what: what, Sb: Sb, Zb: Zb});
}

locallydb.viewProduct = function() {
    return product.where({});
}

locallydb.viewSelectedProduct = function(selectedItem) {
    return product.where({what: selectedItem});
}

module.exports = locallydb;
