import  {  Request, Response, NextFunction}  from 'express';
import logging from '../config/logging';

const  NAMESPACE = 'Sample Controller'
/** middle ware */
const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    return res.status(200).json({
        message: "pong"
    });
};

/** Export */
export default { serverHealthCheck }