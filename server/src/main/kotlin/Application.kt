package de.vonkruechten.server

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import de.vonkruechten.content.entities.Models
import de.vonkruechten.content.entities.PageEntity
import de.vonkruechten.content.repositories.PageRepository
import de.vonkruechten.content.services.PageServiceImpl
import de.vonkruechten.content.mappers.PageMapper
import de.vonkruechten.domain.models.Page
import de.vonkruechten.domain.services.PageService
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
import io.requery.kotlin.BlockingEntityStore
import io.requery.sql.KotlinConfiguration
import io.requery.sql.KotlinEntityDataStore
import org.kodein.di.Kodein
import org.kodein.di.generic.bind
import org.kodein.di.generic.instance
import org.kodein.di.generic.provider
import org.kodein.di.generic.singleton
import org.mapstruct.factory.Mappers
import javax.sql.DataSource

val kodein = Kodein {
    bind() from singleton { createDataSource() }
    bind() from singleton { createEntityStore<PageEntity>(instance()) }
    bind() from provider { Mappers.getMapper(PageMapper::class.java) }
    bind() from provider { PageServiceImpl(instance(), instance()) }
    bind() from provider { PageRepository(instance()) }
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

fun createDataSource(): DataSource {
    val config = HikariConfig("/hikari.properties")
    return HikariDataSource(config)
}

fun <T : Any> createEntityStore(ds: DataSource): BlockingEntityStore<T> {
    val configuration = KotlinConfiguration(dataSource = ds, model = Models.DEFAULT)
    return KotlinEntityDataStore(configuration)
}

fun main() {
    embeddedServer(
            factory = Netty,
            port = 8080,
            module = Application::mainModule
    ).start(wait = true)
}

