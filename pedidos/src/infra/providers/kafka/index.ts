import { Kafka, logLevel } from "kafkajs";


const kafka = new Kafka({
    brokers: ['in-monkfish-13669-us1-kafka.upstash.io:9092'],
    ssl: true,
    sasl: {
        mechanism: 'scram-sha-256',
        username: 'aW4tbW9ua2Zpc2gtMTM2Njkk6XCtT8IoJjLHBCOZ4wmmAAfEDuUnOkJFl12yhmQ',
        password: 'ZjdmYTZmNDQtNGUxYy00NzQ2LTlkNzEtNzY5YzBiM2ExZGU5'
    },
    logLevel: logLevel.ERROR,
});
  
export { kafka };