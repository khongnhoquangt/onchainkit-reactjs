import { OnchainKitProviderReact } from '../types';
import { MiniKitContextType, MiniKitProviderReact } from './types';
export declare const emptyContext: MiniKitContextType;
export declare const MiniKitContext: import('react').Context<MiniKitContextType>;
export interface MiniKitConfigTypes {
    appName?: string;
    appLogoUrl?: string;
}
/**
 * Provides the MiniKit React Context to the app.
 */
export declare function MiniKitProvider({ children, notificationProxyUrl, autoConnect, appName, appLogoUrl, ...onchainKitProps }: MiniKitProviderReact & OnchainKitProviderReact & MiniKitConfigTypes): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MiniKitProvider.d.ts.map