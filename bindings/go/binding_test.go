package tree_sitter_arizona_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_arizona "github.com/arizona-framework/arizona_tree_sitter/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_arizona.Language())
	if language == nil {
		t.Errorf("Error loading Arizona grammar")
	}
}
