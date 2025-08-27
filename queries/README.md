# Arizona Language Queries

This directory contains Tree-sitter queries for Arizona language (.herl files)
syntax highlighting and analysis.

## Query Files

### `highlights.scm`

Defines syntax highlighting rules for Arizona language:

- `{` and `}` delimiters are highlighted as punctuation
- Static content (HTML) gets `markup.raw.html` highlighting
- Dynamic content (Erlang) gets `embedded.erlang` highlighting

### `injections.scm`

Configures language injection for enhanced syntax highlighting:

- Static content is injected with HTML language parser
- Dynamic content is injected with Erlang language parser
- The `#offset!` directive excludes the `{` and `}` delimiters from Erlang parsing

### `locals.scm`

Defines local scopes for semantic analysis:

- Each dynamic block creates a local scope
- The entire source file is a scope container

### `tags.scm`

Provides code navigation support:

- Dynamic blocks are tagged as `reference.block`
- Static content is tagged as `reference.template`

## Usage

These queries enable editors with Tree-sitter support to provide:

- Proper syntax highlighting for HTML and Erlang within Arizona files
- Code navigation and symbol indexing
- Semantic analysis and local scope resolution
- Language injection for full-featured editing experience

## Testing

Use these commands to test the queries:

```bash
# Test highlighting
npx tree-sitter query queries/highlights.scm example.herl

# Test language injection
npx tree-sitter query queries/injections.scm example.herl

# Test tags for navigation
npx tree-sitter query queries/tags.scm example.herl
```
