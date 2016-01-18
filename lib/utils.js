/* global Utils */
/* global FS */
/* global _ */
/* global Mongo */
Utils = (function() {
  
  this.isCollection = function(collection) {
    return (
      this.isMongoCollection(collection) ||
      this.isFSCollection(collection)
    );
  };
  
  this.isMongoCollection = function(collection) {
    return (collection instanceof Mongo.Collection);
  };
  
  this.isFSCollection = function(collection) {
    return (
      !_.isUndefined(FS) &&
      !_.isUndefined(FS.Collection) &&
      (collection instanceof FS.Collection)
    );
  };
  
  return this;
}).call({});