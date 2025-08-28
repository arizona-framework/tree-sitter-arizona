# Tree-sitter Arizona

A [Tree-sitter](https://tree-sitter.github.io/) grammar for
[Arizona Framework](https://github.com/arizona-framework/arizona).

## Features

This Tree-sitter grammar provides:

- **Syntax highlighting** for `.herl` Arizona template files
- **HTML injection** for static content (proper HTML syntax highlighting)
- **Erlang injection** for dynamic expressions inside `{...}` blocks
- **Nested template support** with proper brace matching
- **Editor integration** for Neovim, VSCode, and other Tree-sitter supported editors
- **Erlang integration** for highlighting Arizona templates within Erlang code

## Installation

### Prerequisites

- Node.js

### Building the Parser

```bash
# Clone the repository
git clone https://github.com/arizona-framework/tree-sitter-arizona.git
cd tree-sitter-arizona

# Install dependencies
npm install

# Generate and build the parser
npm run build
```

### System Installation (Optional)

For system-wide installation of the parser library:

```bash
# Install parser system-wide (requires sudo)
sudo make install
```

This installs:
- **Header file**: `/usr/local/include/tree_sitter/tree-sitter-arizona.h`
- **Static library**: `/usr/local/lib/libtree-sitter-arizona.a`
- **Shared library**: `/usr/local/lib/libtree-sitter-arizona.so`
- **pkg-config file**: `/usr/local/lib/pkgconfig/tree-sitter-arizona.pc`
- **Query files**: `/usr/local/share/tree-sitter/queries/arizona/*.scm`

This allows other applications to link against the Arizona parser library and use the queries globally.

### Neovim Setup

1. **Configure nvim-treesitter** in your `init.lua`:

   ```lua
   require('nvim-treesitter.configs').setup({
     -- ... other config
     ensure_installed = {
       "html", "erlang", "arizona" -- Add arizona
     },
   })

   -- Register Arizona parser
   local parser_config = require('nvim-treesitter.parsers').get_parser_configs()
   parser_config.arizona = {
     install_info = {
       url = "https://github.com/arizona-framework/tree-sitter-arizona",
       files = { "src/parser.c" },
       branch = "main",
     },
     filetype = "arizona",
   }

   -- Register filetype
   vim.filetype.add({
     extension = { herl = "arizona" },
     pattern = { [".*%.herl"] = "arizona" },
   })
   ```

2. **Set up query files:**

   ```bash
   # Create symlinks to keep queries in sync
   mkdir -p ~/.config/nvim/after/queries/arizona
   ln -sf "$(pwd)/queries/highlights.scm" ~/.config/nvim/after/queries/arizona/highlights.scm
   ln -sf "$(pwd)/queries/injections.scm" ~/.config/nvim/after/queries/arizona/injections.scm
   ```

3. **Enable Erlang integration:**

   ```bash
   # Copy Erlang injection queries
   mkdir -p ~/.config/nvim/after/queries/erlang
   cp erlang-queries/injections.scm ~/.config/nvim/after/queries/erlang/injections.scm
   ```

## Grammar Structure

### Language Elements

The Arizona grammar recognizes two main elements:

- **Static Content**: HTML markup and text content
- **Dynamic Content**: Erlang expressions enclosed in `{...}` braces

## Development

### Project Structure

```tree
tree-sitter-arizona/
├── src/
│   ├── parser.c           # Generated C parser
│   ├── grammar.json       # Generated grammar JSON
│   └── node-types.json    # Generated node types
├── queries/
│   ├── highlights.scm     # Syntax highlighting rules
│   └── injections.scm     # Language injection rules
├── erlang-queries/
│   └── injections.scm     # Erlang-side injection queries
├── test/
│   ├── corpus/            # Tree-sitter test cases
│   │   ├── basic.txt      # Basic parsing tests
│   │   ├── complex.txt    # Complex template tests
│   │   └── tuples.txt     # Erlang tuple tests
│   └── highlight/
│       └── basic.herl     # Highlight test examples
├── grammar.js             # Grammar definition
├── package.json           # npm configuration and scripts
├── tree-sitter.json       # Tree-sitter configuration
├── Makefile               # Build configuration
└── README.md              # This file
```

### Testing

```bash
# Build the parser
npm run build

# Test parsing specific content
echo '<div>{arizona_template:get_binding(name, Bindings)}</div>' | npm run parse

# Parse files interactively
npm run parse test-file.herl

# Test queries
npm run query test-file.herl

# Run test suite
npm run test

# Update test expectations
npm run test:update

# Debug test failures
npm run test:debug

# Build WebAssembly version for web usage
npm run build:wasm

# Open tree-sitter playground
npm run playground
```

## Sponsors

If you like this tool, please consider [sponsoring me](https://github.com/sponsors/williamthome).
I'm thankful for your never-ending support :heart:

I also accept coffees :coffee:

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/williamthome)

## License

Copyright (c) 2025 [William Fank Thomé](https://github.com/williamthome)

Arizona is 100% open-source and community-driven. All components are
available under the Apache 2 License on [GitHub](https://github.com/arizona-framework/arizona).

See [LICENSE.md](LICENSE.md) for more information.
