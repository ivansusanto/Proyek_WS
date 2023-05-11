import bcrypt from 'bcrypt';

const saltRounds: number = 10;
const salt: string | number = bcrypt.genSaltSync(saltRounds);

const generateHashedPassword = (password: string): string => {
    return bcrypt.hashSync(password, salt);
}

export {
    generateHashedPassword
}