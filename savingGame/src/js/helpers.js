var helpers = {
    printNumber: function (n) {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
};

module.exports = helpers;
