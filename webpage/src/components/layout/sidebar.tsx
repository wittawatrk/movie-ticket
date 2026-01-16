'use client';

import { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, List, ListItemButton, ListItemText, Drawer, IconButton } from '@mui/material';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const MenuContent = () => (
    <Box className="w-[240px] p-4">
      <h2 className="font-bold text-lg mb-4">Admin</h2>

      <List>
        <ListItemButton component={Link} href="/admin">
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton component={Link} href="/admin/history">
          <ListItemText primary="History" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-2 left-2 z-50">
        <IconButton onClick={() => setOpen(true)} size="large">
          <MenuIcon />
        </IconButton>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden  md:block md:flex w-64 bg-white border-r border-[#E7E7E7] shadow-md h-screen fixed left-0 top-0">
        <MenuContent />
      </aside>

      {/* Mobile Drawer */}
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
