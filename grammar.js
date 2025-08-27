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
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
