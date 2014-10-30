function FileBrowser() {
}

FileBrowser.prototype.upload = function (object, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "FileBrowser", "upload", object);
};

FileBrowser.prototype.showUpload = function (object, successCallback, errorCallback) {
  this.show(object, successCallback, errorCallback);
};


FileBrowser.install = function () {
  if (!window.filebrowserplugin) {
    window.filebrowserplugin = {};
  }

  window.filebrowserplugin.filebrowser = new FileBrowser();
  return window.filebrowserplugin.filebrowser;
};

cordova.addConstructor(FileBrowser.install);