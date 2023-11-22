import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import logoImg from "../../assets/images/logo.png";
import { Container } from "@mui/system";
import CustomButton from "../../assets/theme/components/CustomButton";
import Logout from '@mui/icons-material/Logout';
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Menu,
    MenuItem,
    Avatar,
    Tooltip,
    IconButton,
    Divider,
} from "@mui/material";
import { useState } from "react";
import { LinkOffTwoTone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Navbar = (userRole) => {

    const user = localStorage.getItem('userRole');
    const navigate = useNavigate();

    const [mobileMenu, setMobileMenu] = useState({
        left: false,
    });

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.type === "Tab" || event.type === "Shift")
        ) {
            return;
        }

        setMobileMenu({ ...mobileMenu, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {user === 'admin' ? (
        <List>
          {/* Admin links */}
          {["Venue", "User Management", "Dashboard", "Organizer"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton >
                  <ListItemIcon>
                    {index === 0 }
                    {index === 1 }
                    {index === 2 }
                    {index === 3 }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      ) : (
        // User links
        <List>
          {["Home", "Events", "VenuePage", "Contact", "About"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton >
                  <ListItemIcon>
                    {index === 1 }
                    {index === 2 }
                    {index === 0 }
                    {index === 3 }
                    {index === 4 }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      )}
        </Box>
    );

    const NavLink = styled(Typography)(({ theme }) => ({
        fontSize: "16px",
        color: "#333",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
            color: "#E61F22",
        },
    }));

    const NavbarLinksBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: "pointer",
        display: "none",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
    }));

    const NavbarContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2),
        },
    }));

    const NavbarLogo = styled("img")(({ theme }) => ({
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        handleCloseUserMenu();
        navigate("/")
    };

    const handleDashboardClick = () => {
        navigate("/Dashboard")
    }

    const handleVenueClick = () => {
        navigate("/Venue")
    }

    const handleUserManagementClick = () => {
        navigate("/Usermgmt")
    }
    const handleOrganizersClick = () => {
        navigate("/Organizers")
    }
    const handleHomeClick = () => {
        navigate("/")
    }
    const handleEventsClick = () => {
        navigate("/events")
    }
    const handleVenuePageClick = () => {
        navigate("/VenuePage")
    }
    const handleContactClick = () => {
        navigate("/contact")
    }
    const handleAboutClick = () => {
        navigate("/about")
    }

    return (
        <NavbarContainer>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CustomMenuIcon onClick={toggleDrawer("left", true)} />
                    <Drawer
                        anchor="left"
                        open={mobileMenu["left"]}
                        onClose={toggleDrawer("left", false)}
                    >
                        {list("left")}
                    </Drawer>
                    <NavbarLogo src={logoImg} alt="logo" style={{ maxWidth: "23%" }} />
                </Box>

                {user ? (
                    <NavbarLinksBox>
                        {user === 'admin' ? (
                            // Admin links
                            <>
                                <NavLink variant="body2" onClick={handleDashboardClick}>Dashboard</NavLink>
                                <NavLink variant="body2" onClick={handleUserManagementClick}>UserManagement</NavLink>
                                <NavLink variant="body2" onClick={handleVenueClick}>Venue</NavLink>
                                <NavLink variant="body2" onClick={handleOrganizersClick}>Organizers</NavLink>
                            </>
                        ) : (
                            // User links
                            <>
                                <NavLink variant="body2" onClick={handleHomeClick}>Home</NavLink>
                                <NavLink variant="body2" onClick={handleEventsClick}>Events</NavLink>
                                <NavLink variant="body2" onClick={handleVenuePageClick}>Venue</NavLink>
                                <NavLink variant="body2" onClick={handleContactClick}>Contact</NavLink>
                                <NavLink variant="body2" onClick={handleAboutClick}>About</NavLink>
                            </>
                        )}
                    </NavbarLinksBox>
                ) : (
                    // Guest links
                    <NavbarLinksBox>
                        <NavLink variant="body2" onClick={handleHomeClick}>Home</NavLink>
                        <NavLink variant="body2" onClick={handleEventsClick}>Events</NavLink>
                        <NavLink variant="body2" onClick={handleVenuePageClick}>Venue</NavLink>
                        <NavLink variant="body2" onClick={handleContactClick}>Contact</NavLink>
                        <NavLink variant="body2" onClick={handleAboutClick}>About</NavLink>
                    </NavbarLinksBox>
                )}
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ml: "1rem"
                }}
            >
                {user ? (
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar src="../../../assets/images/user-avatar.png" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px'}}
                            id="menu-appbar-user"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={logout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                ) : (
                    <CustomButton
                        backgroundColor="#E61F22"
                        color="#fff"
                        buttonText="Login"
                        variant="contained"
                        href="/login"
                    />
                )}
            </Box>
        </NavbarContainer>
    );
};

export default Navbar;