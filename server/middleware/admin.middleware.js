exports.adminMiddleware = (req, res, next) => {
    const adminUserId = req.user.id;

    User.findById({ _id: adminUserId }).exec((err, user) => {
        if (err || !user) {
            return res.status(404).json({
                error: "User not found"
            })
        }
        if (user.role !== 1) {
            return res.status(404).json({
                error: "Admin resource, Access Denied"
            })
        }
    })
}