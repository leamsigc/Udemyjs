function customHTTP() {
  this.http = new XMLHttpRequest();
}
//get request
customHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  let self = this;

  this.http.onload = function() {
    if (this.status === 200) {
      callback(null, this.responseText);
    } else {
      callback("Error:" + self.http.status);
    }
  };
  this.http.send();
};
//post request
customHTTP.prototype.post = function(url, dataToAdd, callBack) {
  this.http.open("POST", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;

  this.http.onload = function() {
    callBack(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(dataToAdd));
};
/**
 * Make a HTTP PUT
 * REQUEST
 */
customHTTP.prototype.put = function(url, data, callBack) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;

  this.http.onload = function() {
    callBack(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

/***
 * Delete a post request
 *
 * ***/

customHTTP.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, "Post deleted");
    } else {
      callback("Error:" + self.http.status);
    }
  };
  this.http.send();
};
