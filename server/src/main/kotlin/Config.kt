package de.vonkruechten.server

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import de.vonkruechten.content.entities.Models
import de.vonkruechten.content.entities.PageEntity
import de.vonkruechten.content.repositories.PageRepository
import de.vonkruechten.content.mappers.PageMapper
import de.vonkruechten.domain.models.Page
import de.vonkruechten.domain.services.PageService
import de.vonkruechten.content.services.PageServiceImpl
import io.requery.kotlin.BlockingEntityStore
import io.requery.sql.KotlinConfiguration
import io.requery.sql.KotlinEntityDataStore
import org.kodein.di.Kodein
import org.kodein.di.generic.*
import org.mapstruct.factory.Mappers
import javax.sql.DataSource

val kodein = Kodein {
    bind() from singleton { createDataSource() }
    bind() from singleton { createEntityStore<PageEntity>(instance()) }
    bind() from provider { Mappers.getMapper(PageMapper::class.java) }
    bind() from provider { PageServiceImpl(instance(), instance()) }
    bind() from provider { PageRepository(instance()) }
}

fun createDataSource(): DataSource {
    val config = HikariConfig("/hikari.properties")
    return HikariDataSource(config)
}

fun <T : Any> createEntityStore(ds: DataSource): BlockingEntityStore<T> {
    val configuration = KotlinConfiguration(dataSource = ds, model = Models.DEFAULT)
    return KotlinEntityDataStore(configuration)
}
