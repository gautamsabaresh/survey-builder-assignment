import { Box, Tab, Tabs } from '@mui/material';
import React, { Suspense, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom'
import './layout.css'
import { CONSTANTS } from '../../libs';
const Layout = () => {
    const tabsData = CONSTANTS.HOME_HEADER_NAV;
    const location = useLocation();
    const tabIndex = tabsData.findIndex((data) => data.route === location.pathname); 
    const [selectedTab, setSelectedTab] = useState(tabIndex < 0 ? 0 : tabIndex);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };
    return (
        <>
            <header className='header'>
                <div className='logo'>Sample</div>
                <div>
                    <h2>Survey Tool</h2>
                    <div className='name'> {tabsData[selectedTab]?.label}</div>
                </div>
            </header>
            <div>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={selectedTab}
                        onChange={handleChange}
                        aria-label="nav tabs example"
                        role="navigation"
                    >
                        {tabsData.map((tab, index) => (
                            <Tab
                                key={index}
                                label={tab.label}
                                component={Link}
                                to={tab.route}                                
                            />
                        ))}
                    </Tabs>
                </Box>
            </div>
            <main>
                <Suspense fallback={<p>loading</p>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}

export default Layout