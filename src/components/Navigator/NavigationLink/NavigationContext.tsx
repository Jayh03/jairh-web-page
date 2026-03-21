'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
	activeLink: string | null;
	setActiveLink: (link: string | null) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
	undefined
);

export function NavigationProvider({ children }: { children: ReactNode }) {
	const [activeLink, setActiveLink] = useState<string | null>(null);

	return (
		<NavigationContext.Provider value={{ activeLink, setActiveLink }}>
			{children}
		</NavigationContext.Provider>
	);
}

export function useNavigation() {
	const context = useContext(NavigationContext);
	if (!context) {
		throw new Error('useNavigation must be used within NavigationProvider');
	}
	return context;
}
