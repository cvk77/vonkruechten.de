package de.vonkruechten.server.modules

import de.vonkruechten.domain.services.PageService
import de.vonkruechten.domain.models.Page
import de.vonkruechten.domain.models.PageId
import de.vonkruechten.domain.exceptions.PageNotFoundException
import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.features.BadRequestException
import io.ktor.response.respond
import io.ktor.routing.get
import io.ktor.routing.routing
import io.ktor.util.KtorExperimentalAPI
import org.kodein.di.Kodein
import org.kodein.di.generic.instance

fun Application.contentModule(kodein: Kodein) {

    val pageService: PageService by kodein.instance()

    routing {
        
        get() {
            call.respond(pageService.all())
        }

        get("/{id}") {
            val id = call.parameters.get("id") ?: throw BadRequestException("Parameter 'id' missing")
            call.respond(pageService.one(id))
        }

    }
}

