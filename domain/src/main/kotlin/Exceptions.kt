package de.vonkruechten.domain.exceptions

import de.vonkruechten.domain.PageId
import java.lang.Exception

class PageNotFoundException(pageId: PageId): Exception("Page '$pageId' was not found.")