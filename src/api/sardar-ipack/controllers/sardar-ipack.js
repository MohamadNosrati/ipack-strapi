'use strict';

/**
 * A set of functions called "actions" for `sardar-ipack`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try{
      const checkUnique=async()=>{
        const [entries,count] = await strapi.db.query('api::otp.otp').findWithCount({
          select: ['phoneNumber'],
          where: { 'phoneNumber': ctx.request.body.phoneNumber },
          // populate: { category: true },
        
        });
        return entries
      }
      const registerOtp=async()=>{
        let res=await fetch("http://localhost:1337/api/otps",{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify({
              data:{
                phoneNumber:ctx.request.body.phoneNumber,
                expire:Date.now() + 120000,
                token:Math.floor(Math.random()*100000),
              }
            })
          })
          let data=await res.json()
          return {
            "message":"your phone number token created successfully!",
            "phoneNumber":data.data.attributes.phoneNumber,
            // "token":data.data.attributes.token,
            // "id":data.data.id,
            // "createdAt":data.data.attributes.createdAt,
            "expireTime":data.data.attributes.expire
          }
      }
      if(ctx.request.body.phoneNumber.length==11){
        if((await checkUnique()).length){
          return {
            "message":"there is already an active token for this phoneNumber"
          }
        }else{
          return registerOtp()
        }
      }else{
        return {
          "message":"your phoneNumber characters must be equal to 11!"
        }
      }
    }catch(err){
      ctx.body=err
    }
  }
};






// if((await checkUnique()).length){
//   return "there is an active token for this number!"
// }else{
//   return "its an ok Number!"
// }








    // return registerOtp()
    // try {
    //   console.log(ctx)
    //   ctx.body = 'damet garm sardar! post method!';
    // } catch (err) {
    //   ctx.body = err;
    // }