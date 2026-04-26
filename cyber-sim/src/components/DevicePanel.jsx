
function DevicePanel({device}){
   if (device === null) {
    return <div>Select a device</div>
   }
   return (
    <div>
        <h2>Device Info Panel</h2>
        <p>{device.data.type}</p>
        <p>{device.data.label}</p>
        <p>{device.data.ip}</p>
        <p>{device.data.status}</p>
    </div>
   )
}

export default DevicePanel;
