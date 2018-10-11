module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, description, price, image_url} = req.body


        dbInstance.create_product_table()
            .then( () => res.sendStatus(200) )
            .catch( err => {
                    res.status(500).send({errorMessage: "dammit Tyler, you really screwed the pooch"})
                    console.log(err)
            })
    },
        getOne: (req, res, next) => {
            const dbInstance = req.app.get('db');
            const { params } = req;

            dbInstance.read_product( params.id)
                .then( (product) => res.status(200).send(product))
                .catch( err => {
                    res.status(500).send({errorMessage: "dammit Tyler, you really screwed the pooch"})
                    console.log(err)
        })
    },
    getAll: (req,res,next) =>{
        req.app.get('db').read_products()
        .then( products => res.status(200).send(products))
        .catch( err => {
            res.status(500).send({errorMessage: "dammit Tyler, you really screwed the pooch"})
            console.log(err)
        })
    },
    update: (req,res,next)=>{
        const { params, query}=req;

        req.app.get('db').update_product(params.id, query.desc)
        .then( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: "dammit Tyler, you really screwed the pooch"})
            console.log(err)
        })
    }, 
    delete: (req,res,next)=>{
        const {params} = req;

        req.app.get('db').delete_product(params.id)
        .then( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: "dammit Tyler, you really screwed the pooch"})
            console.log(err)
        })
    }
};