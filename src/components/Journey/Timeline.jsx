import React from 'react';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import FullStackTimeline from './FullStackTimeline';
import ExplorationTimeline from './ExplorationTimeline';
import BackendTimeline from './BackendTimeline';
import CPTimeline from './CPTimeline';
import FoundationTimeline from './FoundationTimeline';
const Timeline = () => {

    return (
        <div className='flex-1'>
            <FullStackTimeline></FullStackTimeline>
            <ExplorationTimeline></ExplorationTimeline>
            <BackendTimeline></BackendTimeline>
            <CPTimeline></CPTimeline>
            <FoundationTimeline></FoundationTimeline>
        </div>
    );
};

export default Timeline;
