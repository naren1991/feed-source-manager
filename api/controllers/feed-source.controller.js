const FeedSource = require('../models/feed-source.model.js');

exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "'name' must be provided"
        });
    }

    //TODO: Define category types and errors
    if(!req.body.category) {
        return res.status(400).send({
            message: "Category needs to be provided from pre-defined list <TODO: Define category types>"
        });
    }

    if(!req.body.url) {
        return res.status(400).send({
            message: "URL needs to be provided"
        });
    }

    const feedSource = new FeedSource({
        id: req.body.id || Math.random().toString(36).slice(2),
        name: req.body.name,
        type: req.body.type || 'rss-like',
        category: req.body.category,
        url: req.body.url

    })

    feedSource.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'An unknown error occured while adding the feed source'
        })
    });
};

exports.getAll = (req, res) => {
    FeedSource.find()
    .then(sources => {
        res.send(sources);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'An unknown error occured while fetching all the feed sources'
        })
    });
};

exports.search = (req, res) => {

    var fields = [];
    if(req.body._id){
        fields.push("_id");
    }
    if(req.body.name){
        fields.push("name");
    }
    if(req.body.type){
        fields.push("type");
    }
    if(req.body.category){
        fields.push("category");
    }
    if(req.body.url){
        fields.push("url");
    }

    var conditions = {};
    if(fields != []){
        fields.forEach(function(f){
            conditions[f] = req.body[f];     
        }) 
        
        FeedSource.find(conditions)
        .then(results => {
            res.send(results)
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'An unknown error occured while searching feed sources'
            })
        });
    }

    
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};