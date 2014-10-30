function FileBrowser() {
}

FileBrowser.prototype.upload = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "FileBrowser", "upload", "");
};

FileBrowser.prototype.showUpload = function (successCallback, errorCallback) {
  this.show("", successCallback, errorCallback);
};


FileBrowser.install = function () {
  if (!window.filebrowserplugin) {
    window.filebrowserplugin = {};
  }

  window.filebrowserplugin.filebrowser = new FileBrowser();
  return window.filebrowserplugin.filebrowser;
};

cordova.addConstructor(FileBrowser.install);