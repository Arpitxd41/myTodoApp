const App = require('./App');

const PORT = process.env.PORT || 4000;

App.listen(PORT, () => {
    console.log(`App is running in the port : ${PORT}`);
});