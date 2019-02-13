package de.vonkruechten.content.services

import de.vonkruechten.content.entities.PageEntity
import de.vonkruechten.content.repositories.PageRepository
import de.vonkruechten.domain.models.Page
import de.vonkruechten.domain.models.PageId
import de.vonkruechten.domain.services.PageService
import de.vonkruechten.content.mappers.PageMapper
import de.vonkruechten.domain.exceptions.PageNotFoundException
import io.requery.kotlin.BlockingEntityStore
import io.requery.kotlin.eq
import io.requery.kotlin.get
import java.util.NoSuchElementException

class PageServiceImpl(private val pageRepository: PageRepository,
                      private val pageMapper: PageMapper) : PageService {

    override fun one(id: PageId): Page {
        return pageMapper.toPage(pageRepository.one(id))
    }

    override fun all(): List<Page> {
        return pageRepository.all()
            .map(pageMapper::toPage)
    }

}