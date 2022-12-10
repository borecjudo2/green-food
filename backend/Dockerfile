FROM ubuntu:18.04
FROM openjdk:17.0.1-jdk-slim
RUN apt-get update
RUN apt install apt-transport-https ca-certificates  curl software-properties-common gnupg lsb-release -y
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian `lsb_release -cs` test"
RUN apt-get update
RUN apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
RUN service docker start
RUN sleep 180

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