import  {  Request, Response, NextFunction}  from 'express';
import logging from '../config/logging';
import pool  from '../config/mysql';

const  NAMESPACE = 'Book Controller'
/** middle ware */
const CreateBooks = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'create  books.');
    const connection = await pool.getConnection();

    connection.release();
}
const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Getting all books.');
    let connection = await pool.getConnection();
    let queryStr ="SELECT * FROM moviess";

    try {
        
        let movies = await connection.query(queryStr);
        return res.status(200).json({
            message: movies[0]
        });
    } catch (err) {
        return res.status(500).json({
            message: {
                queryStr: queryStr,
                err: err
            }
        });
    } finally {
        connection.release();
    }

   


};

/** Export */
export default { CreateBooks, getAllBooks }