// 1st steo import React Flow and the others we need
//   creates nodes = devices
//   creates edges = cables
//   handles clicking

import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import React, { useState, useCallback } from 'react';

const initialNodes = [
    { id: 'n1', position: { x: 300, y: 0 }, data: { label: 'Router', type: 'Network Device', ip:'10.0.0.1', status:'online' } },
    { id: 'n2', position: { x: 300, y: 240 }, data: { label: 'Core Switch', type: 'Switch', ip: '10.0.0.2', status:'online' } },
    { id: 'n3', position: { x: 100, y: 400 }, data: { label: 'Web Server', type: 'Server', ip: '10.0.0.10', status:'online' } },
    { id: 'n4', position: { x: 300, y: 400 }, data: { label: 'Workstation', type: 'station', ip: '10.0.0.20', status:'online' } },
    { id: 'n5', position: { x: 300, y: 0 }, data: { label: 'Firewall', type: 'Firewall', ip: '10.0.0.254', status:'Active' } },
  ];
  const initialEdges = [
    { id: 'n5-n1', source: 'n5', target: 'n1' }, // Firewall → Router
    { id: 'n1-n2', source: 'n1', target: 'n2' }, // Router → Core Switch
    { id: 'n2-n3', source: 'n2', target: 'n3' }, // Switch → Web Server
    { id: 'n2-n4', source: 'n2', target: 'n4' }, // Switch → Workstation
  ];
  
  export default function NetworkCanvas({onDeviceClick}) {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
   
    const onNodesChange = useCallback(
      (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
      [],
    );
    const onEdgesChange = useCallback(
      (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
      [],
    );
    const onConnect = useCallback(
      (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
      [],
    );
    const onNodeClick = (event, node) => {
      onDeviceClick(node);
    }
   
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          fitView
        />
      </div>
    );
  }

