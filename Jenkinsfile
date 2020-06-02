// ref: https://plugins.jenkins.io/kubernetes/
podTemplate(containers: [
    containerTemplate(name: 'node', image:'node:10.20.1', command: 'cat', ttyEnabled: true),
    containerTemplate(name: 'docker', image: 'docker', command: 'cat', ttyEnabled: true),
    containerTemplate(name: 'kubectl', image: 'lachlanevenson/k8s-kubectl:v1.18.3', command: 'cat', ttyEnabled: true),
],
volumes: [
  hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock')
]) {
    node(POD_LABEL) {
        def uuid = UUID.randomUUID().toString()
        def image = "jeg910716/me-${uuid}"

        stage('Checkout github branch') {
            // Get some code from a Git repository
            checkout scm
        }

        // stage('Run test') {
        //     container('node') {
        //         sh "npm install"
        //         sh "npm run test"
        //     }
        // }

        stage('Build and Push docker image') {
            container('docker') {
                withCredentials([[
                    $class: 'UsernamePasswordMultiBinding',
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_HUB_USER',
                    passwordVariable: 'DOCKER_HUB_PASSWORD'
                ]])  {
                    sh """
                        docker login -u ${DOCKER_HUB_USER} -p ${DOCKER_HUB_PASSWORD}
                        docker build -t ${image} .
                        docker push ${image}
                    """
                }
            }
        }
        stage('Apply kubernetes') {
            container('kubectl') {
                sh """
                    kubectl get pods
                    kubectl get deploy
                    kubectl get svc

                    kubectl set image deployment/me me=${image} -n dev
                """
            }
        }
    }
}