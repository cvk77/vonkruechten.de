package de.vonkruechten.content.repositories

import de.vonkruechten.content.entities.Person
import io.requery.kotlin.BlockingEntityStore
import io.requery.kotlin.eq
import io.requery.kotlin.get

class PersonRepository(private val entityStore: BlockingEntityStore<Person>) {

    fun one(id: String): Person {
        return entityStore.invoke {
            val result = select(Person::class) where (Person::id eq id)
             result.get().single()
        }
    }

    fun all(): List<Person> {
        return entityStore.select(Person::class).get().toList()
    }

}