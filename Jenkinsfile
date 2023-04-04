pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
              sh '''           
             "cd spring/"
             "docker build -t spring-image ."
             "cd database"
             "docker build -t postgres-image"
             "cd ../.."
             "cd angular/"
             "npm install && ng build --prod"
             "docker build -t angular-image"
             "cd .."
              '''
            }
        }
        stage('Docker-compose') {
            steps {
              sh "cd spring"
              sh "docker-compose up"
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}