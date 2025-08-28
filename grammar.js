/**
 * @file Tree-sitter parser for Arizona language (.herl files) - HTML with embedded Erlang code
 * @author William Fank Thomé <willilamthome@hotmail.com>
 * @license  Apache-2.0
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "arizona",

  rules: {
    source_file: $ => repeat($._item),

    _item: $ => choice($.dynamic, $.static),

    dynamic: $ => $._dynamic_expression,

    _dynamic_expression: $ => seq('{', optional($._dynamic_content), '}'),

    _dynamic_content: $ => repeat1(choice(
      /[^{}]+/,
      $._dynamic_expression
    )),

    static: _$ => choice(
      /[^{\\]+/,
      '\\{',
      seq('\\', /[^{]/),
      '\\'
    )
  }
});
