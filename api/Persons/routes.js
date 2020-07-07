let router = global.express.Router();

router.get('/', (request, response) => {
    global.personsControllers.list(request, response);
})

module.exports = router;