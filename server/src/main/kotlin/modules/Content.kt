package de.vonkruechten.server.modules

import de.vonkruechten.domain.Page
import de.vonkruechten.domain.PageId
import de.vonkruechten.domain.exceptions.PageNotFoundException
import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.features.BadRequestException
import io.ktor.response.respond
import io.ktor.routing.get
import io.ktor.routing.routing
import org.kodein.di.Kodein

fun Application.contentModule(kodein: Kodein) {
    routing {
        get("/{id}") {
            val id = call.parameters.get("id") ?: throw BadRequestException("Parameter 'id' missing")
            call.respond(get(id))
        }
    }
}

fun get(pageId: PageId) = when (pageId) {
    "" -> Page(pageId, pageId, "Lorem Ipsum")
    "wat" -> Page(pageId, pageId, "Lirum Larum")
    else -> throw PageNotFoundException(pageId)
}

