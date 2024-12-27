const errorhandler = (err, req, res, next) => {
    console.error(err.stack);
    if(err instanceof customError) {
        return res.status(err.status).json({message: err.message});
    }                                       
    res.status(500).json({message: 'Deepika is dumb'});
    }

    class customError extends Error {
        constructor(message, status=500) {
            super(message);
            this.status = status;
            this.name = this.constructor.name;
            Error.captureStackTrace(this, this.constructor);
        }
    }

    module.exports = {errorhandler, customError};