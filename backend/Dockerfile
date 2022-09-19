FROM openjdk:17.0.1-jdk-slim
WORKDIR /app
COPY target/green-food-api-*-SNAPSHOT.jar ./green-food-api.jar
EXPOSE 8080
ENTRYPOINT java $JAVA_OPTIONS -jar green-food-api.jar


#FROM maven:3.6-openjdk-17-slim AS build
#COPY src /backend/src
#COPY pom.xml /backend
#RUN mvn -f /backend/pom.xml clean package
#
#FROM openjdk:17.0.1-jdk-slim
#COPY --from=build /backend/target/green-food-api-*-SNAPSHOT.jar ./green-food-api.jar
#EXPOSE 8080
#ENTRYPOINT java $JAVA_OPTIONS -jar green-food-api.jar