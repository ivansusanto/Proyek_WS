import 'dotenv/config';

const dictionary: { [key: string]: any } = {
    SECRET_KEY: process.env.SECRET_KEY,
    PREFIX_URL: process.env.PREFIX_URL
};

export default function env(key: string): any {
    return dictionary[key];
}
