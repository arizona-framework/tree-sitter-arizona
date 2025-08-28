; extends

; HTML injection for static content
((static) @injection.content
 (#set! injection.language "html")
 (#set! injection.combined))

; Erlang injection for dynamic content
((dynamic) @injection.content
 (#set! injection.language "erlang")
 (#offset! @injection.content 0 1 0 -1))
