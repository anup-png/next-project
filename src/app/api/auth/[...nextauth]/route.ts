import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

// const handler = NextAuth({
// providers: [
//   CredentialsProvider({
//     // The name to display on the sign in form (e.g. 'Sign in with...')
//     name: 'Credentials',

//     credentials: {
//       username: { label: "Username", type: "text", placeholder: "jsmith" },
//       password: { label: "Password", type: "password" }
//     },
//     async authorize(credentials:any): Promise<any>{
      
//      const username = credentials.username;
//      const password = credentials.password;
//      console.log(username, password);
//      const user="anup";

//       return Response.json({name:user})
//     }
//   })
// ]

// })
// export const GET = handler;
// export const POST = handler;


const handler = NextAuth({
  providers:[
    CredentialsProvider({
      name:"credentials",
      credentials:{
        username:{
          label :"username",
          type:"text",
          placeholder:"username"
        }
        ,
        password:{
          label:"password",
          type:"password",
          placeholder:"password"
        }
      }
      ,
      async authorize(credentials:any):Promise<any>{
        const username = credentials.username;
        const password = credentials.password;
        console.log(username,password);
        return Response.json(
          {
            message:"success"
          }
        )
      }
    })
  
  ]
})

  export const GET = handler; 
  export const POST = handler;