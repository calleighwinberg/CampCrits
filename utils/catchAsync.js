module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}


//we use this to wrap our async fucntions. func is passed in. a new fucntion is 
//returned that has func executed using the params and catches any errors and passes
//them to next 