package de.vonkruechten.content;

import de.vonkruechten.content.entities.Person
import de.vonkruechten.content.entities.Models

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import javax.sql.DataSource
import java.io.File

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import io.requery.Persistable
import io.requery.query.Result
import io.requery.sql.KotlinConfiguration
import io.requery.sql.KotlinEntityDataStore

fun connect(): DataSource {
    val config = HikariConfig()
    config.driverClassName = "org.h2.Driver"
    config.jdbcUrl = "jdbc:h2:file:~/foobar"
    config.username = "sa"
    val ds = HikariDataSource(config)
    return ds
}

fun query(ds: DataSource) {
    val configuration = KotlinConfiguration(dataSource = ds, model = Models.DEFAULT)
    val data: KotlinEntityDataStore<Any> = KotlinEntityDataStore(configuration)
    data.invoke {
        val result = data.select(Person::class).get()
        result.forEach { println(it) }
        
    }
}