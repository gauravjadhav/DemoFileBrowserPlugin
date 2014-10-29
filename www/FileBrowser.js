function FileBrowser() {
}

FileBrowser.prototype.upload = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "FileBrowser", "upload", "");
};

FileBrowser.prototype.showUpload = function (successCallback, errorCallback) {
  this.show("", successCallback, errorCallback);
};


FileBrowser.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.filebrowser = new FileBrowser();
  return window.plugins.filebrowser;
};

cordova.addConstructor(FileBrowser.install);