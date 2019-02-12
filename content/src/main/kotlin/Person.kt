package de.vonkruechten.content.entities

import io.requery.*

@Entity
data class Person constructor (

    @get:Key
    var id: Int,
    var name: String
)