package de.vonkruechten.content.mappers

import de.vonkruechten.content.entities.BlockEntity
import de.vonkruechten.domain.models.Block

import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.InheritInverseConfiguration

@Mapper
interface BlockMapper {

    fun toBlock(entity: BlockEntity) : Block

}