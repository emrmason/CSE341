const name1 = (req, res, next) => {
    res.send("Josh Mason");
};

const name2 = (req, res, next) => {
    res.send("Mitchell Mason");
};



module.exports = { name1, name2 };