# Green food app

## Project requirements (should be installed)

1) java 17
2) node.js
3) maven

## Run project (FROM ROOT PACKAGE OF PROJECT)

1) build jar file `mvn clean package -f backend/pom.xml`
2) run `docker-compose up`
3) go to `http://localhost:3000/`

## OR

1) build jar file `mvn clean package -f backend/pom.xml`
2) run backend `java -jar backend/target/green-food-api-0.0.1-SNAPSHOT.jar`
3) run frontend `npm start --prefix frontend`
4) go to `http://localhost:3000/`

## USERNAME:PASSWORD

1) user:user
2) admin:admin
