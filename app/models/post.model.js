module.exports = (sequilize, Sequilize) => {
    const Post = sequilize.define("post", {
        title: {
            type: Sequilize.STRING
        },
        description: {
            type: Sequilize.STRING
        },
        published: {
            type: Sequilize.BOOLEAN
        }
    })
}