#
# RabbitMQ Dockerfile
#
# https://github.com/dockerfile/rabbitmq
#

# Pull base image.
FROM ubuntu:18.04

# Install.
RUN  sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list
RUN  apt-get update &&  apt-get -y upgrade 
RUN  apt-get install -y build-essential 
RUN  apt-get install -y software-properties-common 
RUN  apt-get install -y wget
RUN  apt-get install -y curl git htop unzip vim 
RUN  apt-get install -y apt-transport-https 
RUN rm -rf /var/lib/apt/lists/*
# Add files.
ADD root/.bashrc /root/.bashrc
ADD root/.gitconfig /root/.gitconfig
ADD root/.scripts /root/.scripts

# Set environment variables.
ENV HOME /root

# Define working directory.
#WORKDIR /root

# Add files.
ADD bin/rabbitmq-start /usr/local/bin/

# Install RabbitMQ.
ENV APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=DontWarn
RUN apt-key adv --keyserver "hkp://p80.pool.sks-keyservers.net:80" --recv-keys "0x6B73A36E6026DFCA"
RUN wget -O - "https://github.com/rabbitmq/signing-keys/releases/download/2.0/rabbitmq-release-signing-key.asc" | apt-key add -

RUN echo "deb http://dl.bintray.com/rabbitmq-erlang/debian $(lsb_release -sc) erlang" | tee -a /etc/apt/sources.list.d/bintray.rabbitmq.list 
RUN echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/bintray.rabbitmq.list
RUN cat /etc/apt/sources.list.d/bintray.rabbitmq.list
RUN apt-get update 
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y rabbitmq-server 
RUN rm -rf /var/lib/apt/lists/* 
RUN rabbitmq-plugins enable rabbitmq_management 
RUN echo "[{rabbit, [{loopback_users, []}]}]." > /etc/rabbitmq/rabbitmq.config
RUN chmod +x /usr/local/bin/rabbitmq-start

# Define environment variables.
ENV RABBITMQ_LOG_BASE /data/log
ENV RABBITMQ_MNESIA_BASE /data/mnesia

# Define mount points.
VOLUME ["/data/log", "/data/mnesia"]

# Define working directory.
WORKDIR /data

# Define default command.
CMD ["rabbitmq-start"]

# Expose ports.
EXPOSE 5672
EXPOSE 15672