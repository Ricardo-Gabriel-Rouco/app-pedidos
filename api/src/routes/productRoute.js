const {Router} = require('express')

const router =  Router()
const {getAllTheProducts, addProducts, destroyProduct, modifyQuantity} = require('../handlers/handlerProducts')

router.get('/:idOrName?', getAllTheProducts)
router.post('/', addProducts)
router.delete('/:productToDelete', destroyProduct)
router.put('/:productId', modifyQuantity)

module.exports = router