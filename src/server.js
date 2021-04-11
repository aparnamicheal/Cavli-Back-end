var mongoose = require('mongoose')
const App = require('./App');
try {
        let mongoURI = `${process.env.MONGO_PROTOCOL}://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`;
    
       
        mongoose.connect(mongoURI, {
            useNewUrlParser:true,
            useFindAndModify:false,
            useUnifiedTopology:true
     });
        console.info(`Database connected : ${mongoURI}`);
      } catch (error) {
        console.error("Error while connecting to the database : ", error);
        process.exit(1);
      }
const app= new App();
const port = process.env.PORT || 8081;
app.express.listen(port, function () {
    console.log("Example app listening at %s", port)
 })