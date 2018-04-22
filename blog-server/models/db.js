var MongoClient = require('mongodb').MongoClient;
var enfError = require('./enf');

function DB() {
    this.db = null;
}

DB.prototype.connect = function(url, dbName) {
    // This inside the Promise will be different
    var _this = this;
	return new Promise(function(resolve, reject) {
		if (_this.db) { // Already connected
			resolve();
		} else { // Not connected
            var __this = _this;
			MongoClient.connect(url)
			.then(
				function(client) {
                    __this.db = client.db(dbName);
                    console.log("Connected successfully to database");
					resolve();
				},
				function(err) {
					console.log("Error connecting to database: " + err.message);
					reject(err);
				}
			)
		}
	})
}

// Find entry provided query and limit
DB.prototype.find = function(collection, query, limit=1) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        _this.db.collection(collection, function(err, col) {
            if (err) {
                console.log("Error accessing collection: " + err.message);
                reject(err);
            }
            else {
                col.find(query, { "_id": false }).limit(limit).toArray(function(err, foundArr) {
                    if (err) {
                        console.log("Error reading cursor: " + err.message);
                        reject(err);
                    }
                    // No entry found
                    else if (typeof(foundArr[0]) == 'undefined') {
                        reject(new enfError);
                    }
                    // At least one entry found
                    else { 
                        resolve(limit == 0 ? foundArr : foundArr.slice(0, limit));
                    }
                })
            }
        })
    })
}

// Find entry provided query and limit
// Also return a boolean representing whether it's possible to find anymore entry using the same params
DB.prototype.findAhead = function(collection, query, limit=1) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        _this.db.collection(collection, function(err, col) {
            if (err) {
                console.log("Error accessing collection: " + err.message);
                reject(err);
            }
            else {
                col.find(query).limit(limit*2).toArray(function(err, foundArr) {
                    if (err) {
                        console.log("Error reading cursor: " + err.message);
                        reject(err);
                    }
                    // No entry found
                    else if (typeof(foundArr[0]) == 'undefined') {
                        reject(new enfError);
                    }
                    // At least one entry found
                    else { 
                        let anotherQueryPossible = (typeof(foundArr[limit]) == 'undefined') ? false : true;
                        resolve([foundArr.slice(0, limit), anotherQueryPossible]);
                    }
                })
            }
        })
    })
}

// Insert one entry
DB.prototype.insertOne = function(collection, query) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        _this.db.collection(collection, function(err, col) {
            if (err) {
                console.log("Error accessing collection: " + err.message);
                reject(err);
            }
            else {
                col.insertOne(query, function(err, r) {
                    if (err) { // Insert failed
                        console.log("Error inserting: " + err.message);
                        reject(err);
                    }
                    // Insert succeeded
                    resolve();
                })
            }
        })
    })
}

// Update one entry
DB.prototype.updateOne = function(collection, filter, update) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        _this.db.collection(collection, function(err, col) {
            if (err) {
                console.log("Error accessing collection: " + err.message);
                reject(err);
            }
            else {
                col.updateOne(filter, update, function(err, r) {
                    if (err) { // Update failed
                        console.log("Error updating: " + err.message);
                        reject(err);
                    }
                    // Update succeeded
                    resolve();
                })
            }
        })
    })
}

// Delete one entry
DB.prototype.deleteOne = function(collection, query) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        _this.db.collection(collection, function(err, col) {
            if (err) {
                console.log("Error accessing collection: " + err.message);
                reject(err);
            }
            else {
                col.deleteOne(query, function(err, r) {
                    if (err) { // Delete failed
                        console.log("Error deleting: " + err.message);
                        reject(err);
                    }
                    // Delete succeeded
                    resolve();
                })
            }
        })
    })
}

module.exports = DB;
