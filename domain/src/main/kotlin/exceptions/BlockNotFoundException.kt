package de.vonkruechten.domain.exceptions

import de.vonkruechten.domain.models.BlockId
import java.lang.Exception

class BlockNotFoundException(blockId: BlockId): Exception("Block '$blockId' was not found.")