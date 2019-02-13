package de.vonkruechten.domain.models

typealias PageId = String

data class Page(
    var id: PageId, 
    var title: String, 
    var blocks: List<Block>
) {
    constructor() : this("undef", "undef", emptyList())
}