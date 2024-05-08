import jwt from 'jsonwebtoken';

const TOKEN_SECRET = 'fc17f0e7fcb09b17ab5c50f5d5c0e587a8dfc20f49173d69f14234cb61785eb5c60df63af782a7757600b3f6ccdc645f77ee1322c5cc0bcb425230e9ef6f952c';

class JwtMiddleware {

    public generateAccessToken(phone: string) {
        return jwt.sign({phone}, TOKEN_SECRET, { expiresIn: '3400s' });
    }
    // public async verifyToken(req: any, res: any, next: any) {
    //     const token = req.headers['authorization'];
    //     if (!token) {
    //         return res.status(403).send({ auth: false, message: 'No token provided.' });
    //     }
    //     jwt.verify(token, process.env.JWT_SECRET, (err: any, decoded: any) => {
    //         if (err) {
    //             return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    //         }
    //         req.userId = decoded.id;
    //         next();
    //     }); 
    // }
}

export default new JwtMiddleware;