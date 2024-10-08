import { createTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileDestination: string;
    fileName: string
}

export class ServerApp {

    static run ({ base, limit, showTable, fileDestination, fileName}: RunOptions) {
        console.log('Server running...');

        const table = new createTable().execute({ base, limit });
        const wasCreated = new SaveFile()
            .execute({ 
                fileContent: table,
                fileDestination,
                fileName
             });

        if ( showTable ) console.log(table);

        ( wasCreated ) 
            ? console.log('file as created!!')
            : console.error('file not created!!');
            
    }
}