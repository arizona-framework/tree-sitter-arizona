; extends

; Dynamic block delimiters
"{" @punctuation.delimiter
"}" @punctuation.delimiter

; Content types
((static) @html)
((dynamic) @erlang)
