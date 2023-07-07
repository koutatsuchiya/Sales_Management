module.exports = {
    getFullDate: (date) => {
        let fd = date;
        const dd = String(fd.getDate()).padStart(2, '0');
        const mm = String(fd.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = fd.getFullYear();
        fd = yyyy + '-' + mm + '-' + dd;
        return fd;
    }
}