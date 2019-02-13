package de.vonkruechten.content.entities

import io.requery.*

@Entity
@Table(name = "page")
data class PageEntity constructor (

    @get:Key
    val id: String?,
    
    var title: String?,

    var content: String?
) {
    constructor() : this(null, null, null)
}