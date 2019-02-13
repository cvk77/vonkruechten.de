package de.vonkruechten.content.mappers

import de.vonkruechten.content.entities.PageEntity
import de.vonkruechten.domain.models.Page
import org.mapstruct.Mapper


@Mapper(uses=[BlockMapper::class])
interface PageMapper {
    fun toPage(entity: PageEntity) : Page
}