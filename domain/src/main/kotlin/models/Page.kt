package de.vonkruechten.domain.models

typealias PageId = String

data class Page(var id: PageId, var title: String, var content: String) {
    constructor() : this("undef", "undef", "undef")
}