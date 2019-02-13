package de.vonkruechten.server

import de.vonkruechten.domain.exceptions.PageNotFoundException
import de.vonkruechten.server.modules.contentModule

import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.ContentNegotiation
import io.ktor.features.StatusPages
import io.ktor.http.HttpStatusCode
import io.ktor.jackson.jackson
import io.ktor.response.respond
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import de.vonkruechten.server.kodein

fun Application.mainModule() {

    install(ContentNegotiation) {
        jackson {
        }
    }

    install(StatusPages) {
        exception<PageNotFoundException> { cause ->
            call.respond(HttpStatusCode.NotFound, cause.localizedMessage)
        }
    }

    routing {
        contentModule(kodein)
    }
}

fun main() {
    embeddedServer(
            factory = Netty,
            port = 8080,
            module = Application::mainModule
    ).start(wait = true)
}

