import React from 'react';
import { PiPContextType } from './PiPContext.types';
export declare const PiPContext: React.Context<PiPContextType | undefined>;
interface PiPProviderProps {
    children: React.ReactNode;
}
export declare const PiPProvider: React.FC<PiPProviderProps>;
export {};
