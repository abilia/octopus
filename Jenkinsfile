pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
				sh 'npm install'
				sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying..'
				sh 'cp -r build/* /build/octopus/app/'
            }
        }
    }
}
