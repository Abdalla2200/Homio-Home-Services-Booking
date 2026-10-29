import { supabase } from "../lib/supabase";
import type { LoginFormData, RegisterFormData } from "../types/authSchema";

export async function registerUser({
  email,
  password,
  name,
}: RegisterFormData) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name },
    },
  });

  if (error) throw error;

  return data;
}

export async function loginUser({ email, password }: LoginFormData) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data;
}

export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};
