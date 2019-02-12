package de.vonkruechten.server

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import de.vonkruechten.content.repositories.PersonRepository
import de.vonkruechten.domain.exceptions.PageNotFoundException
import de.vonkruechten.server.modules.contentModule
import org.kodein.di.Kodein
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
import java.nio.file.Paths
import javax.annotation.Resources
import javax.sql.DataSource

val kodein = Kodein {
}

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

fun connect(): DataSource {
    val config = HikariConfig("/hikari.properties")
    return HikariDataSource(config)
}

fun main(args: Array<String>) {
    PersonRepository.all(connect())

//    embeddedServer(
//             factory = Netty,
//             port = 8080,
//             module = Application::mainModule
//    ).start(wait = true)
}

