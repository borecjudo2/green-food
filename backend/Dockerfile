FROM maven:3.6.0-jdk-17-slim AS build
COPY src /backend/src
COPY pom.xml /backend
RUN mvn -f /backend/pom.xml clean package

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /backend/target/backend-*-SNAPSHOT.jar ./backend.jar
EXPOSE 8080
ENTRYPOINT java $JAVA_OPTIONS -jar backend.jar
