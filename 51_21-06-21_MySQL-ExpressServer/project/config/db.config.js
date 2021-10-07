module.exports = {
    HOST: 'localhost',
    USER: 'tatiana',
    PASSWORD: 'test123',
    DB: 'profile_app',
    dialect: 'mysql',
    pool: { //тонкости подключения к базе данных
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}