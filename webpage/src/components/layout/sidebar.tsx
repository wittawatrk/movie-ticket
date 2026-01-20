'use client';

import { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton,
} from '@mui/material';
import { logout } from '@/services/login.service';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const home = user.role === 'ADMIN' ? '/admin' : '/dashboard';
  const history = user.role === 'ADMIN' ? '/admin/history' : '/history';

  const MenuContent = () => (
    <Box className="w-[240px] p-4 flex flex-col h-full">
      <h2 className="font-bold text-lg mb-4">{user.username}</h2>

      <List className="flex-1">
        <ListItemButton component={Link} href={home}>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton component={Link} href={history}>
          <ListItemText primary="History" />
        </ListItemButton>
      </List>

      <List>
        <ListItemButton onClick={logout}>
          <ListItemText primary="Logout" sx={{ color: 'error.main' }} />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>

      <div className="md:hidden fixed top-2 left-2 z-50">
        <IconButton onClick={() => setOpen(true)} size="large">
          <MenuIcon />
        </IconButton>
      </div>


      <aside className="hidden  md:block md:flex w-64 bg-white border-r border-[#E7E7E7] shadow-md h-screen fixed left-0 top-0">
        <MenuContent />
      </aside>


      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        <MenuContent />
      </Drawer>
    </>
  );
}
