export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube',
	Upwork = 'upwork',
	Instagram = 'instagram',
	Whatsapp = 'whatapp',
	Skype = 'skype'
}

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship'
}

export type Asset = string | { light: string; dark: string };

export interface Item {
	slug: string;
	name: string;
	logo: string | Asset;
	shortDescription: string;
	description: Array<string> | string;
	screenshots?: Array<{ src: string; label: string }>;
	video?: Array<{ src: string; label: string; thumbnail: string }>;
	years?: string;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface Skill extends Omit<Item, 'shortDescription'> {
	color: string;
	description: string;
}

export interface Project extends Item {
	links: Array<Link>;
	color: string;
	period?: {
		from: Date;
		to?: Date;
	};
	type: string;
	description: string | Array<string>;
	skills?: Array<Skill>;
}

export interface Experience extends Project {
	company: string;
	location: string;
	contract: ContractType;
	description: any;
}

export interface Education extends Item {
	organization: string;
	location: string;
	period: {
		from: Date;
		to?: Date;
	};
	subjects: Array<string>;
	degree: string;
}

export interface PageParams {
	title: string;
}

export interface PageWithSearchParams<T> extends PageParams {
	items: Array<T>;
}

export interface HomeLink {
	platform: Platform;
	link: string;
}

export interface HomePageParams extends PageParams {
	name: string;
	lastName: string;
	description: string;
	links: Array<HomeLink>;
	skills?: Array<Skill>;
}

export type SearchPageParams = PageParams;

export type ProjectPageParams = PageWithSearchParams<Project>;

export type ExperiencePageParams = PageWithSearchParams<Experience>;

export type EducationPageParams = PageWithSearchParams<Education>;

export type SkillsPageParams = PageWithSearchParams<Skill>;

export interface ResumePageParams extends PageParams {
	item: string;
}
