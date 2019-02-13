package de.vonkruechten.domain.models

typealias BlockId = String

data class Block(
    var id: BlockId, 
    var title: String, 
    var content: String
) {
    constructor() : this("undef", "undef", "undef")
}