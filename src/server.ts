import { Config } from './config';
import app from './app';

const startServer = () => {
    const port = Config.PORT;
    try {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
startServer();
