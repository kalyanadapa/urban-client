'use client';

import React from 'react';
import AdminLayout from '@/layouts/admin'; // assuming `index.tsx` in that folder

type Props = {
  searchParams: any;
};

function HomeView({ searchParams }: Props) {
  return (
    <AdminLayout>
      {/* Add your admin page content here */}
      <h1>Welcome to Admin Home</h1>
    </AdminLayout>
  );
}

export default HomeView;
