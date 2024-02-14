import { Box, Tab, Tabs } from '@mui/material';
import React, { Suspense, useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import './layout.css'
import { CONSTANTS } from '../../libs';
const Layout = () => {
    const tabsData = [
        { label: CONSTANTS.HOME_HEADER_NAV_LABELS.HOME, url: CONSTANTS.ROUTE_PATHS.HOME },
        { label: CONSTANTS.HOME_HEADER_NAV_LABELS.SURVEY, url: CONSTANTS.ROUTE_PATHS.SURVEY },
        { label: CONSTANTS.HOME_HEADER_NAV_LABELS.SENSORY_PREFERENCES, url: CONSTANTS.ROUTE_PATHS.SENSORY_PREFERENCES }
    ];
    const [selectedTab, setSelectedTab] = useState(0);
    // TODO: Handle page tab persistence when reloaded
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
                                to={tab.url}
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