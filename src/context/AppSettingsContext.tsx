// src/context/AppSettingsContext.tsx
'use client';
import React, { createContext, useContext } from 'react';
import { appSettings, AppSettings } from '@/config/appSettings';

const AppSettingsContext = createContext<AppSettings>(appSettings);

export const AppSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppSettingsContext.Provider value={appSettings}>
      {children}
    </AppSettingsContext.Provider>
  );
};

export function useAppSettings() {
  return useContext(AppSettingsContext);
}
