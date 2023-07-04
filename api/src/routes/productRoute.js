const {Router} = require('express')

const router =  Router()
const {getAllTheProducts, addProducts, destroyProduct} = require('../handlers/handlerProducts')

router.get('/:idOrName?', getAllTheProducts)
router.post('/', addProducts)
router.delete('/:productToDelete', destroyProduct)

module.exports = router