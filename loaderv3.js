function BMWidget() {
  this.widgetDom = null;
  this.dataSets = {};
  this.url = "http://localhost:3000/bmapi/v1/widget/loader";
}
BMWidget.prototype.init = function () {
  this.widgetDom = document.getElementById("bookmundi_widget_container");
  this.dataSets = this.widgetDom.dataset;
  this.dataSets = Object.assign({}, this.dataSets);
  this.createRequest();
};
BMWidget.prototype.createRequest = function () {
  const url = "https://ghcdn.rawgit.org/kaissaroj/testwidget/main/bmv2.js";
  injectCss()
  loadJS(url);
  // this.getRequest(function (status) {
  //   console.log("request status", status);
  // });
};
BMWidget.prototype.getRequest = function (callback) {
  var http = new XMLHttpRequest();
  http.open("POST", this.url, true);
  http.setRequestHeader("Content-type", "application/json");
  http.onload = function () {
    callback(this.responseText);
  };
  http.send(JSON.stringify(this.dataSets));
};
var bmWidget = new BMWidget();
bmWidget.init()
function loadJS(src) {
  var script = document.createElement("script");
  script.onload = function () {};
  script.src = src;
  document.head.appendChild(script);
}

function injectCss() {
  var link = document.createElement("link");
  link.href = "https://ghcdn.rawgit.org/kaissaroj/testwidget/main/bmv2.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);
}

