module.exports = {

	awaitHandlerFactory(middleware) {
	  return async (req, res, next) => {
	    try {
	      await middleware(req, res, next)
	    } catch (err) {
	      next(err)
	    }
	  }
	}

}
