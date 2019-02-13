package de.vonkruechten.content.mappers

import de.vonkruechten.content.entities.PageEntity
import de.vonkruechten.domain.models.Page

import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.InheritInverseConfiguration

@Mapper
interface PageMapper {

    fun toPage(entity: PageEntity) : Page
        
    @InheritInverseConfiguration
    fun toPageEntity(page: Page) : PageEntity

}