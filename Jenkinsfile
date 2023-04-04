pipeline {
    agent any
    stages {
        stage('Clone'){
            steps{
                git branch: 'main', url: 'https://github.com/SergiuWat/jenkins.git'
            }
        }
        stage('Build') {
            steps {
              bat '''
             cd spring/
             docker build -t spring-image .
             cd database
             docker build -t postgres-image .
             cd ../..
             cd angular/
             docker build -t angular-image .
             cd ..
              '''
            }
        }
        stage('Docker-compose') {
            steps {
              bat "docker login"
              bat "docker-compose up"
            }
        }
    }
}