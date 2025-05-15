// src/config/appSettings.ts

 import { upcLogo } from '@/components/images';

export interface AppSettings {
  name: string;
  logo: string;
  theme: 'light' | 'dark';
  headerColor: string;
  bgColor: string;
  miniNav: boolean;
  headerType: 'default' | 'first';
  footerColor: 'default' | 'first';
  activeColor: string;
  activeHoverColor: string;
  cardType: string;
  loginBarColor: string;
  primaryColor: string;
  secondaryColor: string;
  footerlinkColor?: string;
  paymentCardColor?: string;
  applybtnColor?: string;
  cardsecondColor?: string;
  readmorebtn?: string;
  readmorecolor?: string;
  readmorecolorhover?: string;
  textColor?: string;
}

export const appSettings: AppSettings = {
    name: 'Priva Casino',
    logo: upcLogo.src,
    theme: 'dark',
    headerColor: '#000',
    bgColor: '#212121',
    miniNav: true,
    headerType: 'first',
    footerColor: 'first',
    activeColor: '#8b5f1b',
    activeHoverColor: '#C1AB4F',
    cardType: 'CARD1',
    loginBarColor: '#212121',
    primaryColor: '#fff',
    secondaryColor: '#fff',
    footerlinkColor: '#9F9F9F',
    paymentCardColor: 'rgba(255, 255, 255, 1)',
    applybtnColor: '#ff0',
    cardsecondColor: '180deg, #2F2F2F 100%, #434343 100%',
    readmorebtn: '#fff',
    readmorecolor: '#125',
    readmorecolorhover: '#fff',
    textColor: '#fff',
 
};
