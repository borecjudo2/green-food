FROM openjdk:17.0.1-jdk-slim
WORKDIR /app
COPY target/green-food-api-*-SNAPSHOT.jar ./green-food-api.jar
EXPOSE 8080
ENTRYPOINT java $JAVA_OPTIONS -jar green-food-api.jar
