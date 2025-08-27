/**
 * @file Tree-sitter parser for Arizona language (.herl files) - HTML with embedded Erlang code
 * @author William Fank Thomé <will@iamtho.me>
 * @license  Apache-2.0
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "arizona",

  rules: {
    source_file: $ => repeat($._item),

    _item: $ => choice(
      $.static,
      $.dynamic
    ),

    static: $ => /[^{}]+/,

    dynamic: $ => seq(
      '{',
      optional($._dynamic_expression),
      '}'
    ),

    _dynamic_expression: $ => repeat1(choice(
      /[^{}]+/,
      seq('{', optional($._dynamic_expression), '}')
    ))
  }
});
