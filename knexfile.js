// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/zoodb.db',
    },
    migrations: {
      tableName: 'migrations'
    },
    useNullAsDefault: true,
  
  },

 

  production: {
    client: 'mysql',
    connection: {
      host: '192.168.1.102',
      database: 'zoodb',
      user:    'sneha',
      password: 'sneha',
    },
    
    migrations: {
      tableName: 'migrations'
    },
  },

};
