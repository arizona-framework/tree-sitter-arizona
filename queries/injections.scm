; extends

; HTML injection for static content
((static) @injection.content
 (#set! injection.language "html")
 (#set! injection.combined))

; Erlang injection for dynamic content
((dynamic) @injection.content
 (#set! injection.language "erlang"))
