export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}



export class createTable implements CreateTableUseCase {

    constructor(

        // DI - DEpendency Injection
    ) {}

    execute ({ base, limit = 10 }: CreateTableOptions ) {
        let outputMessage = '';
        for (let i = 1; i <= limit; i++) {
            outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
        }

        return outputMessage;
    }
}