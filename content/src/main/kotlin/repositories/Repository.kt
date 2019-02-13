package de.vonkruechten.content.repositories

import de.vonkruechten.content.entities.PageEntity
import de.vonkruechten.domain.exceptions.PageNotFoundException
import io.requery.kotlin.BlockingEntityStore
import io.requery.kotlin.eq
import io.requery.kotlin.get
import java.util.NoSuchElementException

class PageRepository(private val entityStore: BlockingEntityStore<PageEntity>) {

    fun one(id: String): PageEntity {
        return entityStore.invoke {
            val result = select(PageEntity::class) where(PageEntity::id eq id)
            try {
                result.get().single()
            } catch (e: NoSuchElementException) {
                throw PageNotFoundException(id)
            }
        }
    }

    fun all(): List<PageEntity> {
        return entityStore.select(PageEntity::class).get().toList()
    }

}