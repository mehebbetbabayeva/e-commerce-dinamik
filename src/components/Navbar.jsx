import React from 'react'
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

const Nav = styled.div`
  height: 60px;
`;
const NavContent = styled.div`
    display: flex;
    height: 60px;
    align-items:center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align:center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Select = styled.select`
  width: 50px;
  height: 50px;
  font-size: 20px;
  outline: none;
  border: 1px solid gray;
  margin-right: 20px;
`
const Logo = styled.h1`
  font-size: 40px;
`
const MenuItem = styled.div`
  margin-left: 25px;
  cursor: pointer;
`
const Navbar = () => {
  
  return (
    <Nav>
        <div className="container">
           <NavContent>
               <Left>
               <Select name="lang" id="lang" >
                  <option>Az</option>
                  <option>En</option>
               
               </Select>
               <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200  }} 
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Axtarış"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
   
     
               </Paper >
               </Left>
               <Center>
                <Logo>Fashion</Logo>
               </Center>
               <Right>
                <MenuItem>QEYDİYYAT</MenuItem>
                <MenuItem>GİRİŞ</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon/>
                </Badge>
                </MenuItem>
               </Right>
           </NavContent>
        </div>
    </Nav>
  )
}

export default Navbar