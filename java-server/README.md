# octopus java server

Spring Boot application for octopus.

Build application with
```
$ ./gradlew build
```

Start with
```
$ ./build/lib/java-server-0.0.1-SNAPSHOT.jar
```

Access at `http://localhost:5001`

## Deployment

Copy jar file to `/build/octopus/java-server-0.0.1-SNAPSHOT.jar` at buildserver

Restart service with (jar file is already symlinked to octopus-server)
```
$ sudo /etc/init.d/octopus-server restart
```