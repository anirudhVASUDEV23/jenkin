# A simple jenkins pipeline to verify if the docker slave configuration is working as expected.


OUTPUT:
Started by user anirudh
Obtained my-first-pipeline/Jenkinsfile from git https://github.com/anirudhVASUDEV23/jenkin
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /home/ubuntu/.jenkins/workspace/first-pipeline
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
Cloning the remote Git repository
Cloning repository https://github.com/anirudhVASUDEV23/jenkin
 > git init /home/ubuntu/.jenkins/workspace/first-pipeline # timeout=10
Fetching upstream changes from https://github.com/anirudhVASUDEV23/jenkin
 > git --version # timeout=10
 > git --version # 'git version 2.43.0'
 > git fetch --tags --force --progress -- https://github.com/anirudhVASUDEV23/jenkin +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/anirudhVASUDEV23/jenkin # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
Avoid second fetch
 > git rev-parse refs/remotes/origin/main^{commit} # timeout=10
Checking out Revision f5ad97751ee173924f97f8e542a64f3294d3489a (refs/remotes/origin/main)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f f5ad97751ee173924f97f8e542a64f3294d3489a # timeout=10
Commit message: "first commit"
First time build. Skipping changelog.
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] isUnix
[Pipeline] withEnv
[Pipeline] {
[Pipeline] sh
+ docker inspect -f . node:16-alpine
.
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] withDockerContainer
Jenkins does not seem to be running inside a container
$ docker run -t -d -u 1000:1000 -w /home/ubuntu/.jenkins/workspace/first-pipeline -v /home/ubuntu/.jenkins/workspace/first-pipeline:/home/ubuntu/.jenkins/workspace/first-pipeline:rw,z -v /home/ubuntu/.jenkins/workspace/first-pipeline@tmp:/home/ubuntu/.jenkins/workspace/first-pipeline@tmp:rw,z -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** -e ******** node:16-alpine cat
$ docker top a37de20363ca744a6985c236877fa7471a5608b38f4e0588bbdbed2a9b5fc424 -eo pid,comm
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Test)
[Pipeline] sh
+ node --version
v16.20.2
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
$ docker stop --time=1 a37de20363ca744a6985c236877fa7471a5608b38f4e0588bbdbed2a9b5fc424
$ docker rm -f --volumes a37de20363ca744a6985c236877fa7471a5608b38f4e0588bbdbed2a9b5fc424
[Pipeline] // withDockerContainer
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
