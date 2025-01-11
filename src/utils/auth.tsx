
import supabase from "@/lib/supabase";

export const checkUserSession = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

export const logOutUser = async () => {
  await supabase.auth.signOut();
};
