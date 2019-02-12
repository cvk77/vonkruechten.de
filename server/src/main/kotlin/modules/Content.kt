package de.vonkruechten.server.modules

import de.vonkruechten.content.repositories.PersonRepository
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
import org.kodein.di.generic.instance

fun Application.contentModule(kodein: Kodein) {

    val personService: PersonRepository by de.vonkruechten.server.kodein.instance()

    routing {
        get() {
            call.respond(personService.all())
        }

        get("/{id}") {
            val id = call.parameters.get("id") ?: throw BadRequestException("Parameter 'id' missing")
            call.respond(personService.one(id))
        }
    }
}

fun get(pageId: PageId) = when (pageId) {
    "" -> Page(pageId, pageId, "Lorem Ipsum")
    "wat" -> Page(pageId, pageId, "Lirum Larum")
    else -> throw PageNotFoundException(pageId)
}

