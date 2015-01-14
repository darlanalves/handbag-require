var handbag = require('handbag');
var fs = require('fs');

handbag.require = importModule;
handbag.requireFromManifest = requireFromManifest;

/**
 * Import a node module and register it as a value
 * @param {String} name Module name
 */
function importModule(name) {
    try {
        var modl = require(name);
        handbag.value(name, modl);
    } catch (e) {
        throw new Error('Module not found: ' + name, e);
    }
}

/**
 * Import node modules declared in a package.json manifest and
 * turn them into injectables
 * @param {String} file Path to package.json
 */
function requireFromManifest(file) {
    if (fs.existsSync(file)) {
        var json = require(file);

        if (json.dependencies && json.dependencies.length) {
            json.dependencies.forEach(function(version, name) {
                importModule(name);
            });
        }
    } else {
        throw new Error('Manifest file not found: ' + file);
    }
}

module.exports = handbag;
