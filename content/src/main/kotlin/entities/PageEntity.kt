package de.vonkruechten.content.entities

import io.requery.*
import io.requery.query.Result

@Entity
@Table(name = "page")
interface PageEntity : Persistable {

    @get:Key
    val id: String?
    
    var title: String?
    
    @get:OneToMany(cascade = [CascadeAction.DELETE, CascadeAction.SAVE])
    @get:OrderBy("ordering")
    val blocks: Result<BlockEntity>

}