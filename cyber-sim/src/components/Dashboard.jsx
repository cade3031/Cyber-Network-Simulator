// Main Page Dashboard 
// will use useState to manage if a device is clicked
// //renders the device panel for the selected device
// renders the Terminal Panel for the Device Clicked

// 1ST Step is to import the other pages
import React, { useState } from 'react';
import DevicePanel from './DevicePanel';
import TerminalPanel from './TerminalPanel';
import AlertPanel from './AlertPanel';
import NetworkCanvas from './NetworkCanvas';

// 2nd step is to add the useState to manage the selected device
function Dashboard() {
    const [selectedDevice, setSelectedDevice] = useState(null);
    // Return the other pages for the device clicked
    return (
        <div>
            <DevicePanel device={selectedDevice} />  
            <TerminalPanel device={selectedDevice} />
            <AlertPanel/>
            <NetworkCanvas onDeviceClick={setSelectedDevice} />
        </div>
    )
}

export default Dashboard;
// DevicePanel is set to selectedDevice because it shows the info for the device clicked
// TerminalPanel needs selectedDevice because run commands on the clicked device
// AlertPanel shows alerts across the whole network not just one device
//