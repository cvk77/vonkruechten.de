package de.vonkruechten.content.entities

import io.requery.*

@Entity
@Table(name = "block")
interface BlockEntity : Persistable {

    @get:Key
    val id: String?
    
    val ordering: Int?

    var title: String?
    
    var content: String?

    @get:ManyToOne
    @get:Column(name = "page_id")
    var page: PageEntity?

}