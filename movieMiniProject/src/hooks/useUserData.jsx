import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export const useUserData = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function getUserData() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      setUserData(user.user_metadata);
    }
    getUserData();
  }, []);
  return userData;
};
