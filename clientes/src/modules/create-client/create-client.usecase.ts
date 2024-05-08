import { prismaClient } from "../../infra/database/prismaClient";
import { KafkaSendMessage } from "../../infra/provider/kafka/producer";


type CreateClientRequest = {
    name: string,
    password: string,
    email: string,
    phone: string
}

export class CreateClientUseCase {
    constructor() {}    

    async execute(data: CreateClientRequest) {

        const custumer = await prismaClient.client.findFirst({
            where: {
                email: data.email
            }
        });

        if(custumer) throw new Error('Custumer already exists!'); 

        const custumerCreated = await prismaClient.client.create({
            data: {
                ...data
            }
        });

        const kafkaProducer = new KafkaSendMessage();
        await kafkaProducer.execute("CLIENT_CREATED", {
            id: custumerCreated.id,
            email: custumerCreated.email
        });

        return custumerCreated;
    }
}