import * as jwt from "@oslojs/jwt";

export function decodeIdToken(idToken: string): object {
	try {
		return jwt.decodeJWT(idToken);
	} catch (e) {
		// @ts-expect-error coming from original library
		throw new Error("Invalid ID token", {
			cause: e
		});
	}
}
