import { createTable } from './create-table.use-case';

describe('CreateTableUseCase', () => {

    test('should create table with default values', () => {
        
        const CreateTable = new createTable();

        const table = CreateTable.execute({ base: 5 });
        const rows = table.split('\n').length;
        
        expect( CreateTable ).toBeInstanceOf(createTable);
        expect( table ).toContain('5 x 1 = 5');
        expect( table ).toContain('5 x 10 = 50');
        expect( rows ).toBe(10);
    })

    test('should create table with custom values', () => {

        const CreateTable = new createTable();

        const options = {
            base: 3,
            limit: 20
        }
        
        const table = CreateTable.execute(options);
        const rows = table.split('\n').length;

        expect( table ).toContain('3 x 1 = 3');
        expect( table ).toContain('3 x 10 = 30');
        expect( table ).toContain('3 x 20 = 60');
        expect( rows ).toBe( options.limit );
    })
})
