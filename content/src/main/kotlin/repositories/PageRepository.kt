package de.vonkruechten.content.repositories

import de.vonkruechten.content.entities.PageEntity
import de.vonkruechten.content.entities.BlockEntity
import de.vonkruechten.domain.exceptions.PageNotFoundException
import io.requery.kotlin.*
import java.util.NoSuchElementException

class PageRepository(private val entityStore: BlockingEntityStore<PageEntity>) {

    fun one(id: String): PageEntity {
        try {
            return entityStore.select(PageEntity::class)
                .where(PageEntity::id eq id)
                .get()
                .single()
        } catch (e: NoSuchElementException) {
            throw PageNotFoundException(id)
        }
    }

    fun all(): List<PageEntity> {
        return entityStore.select(PageEntity::class).get().toList()
    }

}