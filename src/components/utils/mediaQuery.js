import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useMediaUp = (breakpoint) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(breakpoint));
};

export const useMediaDown = (breakpoint) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(breakpoint));
};

export const useMediaOnly = (breakpoint) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.only(breakpoint));
};

export const useMediaBetween = (start, end) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.between(start, end));
};
