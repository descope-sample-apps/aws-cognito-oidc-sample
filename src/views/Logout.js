import { Auth } from "aws-amplify";

async function handleSignOut(event) {
  event.preventDefault();
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
  setUser(null);
  setIsLoading(false);
}
