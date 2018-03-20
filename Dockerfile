FROM centos
WORKDIR /engineering-web
ADD . /engineering-web
# RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.2/install.sh | bash
# ENV NVM_DIR /root/.nvm
# RUN . $NVM_DIR/nvm.sh && nvm install 8.10.0
#RUN . $NVM_DIR/nvm.sh && node --version
#RUN  cd ~ && ls -alh
#RUN curl --silent --location https://rpm.nodesource.com/setup_8.x |  bash -
RUN yum -y install nodejs
EXPOSE 8080