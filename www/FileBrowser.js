function FileBrowser() {
}

FileBrowser.prototype.upload = function (object, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "FileBrowser", "upload", object);
};

FileBrowser.prototype.showUpload = function (object, successCallback, errorCallback) {
  this.upload(object, successCallback, errorCallback);
};


FileBrowser.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.filebrowser = new FileBrowser();
  return window.plugins.filebrowser;
};

cordova.addConstructor(FileBrowser.install);