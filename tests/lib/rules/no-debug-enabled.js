/**
 * @fileoverview Don&#39;t allow debug to be enabled
 * @author Jodi Warren
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-debug-enabled"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-debug-enabled", rule, {

    valid: [
        {
            code: "console.log('not checking for this!')",
        },
        {
            code: "debugpkg.disable('test')",
        },
        {
            code: "otherName.enable('test')",
            options: [["debug", "debugpkg"]],
            errors: [{
                message: "Don't have debug enabled.",
                type: "MemberExpression"
            }]
        },
    ],

    invalid: [
        {
            code: "debug.enable('test')",
            errors: [{
                message: "Don't have debug enabled.",
                type: "MemberExpression"
            }]
        },
        {
            code: "debugpkg.enable('test')",
            options: [["debug", "debugpkg"]],
            errors: [{
                message: "Don't have debug enabled.",
                type: "MemberExpression"
            }]
        },
        {
            code: "otherName.enable('test')",
            options: [["debug", "debugpkg", "otherName"]],
            errors: [{
                message: "Don't have debug enabled.",
                type: "MemberExpression"
            }]
        },
    ]
});
