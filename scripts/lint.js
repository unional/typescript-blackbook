"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var glob_1 = require("glob");
var markdownlint_1 = require("markdownlint");
var type_plus_1 = require("type-plus");
var config = markdownlint_1["default"].readConfigSync('.markdownlint.json');
var files = glob_1["default"].sync('**/*.md', { ignore: 'node_modules/**' });
var results = markdownlint_1["default"].sync({ config: config, files: files });
type_plus_1.forEachKey(results, function (k) {
    var errors = results[k];
    if (errors.length > 0) {
        console.info(chalk_1.yellow(k) + " contains " + chalk_1.cyan(errors.length) + " " + chalk_1.red('errors') + ":");
        console.info(errors.map(function (e) { return "  " + e.ruleDescription + " (" + chalk_1.blue(k + ":" + e.lineNumber) + ")"; }).join('\n'));
        console.info('');
    }
});
