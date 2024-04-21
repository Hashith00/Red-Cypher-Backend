pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the repository
                git 'https://github.com/sithuminikaushalya/3818_Amarasinghe'
            }
        }
        stage('Dockerize') {
            steps {
                // Build Docker image
                script {
                    docker.build('my-node-app')
                }
            }
        }
        stage('Run Container') {
            steps {
                // Run Docker container
                script {
                    docker.image('my-node-app').run('-p 3000:3000')
                }
            }
        }
    }
}