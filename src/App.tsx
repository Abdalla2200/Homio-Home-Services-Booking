import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { supabase } from "./lib/supabase";
import { useAuth } from "./store/useAuth";

export default function App() {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) =>
      useAuth.getState().setSession(session),
    );

    return () => subscription.unsubscribe();
  }, []);

  return <AppRouter />;
}
