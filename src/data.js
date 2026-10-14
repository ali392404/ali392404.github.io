// Portfolio content. Add project-specific source or demo links once verified.
export const profile = {
  name: 'Ali Asghar',
  role: 'Software Engineer',
  location: 'Windsor, Ontario, Canada',
  github: 'https://github.com/ali392404',
  linkedin: 'https://www.linkedin.com/in/ali-asghar392404/',
  email: 'asghar4@uwindsor.ca',
  resume: '/Ali-Asghar-Resume.pdf',
}

export const projects = [
  {
    id: '01', name: 'Buddy AI', label: 'AWARD-WINNING AI DESKTOP ASSISTANT',
    summary: 'A Windows AI assistant built from 10+ modular Python components. Uses multilingual voice commands with Whisper and GPT-4o to manage Gmail, schedule Google Calendar events, work with files and camera controls, launch applications, and control Spotify. Won 1st Place in Automation at WinHacks 2026.',
    tags: ['Python', 'Tkinter', 'REST APIs', 'OAuth', 'Whisper', 'GPT-4o'],
    kind: 'assistant', featured: true, github: '', demo: '',
  },
  {
    id: '02', name: 'MelodyMood', label: 'AI / MUSIC DISCOVERY',
    summary: 'An AI-assisted Spotify playlist generator that transforms mood and listening preferences into personalized playlists saved directly to a user’s Spotify account. Built with Spotify APIs, secure OAuth authentication, and a modular Python backend in a three-person team.',
    tags: ['Python', 'Spotify API', 'Spotipy', 'OAuth', 'REST APIs'],
    kind: 'music', featured: false, github: '', demo: '',
  },
  {
    id: '03', name: 'Recapify AI', label: 'AI / PRODUCTIVITY',
    summary: 'A web application that transcribes spoken audio using Whisper, turns transcripts into concise AI-generated summaries, and exports shareable PDF reports. Includes email delivery to make meeting and lecture notes easier to review and distribute.',
    tags: ['Python', 'Flask', 'Whisper', 'OpenAI API', 'PDF', 'Gmail API'],
    kind: 'recap', featured: false, github: '', demo: '',
  },
  {
    id: '04', name: 'GymSight', label: 'FITNESS / REPORTING AUTOMATION',
    summary: 'A Python-based reporting automation project that organizes fitness-related information into structured, readable summaries, reducing the manual work required to prepare and review reports.',
    tags: ['Python', 'Automation', 'Data Processing', 'Reporting'],
    kind: 'vision', featured: false, github: '', demo: '',
  },
]

export const experience = [
  {
    company: 'Linamar Corporation', division: 'Exkor Manufacturing · Windsor, Ontario',
    role: 'Software Engineer (Automations) · Co-op',
    dates: 'Jan – Sep 2026',
    description: 'Owned development of an internal tool-crib system from requirements through deployment: parts checkout, inventory search, usage tracking, automated transaction logs, and management reports generated every four hours. Also designed a maintenance parts-search interface that improved operational efficiency by approximately 40%, and developed a launcher to streamline access to internal tools. Completed 30+ live deployments, validating features with staff through Agile feedback cycles. Nominated for Employee of the Month for technical initiative and ownership.',
    tech: ['Internal Tools', 'Workflow Automation', 'Inventory Search', 'Reporting', 'Agile Methodologies'],
  },
]

export const skillGroups = [
  { name: 'Languages', skills: ['Java', 'Python', 'C', 'C++', 'SQL', 'VBA', 'JavaScript', 'HTML', 'CSS'] },
  { name: 'Tools & APIs', skills: ['React', 'Git', 'GitHub', 'REST APIs', 'OAuth', 'Google Cloud Console'] },
  { name: 'Foundations', skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Software Testing', 'Agile Methodologies', 'API Integration'] },
]
