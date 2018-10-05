// Doc:
// fs.access(path[, mode], callback)
// - path 
// - mode <integer> Default: fs.constants.F_OK
// - callback <Function>

// Example calls:
// fs.access(path, mode, callback);
// fs.access(path, callback);

fs.access = function(path, mode, callback) {
    if (typeof mode === 'function') {
        callback = mode;
        mode = F_OK;
    }

    path = getPathFromURL(path);
    validatePath(path);

    mode = mode | 0;
    var req = new FSReqWrap();
    req.oncomplete = makeCallback(callback);
    binding.access(pathModule.toNamespacedPath(path), mode, req);
};


