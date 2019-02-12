package de.vonkruechten.content.entities

import io.requery.*

@Entity
data class Person constructor (

    @get:Key
    val id: Int,
    var name: String
)