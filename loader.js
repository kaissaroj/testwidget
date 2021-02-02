function BMWidget() {
  this.widgetDom = document.querySelector("#bookmundi_widget_container");
  this.dataSets = {};
  this.url = "http://bookmundiapi.com/bmwidget/provider/";
}
BMWidget.prototype.init = function () {
  this.dataSets = this.widgetDom.dataset;
  console.log('datasets ...',this.dataSets)
  this.dataSets = Object.assign({}, this.dataSets);
};
BMWidget.prototype.createRequest = function () {
  var self = this;
  var paramString = Object.keys(self.dataSets)
    .map(function (key, index) {
      var temp = index === 0 ? "?" : "&";
      return temp + key + "=" + self.dataSets[key];
    })
    .join("");
  var tempUrl = this.url + paramString;
  this.getRequest(tempUrl, function (status) {
    console.log("request status", status);
  });
};
BMWidget.prototype.getRequest = function (url, callback) {
  console.log("making request to: ", url);
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
      callback(xmlHttp.responseText);
  };
  xmlHttp.open("GET", url, true);
  xmlHttp.send(null);
};
var bmWidget = new BMWidget();
bmWidget.init();
console.log('init ...')
