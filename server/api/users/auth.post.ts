import userService from '@/server/api/services/users/index';
import { InsertUser } from "@/db/schema";
import { compare, hash } from 'bcrypt';
import jwtMiddleware from '@/server/api/middlewares/jwt.middlwares';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    //Verification user
    const itemVerif = await userService.getUserByPhone(body.phone);
    if(!itemVerif){
      throw createError({
        statusCode: 400,
        statusMessage: "Ce numero de telephone n'existe pas!",
      });
    }

    if(itemVerif.status == 0){
      throw createError({
        statusCode: 400,
        statusMessage: "Desoler votre compte est désactiver!",
      });
    }

    const isPasswordMatching = await compare(body.password, itemVerif.password!);
    if (!isPasswordMatching){
      throw createError({
        statusCode: 400,
        statusMessage: "Desoler votre mot de passe est incorrect!",
      });
    }
  
    //token generate
    const token = jwtMiddleware.generateAccessToken(body.phone)
    
    const userItem = {
      id: itemVerif.id,
      nom: itemVerif.nom,
      prenom: itemVerif.prenom,
      phone: itemVerif.phone,
      fonction: itemVerif.phone,
      role: itemVerif.role,
      agencesId: itemVerif.agencesId,
      
    }
  
  return { "message" : "Connexion reussie", userItem, token};

  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
  
});