package de.vonkruechten.domain.services

import de.vonkruechten.domain.models.Page
import de.vonkruechten.domain.models.PageId

interface PageService {
    fun one(id: PageId): Page
    fun all(): List<Page>
}