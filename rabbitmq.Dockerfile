# 
# Somente para desenvolvimento
# 
ARG RABBITMQ_VARIANT=3.9-management
FROM rabbitmq:${RABBITMQ_VARIANT}

RUN apt-get update && \
	apt-get install -y wget 

RUN wget https://github.com/rabbitmq/rabbitmq-delayed-message-exchange/releases/download/3.9.0/rabbitmq_delayed_message_exchange-3.9.0.ez && \
	mv rabbitmq_delayed_message_exchange-3.9.0.ez plugins/

RUN rabbitmq-plugins enable rabbitmq_delayed_message_exchange
RUN rabbitmq-plugins enable rabbitmq_management
