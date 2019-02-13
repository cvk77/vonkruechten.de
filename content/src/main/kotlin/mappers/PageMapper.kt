package de.vonkruechten.content.mappers

import de.vonkruechten.content.entities.PageEntity
import de.vonkruechten.domain.models.Page
import de.vonkruechten.content.mappers.BlockMapper

import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.InheritInverseConfiguration

@Mapper(uses=[BlockMapper::class])
interface PageMapper {

    fun toPage(entity: PageEntity) : Page

}