package de.vonkruechten.content.mappers

import de.vonkruechten.content.entities.BlockEntity
import de.vonkruechten.domain.models.Block
import io.requery.query.Result
import org.mapstruct.Mapper
import kotlin.streams.toList

@Mapper
interface BlockMapper {
    fun toBlock(entity: BlockEntity) : Block
    fun toBlockList(blockEntities: Result<BlockEntity>): List<Block> =
            blockEntities.stream().map(this::toBlock).toList()
}