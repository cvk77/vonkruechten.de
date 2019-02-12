package de.vonkruechten.content.repositories

import de.vonkruechten.content.entities.Person
import de.vonkruechten.content.entities.Models
import io.requery.sql.KotlinConfiguration
import io.requery.sql.KotlinEntityDataStore
import javax.sql.DataSource

object PersonRepository {


    fun all(ds: DataSource) {
        val configuration = KotlinConfiguration(dataSource = ds, model = Models.DEFAULT)
        val data: KotlinEntityDataStore<Any> = KotlinEntityDataStore(configuration)
        data.invoke {
            val result = data.select(Person::class).get()
            result.forEach { println(it) }

        }
    }

}