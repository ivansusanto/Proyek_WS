import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const allowedExt = [
    'image/jpg', 
    'image/jpeg', 
    'image/png'
];

const fileStorage = multer.diskStorage({
    destination: (
        req: Request,
        file: Express.Multer.File,
        cb: DestinationCallback
    ): void => {
        cb(null, './uploads');
    },

    filename: (
        req: Request,
        file: Express.Multer.File,
        cb: FileNameCallback
    ): void => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileName = uniqueSuffix + '.png';

        if (req.body) req.body.image = fileName;
        cb(null, fileName);
    }
});

const fileFilter = (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
): void => {
    if (allowedExt.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const MulterUpload = multer({
    storage: fileStorage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 50000000
    }
});

export default MulterUpload;