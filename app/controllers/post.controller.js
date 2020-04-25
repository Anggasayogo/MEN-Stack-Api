const db = require('../models');
const Post = db.posts;
const Op = db.Sequilize.Op

//CREATE METHOD
exports.create = (req, res) => {
    // validate request
    if (!req.body.title) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }
    // create post
    const post = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    // queryes
    Post.create(post)
        .then((data) => {
            res.send(data)
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || 'Somone error ocurred while creating the post'
            });
        });
}

//RETRIVE ALL
exports.findAll = (req, res) => {

}

//FIND BY SINGGLE
exports.findOne = (req, res) => {

}

//UPDATE A POST WITH ID
exports.update = (req, res) => {

}

// DELETEING A POST
exports.delete = (req, res) => {

}

// DELETE ALL POST
exports.deleteAll = (req, res) => {

}

//FIND ALL PUBLISHED
exports.findAllPublished = (req, res) => {

}