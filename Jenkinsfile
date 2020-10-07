@Library('common-lib@1.7') _
pipeline {
  agent any;
  environment {
    DOCKER_REPO = 'kyberorglab/yals-ui'
  }
  parameters {
    string(name: 'DOCKER_TAG', defaultValue: "")
  }
  stages {
    stage('Docker') {
      steps {
        script {
          def dockerTag = params.DOCKER_TAG;
          if(dockerTag.trim().equals("")) {
            dockerTag = env.BRANCH_NAME;
          }

          def tags = [];
          tags << dockerTag;

          def buildArgs = [];
          buildArgs << "BUILD_ENV=production"
          withCredentials([string(credentialsId: 'mdb-token', variable: 'MDB_TOKEN')]) {
             buildArgs << "MDB_GITLAB_TOKEN=${env.MDB_TOKEN}"
          }

          dockerBuild(repo: env.DOCKER_REPO, tags: tags, buildArgs: buildArgs);
          dockerLogin(creds: 'hub-docker');
          dockerPush();
          dockerLogout();
          dockerClean();
        }
      }
    }
    stage('Deploy to K8S') {
      steps {
        script {
          deployToKube(
            namespace: 'lab-yals',
            workloadName: 'yals-app',
            imageRepo: env.DOCKER_REPO,
            imageTag: env.BRANCH_NAME
          )
        }
      }
    }
  }
  post {
    always {
      cleanWs();
    }
  }
}
