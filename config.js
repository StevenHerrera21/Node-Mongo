const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://ups:secreto3.@cluster1.vkifo.gcp.mongodb.net/db_ups?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/',
    filesRoute: process.env.FILES_ROUTE || 'files'
}


module.exports = config