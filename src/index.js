import server from "./server.js";
import winstonLogger from "./utils/winston.util.js";

const port = process.env.PORT || 4000;

server.listen(port, () => {
  winstonLogger.info(`Server online PORT:${port}`);
});
