; extends

; arizona_template:from_string/1
(call
  expr: (remote
    module: (remote_module
      module: (atom) @module (#eq? @module "arizona_template"))
    fun: (atom) @fun (#eq? @fun "from_string"))
  args: (expr_args
    args: (string) @injection.content
          (#set! injection.language "arizona")
          (#set! injection.include-children)))
