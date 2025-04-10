const getAllTasks = (req, res) => {
    res.send('Get all tasks with GET method');
};

module.exports = {
    getAllTasks: getAllTasks,
};