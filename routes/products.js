import express from 'express'
import * as auth from '../middleware/auth.js'
import content from '../middleware/content.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'
import {
  createProduct,
  getProducts,
  getAllProducts,
  getProduct,
  editProduct
} from '../controllers/products.js'
const router = express.Router()

router.post('/', content('multipart/form-data'), auth.jwt, admin, upload, createProduct)
router.get('/', getProducts)
router.get('/all', auth.jwt, admin, getAllProducts)
router.get('/:id', getProduct)
router.patch('/:id', content('multipart/form-data'), auth.jwt, admin, upload, editProduct)

export default router
