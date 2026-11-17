pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('Build Docker Image') {
            steps { bat 'docker build -t student-names:1.0 .' }
        }
        stage('Run Container') {
            steps {
                bat 'docker rm -f student-names-container'
                bat 'docker run -d -p 8083:80 --name student-names-container student-names:1.0'
            }
        }
    }
}
