import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';

import { appSettings } from '@/config/appSettings'

import { RouterLink } from '@/components/router-link';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(({ disabledLink = false, sx, ...other }, ref) => {
  // const theme = useTheme();
  // const PRIMARY_LIGHT = theme.palette.primary.light;
  // const PRIMARY_MAIN = theme.palette.primary.main;
  // const PRIMARY_DARK = theme.palette.primary.dark;

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo.svg"
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 200,
        height: 80,

        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <Box component="img" src={appSettings.logo} alt="web-site-logo" />
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link
      component={RouterLink}
      href="/"
      onClick={() => {
        window.location.href = '/';
      }}
      sx={{ textDecoration: 'none' }}
    >
      {logo}
    </Link>
  );
});

export default Logo;
