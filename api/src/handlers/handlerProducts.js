const { getProducts, getProductsByCode, getProductsById, getProductsByName, postProduct, deleteProduct, changeQuantity } = require('../controllers/products')
const { validator } = require('../utils/productValidator')

const getAllTheProducts = async (req, res) => {
  const { idOrName } = req.params

  if (idOrName) {
    if (Number(idOrName)) {
      try {
        let results = await getProductsByCode(idOrName)
        if (!results) {
          throw new Error('No Data')
        } else {
          res.status(200).send(results)
        }
      } catch (error) {
        res.status(400).send(error)
      }
    }
    else if (uuidValidator(idOrName)) {
      try {
        const result = await getProductsById(idOrName)
        if (!result) {
          throw new Error('No Data')
        } else {
          res.status(200).send(result)
        }
      } catch (error) {
        res.status(400).send(error)
      }
    } else {
      // Búsqueda por nombre
      try {
        let results = await getProductsByName(idOrName)
        if (!results) {
          throw new Error('No Data')
        } else {
          res.status(200).send(results)
        }
      } catch (error) {
        res.status(400).send(error)
      }
    }

  } else {
    try {
      let results = await getProducts()
      if (!results) {
        throw new Error('No Data')
      } else {
        res.status(200).send(results)
      }
    } catch (error) {
      res.status(400).send(error.message)
    }
  }
}

const addProducts = async (req, res) => {
  const productToAdd = req.body
  const validation = validator(productToAdd)
  if (!validation) {
    try {
      await postProduct(productToAdd)
      res.status(201).send('Producto creado exitosamente')
    } catch (error) {
      res.status(400).send(error)
    }
  } else {
    res.status(400).send('Datos incorrectos')
  }
}

const destroyProduct = async (req, res) => {
  const { productToDelete } = req.params
  try {
    await deleteProduct(productToDelete)
    res.status(201).send('Producto Eliminado correctamente')
  } catch (error) {
    res.status(400).send('Producto no encontrado', error)
  }
}

const modifyQuantity = async (req, res) => {
  const { productId } = req.params
  const { quantity } = req.body
  try {
    await changeQuantity(productId, quantity)
    res.status(201).send('Producto actualizado correctamente')
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports = {
  getAllTheProducts,
  addProducts,
  destroyProduct,
  modifyQuantity
}
