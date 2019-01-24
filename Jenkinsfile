pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
				// npm install
				// npm run build
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
				cp -r build/* /build/octopus/app/*
            }
        }
    }
}
