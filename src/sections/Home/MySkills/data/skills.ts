export type TabKey = 'frontendCore' | 'frameworks' | 'toolsAndOthers';

export interface SkillItem {
	name: string;
	yearsNum: string;
	percent: number;
	dots: string[];
}

export const SKILLS: Record<TabKey, SkillItem[]> = {
	frontendCore: [
		{
			name: 'HTML5',
			yearsNum: '5+',
			percent: 95,
			dots: ['#f97316', '#ef4444', '#64748b']
		},
		{
			name: 'CSS',
			yearsNum: '5+',
			percent: 90,
			dots: ['#3b82f6', '#0ea5e9', '#60a5fa']
		},
		{
			name: 'JavaScript',
			yearsNum: '4+',
			percent: 85,
			dots: ['#eab308', '#ca8a04', '#64748b']
		},
		{
			name: 'TypeScript',
			yearsNum: '3+',
			percent: 80,
			dots: ['#3b82f6', '#3b82f6', '#64748b']
		}
	],
	frameworks: [
		{
			name: 'React',
			yearsNum: '4+',
			percent: 90,
			dots: ['#06b6d4', '#0ea5e9', '#64748b']
		},
		{
			name: 'Next.js',
			yearsNum: '3+',
			percent: 85,
			dots: ['#ffffff', '#94a3b8', '#374151']
		},
		{
			name: 'Vue.js',
			yearsNum: '2+',
			percent: 70,
			dots: ['#22c55e', '#16a34a', '#374151']
		},
		{
			name: 'Sass/SCSS',
			yearsNum: '4+',
			percent: 88,
			dots: ['#ec4899', '#db2777', '#374151']
		}
	],
	toolsAndOthers: [
		{
			name: 'Git',
			yearsNum: '5+',
			percent: 90,
			dots: ['#f97316', '#ea580c', '#374151']
		},
		{
			name: 'GitHub',
			yearsNum: '5+',
			percent: 90,
			dots: ['#ffffff', '#94a3b8', '#374151']
		},
		{
			name: 'Figma',
			yearsNum: '3+',
			percent: 75,
			dots: ['#8b5cf6', '#06b6d4', '#f97316']
		},
		{
			name: 'Node.js',
			yearsNum: '2+',
			percent: 65,
			dots: ['#22c55e', '#16a34a', '#64748b']
		}
	]
};

export const RADIUS = 54;
export const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
