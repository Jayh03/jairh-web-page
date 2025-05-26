'use client';
import styles from './steps-line.module.scss';

const steps = [
	{ label: 'Planeación', emoji: '🧠' },
	{ label: 'Diseño', emoji: '🎨' },
	{ label: 'Desarrollo', emoji: '💻' },
	{ label: 'Testing', emoji: '🧪' },
	{ label: 'Producción', emoji: '🚀' },
	{ label: 'Mantenimiento', emoji: '🛠️' }
];

export default function StepsLine() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<p>{'Rutas de desarrollo optimizadas'}</p>
			</div>
			<div className={styles.timeline}>
				{steps.map((step, index) => (
					<div key={index} className={styles.step}>
						<div className={styles.iconRow}>
							<div className={styles.circle} />
							<span className={styles.label}>
								{step.emoji} {step.label}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
