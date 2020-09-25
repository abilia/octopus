package com.abilia.octopus.javaserver.example

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ExampleController {

    @GetMapping("/greeting")
    fun greeting(): Greeting {
        return Greeting("Hello world")
    }

    data class Greeting(val content: String)
}