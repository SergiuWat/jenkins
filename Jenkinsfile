pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
              sh "git clone https://github.com/SergiuWat/jenkins"
              sh 'cd spring'
              sh './mvn clean package -DskipTests=true'
              sh 'docker build -t spring-image .'
              sh 'cd database'
              sh 'docker build -t postgres-image'
              sh '../..'
              sh 'cd angular'
              sh 'npm install && ng build --prod'
              sh 'docker build -t angular-image'
              sh 'cd ..'
            }
        }
        stage('Docker-compose') {
            steps {
              sh 'cd spring'
              sh 'docker-compose up'
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