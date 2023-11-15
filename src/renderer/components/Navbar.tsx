/* eslint-disable react/react-in-jsx-scope */
import classes from './Navbar.module.css';
import { IconDatabase, IconHome, IconSettings } from '@tabler/icons-react';
import { Box, Divider, Stack, Text } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';

const mainLinks = [
  { label: 'Home', icon: IconHome, path: '/' },
  { label: 'Repos', icon: IconDatabase, path: '/repos' },
  { label: 'Settings', icon: IconSettings, path: '/settings' },
];

export function DoubleNavbar() {
  const location = useLocation();
  const activeLink = [...mainLinks]
    .reverse()
    .find((link) => location.pathname.startsWith(link.path));
  const navigate = useNavigate();

  const links = mainLinks.map((link) => (
    <a
      className={classes.link}
      data-active={activeLink === link || undefined}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.path);
      }}
      key={link.label}
    >
      <link.icon size='1rem' /> {link.label}
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.main}>
          <Stack>
            <Box px='md' pt='md'>
              <Text size='md' fw='bold'>
                Kangaroo Docs
              </Text>
            </Box>
            <Divider />
            <div>{links}</div>
          </Stack>
        </div>
      </div>
    </nav>
  );
}
