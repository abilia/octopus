pipeline {
    agent any

    stages {
		stage('Checkout') {
			//checkout scm
		}

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
				sh 'cp -r build/* /build/octopus/app/*'
            }
        }
    }
}
