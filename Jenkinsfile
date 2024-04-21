pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the repository
                git branch: 'main', url: 'https://github.com/Hashith00/Red-Cypher-Backend'
            }
        }
        stage('Dockerize the Application') {
            steps {
                // Build Docker image
                script {
                    docker.build('ode-app')
                }
            }
        }
        stage('Run Container') {
            steps {
                // Run Docker container
                script {
                    docker.image('node-app').run('-p 3000:3000')
                }
            }
        }
    }
}