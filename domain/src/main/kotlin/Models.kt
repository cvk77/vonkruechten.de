package de.vonkruechten.domain

typealias PageId = String

data class Page(val id: PageId, val title: String, val content: String)