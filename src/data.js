import {
	faReact,
	faJs,
	faPython,
	faVuejs,
	faNode,
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

/* import projectImg1 from './assets/placeholder.jpg'; */
import portfolioImg1 from './assets/portfolio/portfolio_home.png';
import portfolioImg2 from './assets/portfolio/portfolio_projects.png';
import portfolioImg3 from './assets/portfolio/portfolio_project.png';
import portfolioImg4 from './assets/portfolio/portfolio_contact.png';
import chatImg1 from './assets/chatapp/chat_realtime.png';
import chatImg2 from './assets/chatapp/chat_login.jpeg';
import chatImg3 from './assets/chatapp/chat_home.png';
import chatImg4 from './assets/chatapp/chat_notif.png';
import chatImg5 from './assets/chatapp/chat_search.png';
import chatImg6 from './assets/chatapp/chat_create_group.png';
import chatImg7 from './assets/chatapp/chat_manage_group.png';
import forumImg1 from './assets/fast_forum/forum_allposts.png';
import forumImg2 from './assets/fast_forum/forum_post.png';
import forumImg3 from './assets/fast_forum/forum_profile.png';
import forumImg4 from './assets/fast_forum/forum_login.png';
import bombImg1 from './assets/bomberman/bomberman.jpeg';

export const projectsData = [
	{
		id: 1,
		name: 'React Portfolio',
		skills: 'React.js | React Hooks | TailwindCSS',
		imgs: [portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg4],
		link: 'https://tyhuang06.github.io/tyhuang_v2/',
		github: 'https://github.com/tyhuang06/tyhuang_v2',
		summary: 'Personal Website made with React.js',
		desc: [
			<div>
				Implemented with{' '}
				<span className="text-navy">React.js + React Hooks</span>
			</div>,
			<div>
				Responsive web design using{' '}
				<span className="text-navy">Tailwind CSS</span>
			</div>,
			<div>
				<span className="text-navy">EmailJS</span> to send email without
				backend
			</div>,
			<div>
				<span className="text-navy">Mapbox GL JS</span> to render a map
				displaying location
			</div>,
		],
		icons: [faReact, faJs],
		isOpen: false,
	},
	{
		id: 2,
		name: 'Chat App',
		skills: 'Socket.io | React.js | Context API | Node.js | Express.js | MongoDB',
		imgs: [
			chatImg1,
			chatImg2,
			chatImg3,
			chatImg4,
			chatImg5,
			chatImg6,
			chatImg7,
		],
		link: 'https://mern-chatapp-deploy.herokuapp.com/',
		github: 'https://github.com/tyhuang06/tyhuang_v2',
		summary: 'Full-stack real time chat application',
		desc: [
			<div>
				Developed real-time communication and notification system with{' '}
				<span className="text-navy">Socket.io</span>
			</div>,
			<div>
				React frontend with{' '}
				<span className="text-navy">functional components</span>,{' '}
				<span className="text-navy">React Hooks</span> and{' '}
				<span className="text-navy">Context API</span>
			</div>,
			<div>
				<span className="text-navy">NodeJS</span> backend with{' '}
				<span className="text-navy">Express</span> and stored user
				details in encrypted format with{' '}
				<span className="text-navy">MongoDB</span>
			</div>,
		],
		icons: [faReact, faNode],
		isOpen: false,
	},
	{
		id: 3,
		name: 'Fast Forum',
		skills: 'Python | FastAPI | PostgreSQL | Vue.js',
		imgs: [forumImg1, forumImg2, forumImg3, forumImg4],
		link: '',
		github: 'https://github.com/tyhuang06/fast_forum',
		summary: 'A full stack CRUD forum application',
		desc: [
			<div>
				Backend:{' '}
				<span className="text-navy">Python + FastAPI + PostgreSQL</span>
			</div>,
			<div>
				Frontend: <span className="text-navy">Vue.js + Vuex</span>
			</div>,
			<div>
				Secure API endpoints using{' '}
				<span className="text-navy">OAuth2</span> and{' '}
				<span className="text-navy">JWT</span>
			</div>,
			<div>RESTful APIs</div>,
		],
		icons: [faPython, faVuejs],
		isOpen: false,
	},

	{
		id: 4,
		name: 'Bomberman Game',
		skills: '',
		imgs: [bombImg1],
		link: '',
		github: 'https://github.com/tyhuang06/Bomberman',
		summary: 'A retro maze-based strategy game',
		desc: [
			<div>
				Gameplay involves strategically placing down bombs, to destroy
				obstacles and kill enemies.
			</div>,
			<div>
				Built with <span className="text-navy">C++</span> and{' '}
				<span className="text-navy">Allegro Library</span>
			</div>,
			<div>
				Applied modified A* algorithm for enemy automatic path finding
			</div>,
		],
		icons: [faCode],
		isOpen: false,
	},
];
