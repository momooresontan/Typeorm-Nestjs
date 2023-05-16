import {  DataSource, DataSourceOptions } from 'typeorm' 

export class dataSourceOptions: DataSourceOptions = {
    type: 'sqlite',
    database: 'db.sqlite',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/mogrations/*.js'],    
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource