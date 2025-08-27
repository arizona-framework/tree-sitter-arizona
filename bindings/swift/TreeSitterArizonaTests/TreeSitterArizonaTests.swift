import XCTest
import SwiftTreeSitter
import TreeSitterArizona

final class TreeSitterArizonaTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_arizona())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Arizona grammar")
    }
}
