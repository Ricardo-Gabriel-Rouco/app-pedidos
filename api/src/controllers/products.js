const { Products } = require('../db')

const getProducts = async () => {
  try {
    const result = await Products.findAll()
    return result
  } catch (error) {
    return error
  }
}

const getProductsByName = async (name) => {
  try {
    const result = await Products.findAll({
      where: {
        name: name
      }
    })
    return result
  } catch (error) {
    return error
  }
}

const getProductsByCode = async (code) => {
  try {
    const result = await Products.findAll({
      where: {
        productKey: code
      }
    })
    return result
  } catch (error) {
    return error
  }
}

const getProductsById = async (id) => {
  try {
    const results = await Products.findAll({
      where: {
        id: id
      }
    })
    return results
  } catch (error) {
    return error
  }
}

const postProduct = async (productToAdd) => {
  try {
    const newProduct = await Products.create({
      productKey: productToAdd.productKey,
      name: productToAdd.name,
      description: productToAdd.description,
      brand: productToAdd.brand,
      quantity: productToAdd.quantity ?? 0,
      pricePerPack: productToAdd.pricePerPack ?? 0,
      pricePerUnit: productToAdd.pricePerUnit ?? 0
    })
    return newProduct
  } catch (error) {
    return error
  }
}

const deleteProduct = async(code) => {
  try {
    const deletedProduct = await Products.destroy({
      where: {
        id: code
      }
    })
    if(deletedProduct === 0) {
      throw new Error ('Producto no encontrado')
    }
    return deletedProduct
  } catch (error) {
    
  }
}

module.exports = {
  getProducts,
  getProductsByName,
  getProductsByCode,
  getProductsById,
  postProduct,
  deleteProduct
}