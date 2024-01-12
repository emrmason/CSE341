const name1 = (req, res, next) => {
    res.send("Ronald Weasley");
};

const name2 = (req, res, next) => {
    res.send("The boy who lived");
};

module.exports = { name1, name2 };