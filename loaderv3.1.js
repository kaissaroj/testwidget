function BMWidget() {
  this.widgetDom = null;
  this.dataSets = {};
}
BMWidget.prototype.init = function () {
  this.widgetDom = document.getElementById("bookmundi_widget_container");
  this.dataSets = this.widgetDom.dataset;
  this.dataSets = Object.assign({}, this.dataSets);
  this.createRequest();
};
BMWidget.prototype.createRequest = function () {
  const url = "https://cdn.jsdelivr.net/gh/kaissaroj/testwidget@main/bmv3.1.js";
  injectCss()
  loadJS(url);
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
  link.href = "https://cdn.jsdelivr.net/gh/kaissaroj/testwidget@main/bmv3.1.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);
}

