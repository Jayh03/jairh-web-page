'use client';
import Image from 'next/image';
import ButtonCustom from '../ButtonCustom/ButtonCustom';
import { useTranslations } from 'next-intl';
import { GithubIcon, LinkedinIcon, EmailIcon } from '../icons';

import styles from './Article-one.module.scss';
import MarginContainer from '../MarginContainer/MarginContainer';

export default function ArticleOne() {
	const t = useTranslations('Hero');

	const infoButtons: Array<{
		title: string;
		url: string;
		icon: string;
		colorTitle?: string;
		colorBackground?: string;
		blank?: boolean;
		variant?: 'default' | 'cv';
		isBorder?: boolean;
	}> = [
		{
			title: t('buttonProjects'),
			url: '#myprojects',
			icon: '/image/Abajo.svg',
			colorTitle: '#000000',
			isBorder: true
		},
		{
			title: t('buttonCV'),
			url: 'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/documents/hoja_de_vida_Jair_Henriquez.pdf',
			icon: '/image/descargaIcon.svg',
			variant: 'cv',
			colorTitle: '#00FF00',
			colorBackground: '#000000',
			isBorder: true,
			blank: true
		}
	];

	const skills = ['React', 'TypeScript', 'Next.js'];

	return (
		<div className={styles.container}>
			<MarginContainer>
				<div className={styles.content}>
					<div className={styles.container__info}>
						<div className={styles.badgeContainer}>
							<span className={styles.badge}>
								<span className={styles.badgeDot}></span>
								{t('badge')}
							</span>
						</div>

						<div className={styles.container__info__text}>
							<div className={styles.container__info__text__one}>
								<h1>
									{t('greeting')}
									<br />
									<span className={styles.typewriter}>{t('name')}</span>
								</h1>
								<div className={styles.roleContainer}>
									<span className={styles.codeIcon}>&lt;&gt;</span>
									<strong>{t('role')}</strong>
								</div>
							</div>

							<div className={styles.skillBadges}>
								{skills.map((skill, index) => (
									<span key={index} className={styles.skillBadge}>
										{skill}
									</span>
								))}
							</div>

							<p>{t('description')}</p>
						</div>

						<div className={styles.container__info__bottons}>
							{infoButtons &&
								infoButtons.map(
									(
										{
											title,
											url,
											icon,
											colorTitle,
											colorBackground,
											blank,
											variant,
											isBorder
										},
										index
									) => (
										<ButtonCustom
											key={index}
											title={title}
											url={url}
											icon={icon}
											colorTitle={colorTitle}
											colorBackground={colorBackground}
											variant={variant}
											isBorder={isBorder}
											onTarget={blank}
										/>
									)
								)}
						</div>

						<div className={styles.socialIcons}>
							<a
								href='https://github.com/Jayh03'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='GitHub'>
								<GithubIcon />
							</a>
							<a
								href='https://www.linkedin.com/in/jair-henríquez-102a54195'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn'
								className={styles.socialIconLinkedin}>
								<LinkedinIcon />
							</a>
							<a href='mailto:jhenriquezpallares@gmail.com' aria-label='Email'>
								<EmailIcon />
							</a>
						</div>
					</div>

					<div className={styles.container__image}>
						<div className={styles.imageWrap}>
							<div className={styles.imageFrame}>
								<span className={styles.frameCorner} data-corner='tl' />
								<span className={styles.frameCorner} data-corner='tr' />
								<span className={styles.frameCorner} data-corner='br' />
								<span className={styles.frameCorner} data-corner='bl' />

								<Image
									className={styles.imageMobile}
									src='/image/jair-h-web.svg'
									alt='Jair Henríquez'
									width={470}
									height={440}
									quality={75}
									priority={true}
									loading='eager'
								/>
							</div>

							<div className={styles.floatingIcon} data-position='left-center'>
								<GithubIcon />
							</div>
							<div className={styles.floatingIcon} data-position='top-right'>
								<span className={styles.codeIconSmall}>&lt;&gt;</span>
							</div>
							<div className={styles.floatingIcon} data-position='right-center'>
								<EmailIcon />
							</div>
						</div>
					</div>
				</div>
			</MarginContainer>
		</div>
	);
}
