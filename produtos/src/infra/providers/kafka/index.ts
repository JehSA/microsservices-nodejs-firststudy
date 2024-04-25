import { Kafka, logLevel } from "kafkajs";


const kafka = new Kafka({
    brokers: ['moving-bengal-10619-us1-kafka.upstash.io:9092'],
    ssl: true,
    sasl: {
        mechanism: 'scram-sha-256',
        username: 'bW92aW5nLWJlbmdhbC0xMDYxOSTR24dby9oo1CxCuMq-dY-ph8pNRbuzfSPEyY8',
        password: 'ZjI4OWMwYTYtYmU4OC00ZDRjLWFiNmMtZTMzYTA5OWNkMDc4'
    },
    logLevel: logLevel.ERROR,
  });
  
  export { kafka };