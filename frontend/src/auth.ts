import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/core/providers/google";
import { AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "$env/static/private";

export const {handle} = SvelteKitAuth({
    providers: [
        Google({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        })
    ],
    secret: AUTH_SECRET,
    trustHost: true
});

console.log(process.env.GOOGLE_CLIENT_ID);