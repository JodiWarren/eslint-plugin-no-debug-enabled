/**
 * @fileoverview Don't allow debug to be enabled
 * @author Jodi Warren
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Don't allow debug to be enabled",
            category: "Best Practices",
            recommended: false
        },
        fixable: "code",  // or "code" or "whitespace"
        schema: [
            {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            }
        ]
    },

    create: function(context) {

        var testAgaintNames = context.options[0] || ["debug"];

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------


        return {
            MemberExpression: function(node, nextNode) {
                if ( testAgaintNames.indexOf(node.object.name) > -1 && node.property.name === 'enable') {
                    context.report({
                        node: node,
                        message: "Don't have debug enabled.",
                        fix: function(fixer) {
                            return fixer.insertTextBefore(node, '// ')
                        }
                    })
                }
            }
        };
    }
};
