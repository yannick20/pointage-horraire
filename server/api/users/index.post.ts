import userService from '@/server/api/services/users/index';
import { InsertUser } from "@/db/schema";
import { hash } from 'bcrypt';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    //Verification user
    const itemVerif = await userService.getUserByPhone(body.phone);
    if(itemVerif){
      throw createError({
        statusCode: 400,
        statusMessage: "Cet utilisateur existe déja!",
      });
    }

    const hashedPassword = await hash(body.password, 10);
  
    //element body
    const newItem: InsertUser = {
      ...body,
      password: hashedPassword,
    }
  
    //insertion data
    const itemResponse = await userService.postUser(newItem);
  
  return { "message" : "L'utilisateur a ete cree", itemResponse};

  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
  
});