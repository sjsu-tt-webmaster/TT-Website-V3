"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/router'; 
import supabase from '../../config/supabaseClient'; // Import your initialized Supabase client

const BrothersPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // Redirect to sign-in page if user is not authenticated
        router.push('/sign-in');
      }
    };

    checkUser();
  }, []);

  return (
    <div>
      <h1>Brothers Page</h1>
      {/* Page content here */}
    </div>
  );
};

export default BrothersPage;
