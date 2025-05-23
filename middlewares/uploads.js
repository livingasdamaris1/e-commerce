import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

// this is way to create and save locally

export const localUpload = multer({ dest: 'uploads' });

export const productImageUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/ecommerce-api/*'

    })
});

export const productPicturesUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/ecommerce-api/*',
    })
})

