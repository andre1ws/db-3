import { useMemo, useState } from 'react'
import {
  Archive, ArrowDownUp, ArrowUpRight, AudioLines, BadgePercent, BarChart3, Bell, CalendarDays,
  Check, ChevronDown, ChevronLeft, ChevronRight, CircleDollarSign, Clock, Columns3, Download,
  ExternalLink, FileAudio, FilePlus2, FileText, Handshake, Image, ImagePlus, Landmark,
  LayoutDashboard, Menu, MessageCircle, MessagesSquare, Monitor, Pencil, PlaySquare, Plus,
  Receipt, RefreshCw, ScanFace, Search, Settings, SlidersHorizontal, Smartphone, Sparkles,
  TrendingUp, UserRound, Users, Video, X, Zap,
} from 'lucide-react'
import './App.css'

const dashboardItem = { label: 'Dashboard', icon: LayoutDashboard }

const adminSubItems = ['Users', 'Notifications', 'Labels', 'Promotions', 'Roles']

const navItems = [
  { label: 'Departments', icon: FileText },
  { label: 'Payments', icon: CircleDollarSign, dot: true, arrow: true },
  { label: 'CSP', icon: Handshake, arrow: true },
  { label: 'Payment accounts', icon: Landmark, arrow: true },
  { label: 'Contracts', icon: Receipt },
  { label: 'Requests', icon: PlaySquare, dot: true, arrow: true },
  { label: 'Analytics', icon: TrendingUp },
  { label: 'Funds', icon: BarChart3 },
  { label: 'Perks and Benefits', icon: BadgePercent, arrow: true },
  { label: 'Assets', icon: Monitor },
  { label: 'Channels', icon: Video },
  { label: 'Knowledge base', icon: MessagesSquare, arrow: true },
]

const voices = [
  { name: 'Emma Parker - Professional', kind: 'Narration', language: '🇺🇸 English (US)', color: 'blue' },
  { name: 'Sofia Martinez - Friendly', kind: 'Storytelling', language: '🇪🇸 Spanish', color: 'orange' },
  { name: 'Arif Rahman - Engaging', kind: 'Storytelling', language: '🇧🇩 Bengali', color: 'lime' },
  { name: 'Daniel Brooks - Confident', kind: 'Storytelling', language: '🇬🇧 English (UK)', color: 'mint' },
  { name: 'Hiro Tanaka - Corporate', kind: 'Narration', language: '🇯🇵 Japanese', color: 'yellow' },
  { name: 'Olivia Reed - Storytelling', kind: 'Narrative', language: '🇺🇸 English (US)', color: 'pink' },
]

const useCases = [
  { type: 'youtube', title: 'Engaging voiceovers for videos & shorts.' },
  { type: 'trends', title: 'AI Voice Trends 2026' },
  { type: 'tiktok', title: 'Engaging TikTok voiceovers.' },
]

const promotions = [
  { id: 1, name: 'Save on Services with Garna', segment: 'Users', countries: 'All countries', leadsTo: 'Balance', endDate: '—', updated: '09 Jul 2026' },
  { id: 2, name: 'Update your mobile app', segment: 'CSP', countries: 'All countries', leadsTo: 'Balance', endDate: '—', updated: '16 Apr 2026' },
  { id: 3, name: 'Confirm actions faster with Biometrics', segment: 'Users', countries: 'All countries', leadsTo: 'Balance', endDate: '—', updated: '25 Mar 2026' },
  { id: 4, name: 'New creator verification flow', segment: 'Users', countries: 'All countries', leadsTo: 'Balance', endDate: '30 Sep 2026', updated: '25 Mar 2026' },
  { id: 5, name: 'FAQ: Service Update', segment: 'Users', countries: 'All countries', leadsTo: 'Balance', endDate: '—', updated: '24 Mar 2026' },
  { id: 6, name: 'FAQ: Payments Update', segment: 'Users', countries: 'All countries', leadsTo: 'Balance', endDate: '—', updated: '24 Mar 2026' },
  { id: 7, name: 'FAQ: Account Security', segment: 'Users', countries: 'All countries', leadsTo: 'Balance', endDate: '—', updated: '24 Mar 2026' },
  { id: 8, name: 'FAQ: Mobile Studio', segment: 'Users', countries: 'All countries', leadsTo: 'Balance', endDate: '—', updated: '24 Mar 2026' },
  { id: 9, name: 'FAQ: Voice Cloning', segment: 'Users', countries: 'All countries', leadsTo: 'Balance', endDate: '—', updated: '24 Mar 2026' },
  { id: 10, name: 'Help us become better', segment: 'CSP', countries: 'All countries', leadsTo: 'Balance', endDate: '—', updated: '11 Mar 2026' },
  { id: 11, name: 'Confirmation codes are now safer', segment: 'CSP', countries: 'Kazakhstan +2', leadsTo: 'Balance', endDate: '—', updated: '11 Mar 2026' },
  { id: 12, name: 'Confirmation codes in your region', segment: 'CSP', countries: 'Russia +2', leadsTo: 'Balance', endDate: '—', updated: '11 Mar 2026' },
  { id: 13, name: 'How to create an offer?', segment: 'CSP', countries: 'All countries', leadsTo: 'Balance', endDate: '—', updated: '11 Mar 2026' },
  { id: 14, name: 'Offers for freelancers', segment: 'CSP', countries: 'All countries', leadsTo: 'Balance', endDate: '—', updated: '11 Mar 2026' },
]

const users = [
  {
    id: 1,
    name: 'Andrey Gorbatykh',
    username: 'andriihorbatykh@genesispsp.com',
    email: 'andriihorbatykh@genesispsp.com',
    role: null,
    kyc: null,
    lastAction: '26 Aug 2026',
    device: 'desktop',
    registered: '30 Oct 2023',
    avatar: 'default',
  },
  {
    id: 2,
    name: 'Angel Gabriel Espinosa Nava',
    username: 'gabrielen105251@outlook.com',
    email: 'gabrielen105251@outlook.com',
    role: null,
    kyc: null,
    lastAction: '26 Aug 2026',
    device: 'desktop',
    registered: '26 Aug 2026',
    avatar: 'photo-a',
  },
  {
    id: 3,
    name: 'Ivan Belchikov',
    username: 'johnbel@yandex.ru',
    email: 'johnbel@yandex.ru',
    role: null,
    kyc: 'APPROVED',
    lastAction: '26 Aug 2026',
    device: 'desktop',
    registered: '26 Aug 2026',
    avatar: 'photo-b',
  },
  {
    id: 4,
    name: 'Alina Sapon',
    username: 'sapina@mediacube.io',
    email: 'sapina@mediacube.io',
    role: 'Community manager 2.0',
    kyc: null,
    lastAction: '26 Aug 2026',
    device: 'desktop',
    registered: '17 Apr 2024',
    avatar: 'default',
  },
  {
    id: 5,
    name: 'Katsiaryna Markevich',
    username: 'katmark@mediacube.io',
    email: 'katmark@mediacube.io',
    role: 'Support manager',
    kyc: 'APPROVED',
    lastAction: '26 Aug 2026',
    device: 'desktop',
    registered: '26 Feb 2025',
    avatar: 'default',
  },
  {
    id: 6,
    name: 'castle faceit',
    username: 'castlefaceit@gmail.com',
    email: 'castlefaceit@gmail.com',
    role: null,
    kyc: 'BLOCKED',
    lastAction: '26 Aug 2026',
    device: 'desktop',
    registered: '19 Aug 2026',
    avatar: 'photo-c',
  },
  {
    id: 7,
    name: 'Andrei Vasileuski',
    username: 'andre@mediacube.io',
    email: 'andre@mediacube.io',
    role: 'Super admin',
    kyc: 'APPROVED',
    lastAction: '26 Aug 2026',
    device: 'desktop',
    registered: '15 Nov 2021',
    avatar: 'default',
  },
  {
    id: 8,
    name: 'Dmitry Korshunov',
    username: 'dmitry@voiceon.ai',
    email: 'dmitry@voiceon.ai',
    role: 'Garna Partner (CY)',
    kyc: 'APPROVED',
    lastAction: '25 Aug 2026',
    device: 'mobile',
    registered: '03 Mar 2022',
    avatar: 'default',
  },
  {
    id: 9,
    name: 'Sofia Reed',
    username: 'sofia.reed@voiceon.ai',
    email: 'sofia.reed@voiceon.ai',
    role: 'Studio editor',
    kyc: null,
    lastAction: '24 Aug 2026',
    device: 'mobile',
    registered: '12 Jan 2025',
    avatar: 'photo-d',
  },
  {
    id: 10,
    name: 'Aliaksandr Karunny',
    username: 'akarunny@mediacube.io',
    email: 'akarunny@mediacube.io',
    role: 'SEO boost',
    kyc: 'APPROVED',
    lastAction: '26 Aug 2026',
    device: 'desktop',
    registered: '11 Mar 2022',
    avatar: 'default',
  },
]

const profileDefaults = {
  gender: '—',
  birthDate: '—',
  country: '—',
  icaDate: '—',
  position: 'Workspace member',
  tags: ['Voiceon'],
  accountLabel: 'Voiceon Internal account',
  balance: '$0.00/€0.00',
  socialAuth: '—',
  password: 'Created',
  twoFactor: null,
  lastActionApp: '—',
  appDevice: 'mobile',
}

const profiles = {
  1: { gender: 'Male', birthDate: '12 Jan 1992 (34 years old)', country: 'Ukraine', icaDate: '30.10.2023', position: 'Product operations', tags: ['Genesis', 'Voiceon'] },
  2: { gender: 'Male', birthDate: '04 Jul 1998 (28 years old)', country: 'Mexico', icaDate: '26.08.2026', position: 'Creator', tags: ['Voiceon'] },
  3: { gender: 'Male', birthDate: '19 Mar 1994 (32 years old)', country: 'Russia', icaDate: '26.08.2026', position: 'Voice talent', tags: ['Approved', 'Voiceon'], twoFactor: '+7 921 000 11 22' },
  4: { gender: 'Female', birthDate: '08 May 1996 (30 years old)', country: 'Belarus', icaDate: '17.04.2024', position: 'Community manager 2.0', tags: ['Community', 'Voiceon'], twoFactor: '+375 29 111 22 33' },
  5: { gender: 'Female', birthDate: '21 Nov 1993 (32 years old)', country: 'Belarus', icaDate: '26.02.2025', position: 'Support manager', tags: ['Support', 'Voiceon'], twoFactor: '+375 29 444 55 66' },
  6: { gender: 'Male', birthDate: '—', country: '—', icaDate: '19.08.2026', position: 'Creator', tags: ['Blocked'] },
  7: { gender: 'Male', birthDate: '02 Apr 1989 (37 years old)', country: 'Belarus', icaDate: '15.11.2021', position: 'Super admin', tags: ['Admin', 'Voiceon'], twoFactor: '+375 29 777 88 99' },
  8: { gender: 'Male', birthDate: '16 Jun 1988 (38 years old)', country: 'Cyprus', icaDate: '03.03.2022', position: 'Garna Partner (CY)', tags: ['Garna', 'Partner'], twoFactor: '+357 99 123 456' },
  9: { gender: 'Female', birthDate: '30 Sep 1997 (28 years old)', country: 'United States', icaDate: '12.01.2025', position: 'Studio editor', tags: ['Studio', 'Voiceon'] },
  10: {
    gender: 'Male',
    birthDate: '25 Sep 1986 (39 years old)',
    country: 'Belarus',
    icaDate: '24.08.2026',
    position: 'Digital Marketing Services',
    tags: ['SEO boost', 'Garna'],
    accountLabel: 'Garna Internal account',
    twoFactor: '+375 29 123 45 67',
    lastActionApp: '24 Aug 2026',
  },
}

function getProfile(user) {
  return { ...profileDefaults, lastActionApp: user.lastAction, ...profiles[user.id], ...user }
}

const cardTabs = ['Summary', 'Verification', 'Channels', 'Advance', 'Communication', 'Transactions', 'Revenue']

function Sidebar({ open, onClose, active, setActive }) {
  const [adminOpen, setAdminOpen] = useState(true)
  const go = (label) => { setActive(label); onClose() }

  return (
    <>
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="brand-row">
          <strong className="brand">Voiceon</strong>
          <button className="icon-button close-sidebar" onClick={onClose} aria-label="Close menu"><X size={18} /></button>
        </div>
        <nav>
          <button className={`nav-item ${active === dashboardItem.label ? 'active' : ''}`}
            onClick={() => go(dashboardItem.label)}>
            <dashboardItem.icon size={17} strokeWidth={2} /><span>{dashboardItem.label}</span>
          </button>

          <p className="nav-title">Sections</p>

          <button className="nav-item nav-group-toggle" onClick={() => setAdminOpen((value) => !value)}>
            <Users size={17} strokeWidth={2} /><span>Administrator</span>
            <ChevronDown size={14} className={`nav-arrow ${adminOpen ? 'open' : ''}`} />
          </button>
          {adminOpen && (
            <div className="nav-subitems">
              {adminSubItems.map((label) => (
                <button key={label} className={`nav-item nav-subitem ${active === label ? 'active' : ''}`}
                  onClick={() => go(label)}>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          )}

          {navItems.map(({ label, icon: Icon, dot, arrow }) => (
            <button key={label} className={`nav-item ${active === label ? 'active' : ''}`}
              onClick={() => go(label)}>
              <Icon size={17} strokeWidth={2} /><span>{label}</span>
              {dot && <span className="nav-dot" />}
              {arrow && <ChevronRight size={14} className="nav-arrow" />}
            </button>
          ))}
        </nav>
        <button className="mc-pay-button" onClick={() => alert('Opening MC Pay...')}>
          <span className="mc-pay-icon"><Zap size={13} /></span>
          <span>MC Pay</span>
          <ExternalLink size={14} />
        </button>
      </aside>
      {open && <button className="backdrop" onClick={onClose} aria-label="Close menu" />}
    </>
  )
}

function ServiceCard({ icon: Icon, title, tone }) {
  return (
    <button className="service-card">
      <div className={`service-art ${tone}`}>
        <FileText size={48} strokeWidth={1.5} /><span><Icon size={19} /></span>
      </div>
      <strong>{title}</strong>
    </button>
  )
}

function HomePage() {
  return (
    <>
      <div className="welcome-row">
        <div>
          <h1>Welcome, <em>Alex Carter</em> <span>👋</span></h1>
          <p>Create, clone, and scale AI voices for content, products, and marketing.</p>
        </div>
        <button className="primary-button" onClick={() => alert('Voice creator opened')}>
          <Plus size={18} /> Create Voice
        </button>
      </div>

      <section className="overview-grid">
        <div className="hero-card">
          <div className="hero-label"><Sparkles size={15} /><AudioLines size={15} /><span>AI</span><span>Voice</span></div>
          <h2>Turn Any Script Into<br /><em>Natural Speech</em></h2>
          <p>Dive into trends and product insights</p>
          <button onClick={() => alert('Let’s start creating!')}>Start Creating <ArrowUpRight size={14} /></button>
        </div>
        <div className="panel services-panel">
          <div className="panel-heading">
            <h3>Popular Services</h3>
            <div><button><ChevronLeft /></button><button><ChevronRight /></button></div>
          </div>
          <div className="services">
            <ServiceCard title="Instant speech" icon={AudioLines} tone="indigo" />
            <ServiceCard title="Audiobook" icon={FileAudio} tone="orange" />
            <ServiceCard title="Image & Video" icon={Image} tone="purple" />
          </div>
        </div>
      </section>

      <section className="panel voices-panel">
        <div className="panel-heading left-arrow"><h3>Trending voices <ChevronRight size={17} /></h3></div>
        <div className="voices-grid">
          {voices.map((voice) => (
            <button className="voice-card" key={voice.name}>
              <span className={`voice-orb ${voice.color}`}><i /></span>
              <span className="voice-copy">
                <strong>{voice.name}</strong><small>{voice.kind}</small><small>{voice.language}</small>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="panel usecases-panel">
        <div className="panel-heading">
          <h3>Handpicked For Your Use Case</h3>
          <div><button><ChevronLeft /></button><button><ChevronRight /></button></div>
        </div>
        <div className="usecases">
          {useCases.map((item) => (
            <button className={`usecase-card ${item.type}`} key={item.type}>
              <span className="usecase-art">
                {item.type === 'youtube' && <span className="youtube-mark">▶</span>}
                {item.type === 'trends' && <strong>V3</strong>}
                {item.type === 'tiktok' && <span className="tiktok-mark">♪</span>}
              </span>
              <strong>{item.title}</strong>
              <span className="round-arrow"><ArrowUpRight size={15} /></span>
            </button>
          ))}
        </div>
      </section>
    </>
  )
}

function UserAvatar({ name, variant, size = 'sm' }) {
  const iconSize = size === 'lg' ? 28 : 14
  if (variant?.startsWith('photo')) {
    return <span className={`user-avatar photo ${variant} ${size}`}>{name.slice(0, 1)}</span>
  }
  return (
    <span className={`user-avatar placeholder ${size}`}>
      <UserRound size={iconSize} strokeWidth={2} />
    </span>
  )
}

function Field({ label, children }) {
  return (
    <div className="profile-field">
      <span>{label}</span>
      <strong>{children}</strong>
    </div>
  )
}

function UserCard({ user, onBack }) {
  const [tab, setTab] = useState('Summary')
  const profile = getProfile(user)

  return (
    <section className="panel user-card">
      <div className="user-card-nav">
        <button className="text-link" onClick={onBack}><ChevronLeft size={15} /> Back to list</button>
        <div className="user-card-actions">
          <button className="text-link"><RefreshCw size={14} /> To company</button>
          <button className="text-link"><Plus size={14} /> Add channel</button>
          <button className="text-link"><Pencil size={14} /> Edit data</button>
          <button className="text-link"><Clock size={14} /> History</button>
          <button className="text-link"><MessageCircle size={14} /> Chat</button>
        </div>
      </div>

      <div className="user-card-hero">
        <UserAvatar name={profile.name} variant={profile.avatar} size="lg" />
        <div className="user-card-identity">
          <div className="user-card-name">
            <h2>{profile.name}</h2>
            {profile.kyc && <span className={`kyc-pill ${profile.kyc.toLowerCase()}`}>{profile.kyc}</span>}
          </div>
          <p className="user-card-meta">
            <span className="email-verified">
              {profile.email}
              {profile.kyc === 'APPROVED' && <Check size={13} />}
            </span>
            <span className="profile-tags">
              {profile.tags.map((tag) => <span key={tag} className="profile-tag">{tag}</span>)}
            </span>
          </p>
        </div>
        <div className="user-card-balance">
          <span>{profile.accountLabel}</span>
          <strong>{profile.balance}</strong>
        </div>
      </div>

      <div className="user-card-tabs">
        {cardTabs.map((item) => (
          <button key={item} className={tab === item ? 'active' : ''} onClick={() => setTab(item)}>{item}</button>
        ))}
      </div>

      {tab === 'Summary' ? (
        <>
          <div className="profile-grid">
            <Field label="Gender">{profile.gender}</Field>
            <Field label="Birth date">{profile.birthDate}</Field>
            <Field label="Country">{profile.country}</Field>
            <Field label="Date of ICA signing">{profile.icaDate}</Field>
            <Field label="Position">{profile.position}</Field>
          </div>

          <div className="profile-section">
            <div className="profile-section-head">
              <h3>Account details and settings</h3>
              <button className="ghost-danger">Disable 2FA</button>
            </div>
            <div className="profile-grid">
              <Field label="Authorization via social networks">{profile.socialAuth}</Field>
              <Field label="Account password">{profile.password}</Field>
              <Field label="Two-Factor Authentication">
                {profile.twoFactor ? (
                  <span className="tf-value">{profile.twoFactor} <Check size={13} /></span>
                ) : '—'}
              </Field>
            </div>
          </div>

          <div className="profile-grid activity-grid">
            <Field label="Registration date">{profile.registered}</Field>
            <Field label="Last action">
              <span className="action-cell">
                {profile.lastAction}
                {profile.device === 'mobile' ? <Smartphone size={14} /> : <Monitor size={14} />}
              </span>
            </Field>
            <Field label="Last action in the app">
              <span className="action-cell">
                {profile.lastActionApp}
                <Smartphone size={14} />
              </span>
            </Field>
          </div>

          <div className="profile-split">
            <div className="profile-block">
              <div className="profile-section-head">
                <h3>Roles</h3>
                <button className="icon-button" aria-label="Edit roles"><Pencil size={14} /></button>
              </div>
              {profile.role ? <span className="role-pill">{profile.role}</span> : <p className="muted">No roles assigned</p>}
            </div>
            <div className="profile-block">
              <div className="profile-section-head">
                <h3>Fintech</h3>
                <button className="icon-button" aria-label="Edit fintech"><Pencil size={14} /></button>
              </div>
              <p className="muted">No fintech settings</p>
            </div>
          </div>
        </>
      ) : (
        <div className="profile-empty">No {tab.toLowerCase()} data yet.</div>
      )}
    </section>
  )
}

function UsersPage() {
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return users
    return users.filter((user) =>
      [user.name, user.username, user.email, user.role].filter(Boolean).some((value) =>
        value.toLowerCase().includes(q),
      ),
    )
  }, [query])

  const selected = users.find((user) => user.id === selectedId)
  const detailOpen = Boolean(selected)

  return (
    <div className="users-page">
      <div className="users-toolbar">
        <label className="users-search">
          <Search size={16} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Username, channel or email"
          />
        </label>
        <button className="icon-button users-filter" aria-label="Filters">
          <SlidersHorizontal size={16} />
        </button>
        <div className="users-toolbar-actions">
          <button className="kyc-button">
            <ScanFace size={15} />
            Checking KYC
            <span>9</span>
          </button>
          <button className="icon-button toolbar-outline-button" aria-label="Export"><Download size={16} /></button>
          <button className="icon-button toolbar-outline-button" aria-label="Columns"><Columns3 size={16} /></button>
        </div>
      </div>

      <section className="panel users-panel">
        <div className="users-table-wrap">
          <table className="users-table">
            <thead>
              <tr>
                <th>
                  <span className="th-user">
                    User
                    <small>{filtered.length.toLocaleString('en-US')}</small>
                  </span>
                </th>
                <th>email</th>
                <th>Role</th>
                <th>KYC status</th>
                <th>
                  <span className="th-sort">Last action <ArrowDownUp size={11} /></span>
                </th>
                <th>
                  <span className="th-sort">Registration date <ArrowDownUp size={11} /></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr
                  key={user.id}
                  className={selectedId === user.id ? 'selected' : ''}
                  onClick={() => setSelectedId(user.id)}
                >
                  <td>
                    <div className="user-cell">
                      <UserAvatar name={user.name} variant={user.avatar} />
                      <div>
                        <strong>{user.name}</strong>
                        <small>{user.username}</small>
                      </div>
                    </div>
                  </td>
                  <td className="email-cell">{user.email}</td>
                  <td>
                    {user.role ? <span className="role-pill">{user.role}</span> : <span className="empty-cell">—</span>}
                  </td>
                  <td>
                    {user.kyc ? (
                      <span className={`kyc-pill ${user.kyc.toLowerCase()}`}>{user.kyc}</span>
                    ) : (
                      <span className="empty-cell">—</span>
                    )}
                  </td>
                  <td>
                    <span className="action-cell">
                      {user.lastAction}
                      {user.device === 'mobile'
                        ? <Smartphone size={14} strokeWidth={2} />
                        : <Monitor size={14} strokeWidth={2} />}
                    </span>
                  </td>
                  <td>{user.registered}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="users-empty">No users match your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {detailOpen && (
        <div className="user-drawer-backdrop" onMouseDown={() => setSelectedId(null)}>
          <div className="user-drawer" onMouseDown={(event) => event.stopPropagation()}>
            <UserCard user={selected} onBack={() => setSelectedId(null)} />
          </div>
        </div>
      )}
    </div>
  )
}

function PromotionField({ label, placeholder, type = 'select', icon: Icon }) {
  return (
    <label className="promotion-field">
      <span>{label}</span>
      <div className="promotion-input">
        {Icon && <Icon size={16} />}
        <input placeholder={placeholder} readOnly />
        {type === 'select' && <ChevronDown size={14} />}
      </div>
    </label>
  )
}

function PromotionUpload({ title, size }) {
  return (
    <div className="promotion-upload-group">
      <span>{title}</span>
      <button className="promotion-upload" type="button">
        <ImagePlus size={27} strokeWidth={1.8} />
        <small>Photos up to 10 MB, .jpeg, .jpg, .png formats.</small>
        <small>Max number of photos is 1. Required image size: {size}</small>
        <b>Add Files</b>
      </button>
    </div>
  )
}

function PromotionModal({ promotion, onClose }) {
  const isEditing = Boolean(promotion)
  const [title, setTitle] = useState(promotion?.name ?? '')
  const [reminder, setReminder] = useState(false)

  return (
    <div className="promotion-modal-backdrop" onMouseDown={onClose}>
      <aside className="promotion-modal" onMouseDown={(event) => event.stopPropagation()}>
        <header>
          <h2>{isEditing ? 'Edit promotion' : 'Create a promotion'}</h2>
          <button className="icon-button" onClick={onClose} aria-label="Close promotion"><X size={18} /></button>
        </header>

        <div className="promotion-form">
          <section className="promotion-form-section">
            <h3>Add segment by users</h3>
            <div className="promotion-control-with-button">
              <div className="promotion-input">
                <input placeholder="Usernames or email addresses" readOnly />
                <ChevronDown size={14} />
              </div>
              <button className="outline-icon-button" type="button"><FilePlus2 size={18} /></button>
            </div>
          </section>

          <section className="promotion-form-section">
            <h3>Add segment label and CSP</h3>
            <PromotionField label="Label" placeholder="Select labels" />
            <PromotionField label="CSP" placeholder="Select a CSP" />
            <PromotionField label="Exclude CSP" placeholder="Select a CSP" />
            <div className="promotion-control-with-button">
              <PromotionField label="Narrow segment by country" placeholder="Users from selected countries in the segment will…" />
              <button className="outline-icon-button field-side-button" type="button"><FilePlus2 size={18} /></button>
            </div>
          </section>

          <section className="promotion-form-section promotion-form-grid">
            <PromotionField label="Serial number of the promotion" placeholder={String(promotion?.id ?? promotions.length + 1)} type="input" />
            <PromotionField label="Platforms" placeholder="Where the promotion will show" />
            <PromotionField label="Button leads to" placeholder={promotion?.leadsTo ?? 'Balance'} />
            <PromotionField label="End date (optional)" placeholder={promotion?.endDate === '—' ? 'End of the promotion' : promotion?.endDate ?? 'End of the promotion'} type="input" icon={CalendarDays} />
          </section>

          <section className="promotion-form-section reminder-row">
            <p>File with examples of segments and transitions</p>
            <label className="toggle-row">
              <input type="checkbox" checked={reminder} onChange={(event) => setReminder(event.target.checked)} />
              <span className="toggle" />
              Add a reminder
              <small>?</small>
            </label>
          </section>

          <section className="promotion-form-section promotion-copy">
            <div className="language-tabs">
              {['EN', 'RU', 'ES', 'PT', 'TH', 'AR', 'VI'].map((language) => <button className={language === 'EN' ? 'active' : ''} key={language}>{language}</button>)}
            </div>
            <label className="promotion-field">
              <span>Promotion title <small>?</small></span>
              <input className="standalone-input" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Recommended length is up to 95 characters" />
            </label>
            <label className="promotion-field">
              <span>Promotion text in the modal window</span>
              <textarea placeholder="Tell users about the promotion" defaultValue={isEditing ? 'Discover this offer and unlock more opportunities in your Voiceon workspace.' : ''} />
              <div className="editor-toolbar">Normal ↕　≡　≣　☰　❞　<b>B</b>　<i>I</i>　<u>U</u>　☷　🔗　▧</div>
            </label>
            <label className="promotion-field">
              <span>Text on a button in the modal window</span>
              <input className="standalone-input" placeholder="Recommended length is up to 25 characters" defaultValue={isEditing ? 'Learn more' : ''} />
            </label>
          </section>

          <section className="promotion-form-section promotion-assets">
            <PromotionUpload title="Banner for web version" size="720x600 px" />
            <PromotionUpload title="Banner for app" size="1372x440 px" />
            <PromotionUpload title="Image for modal window" size="1744x800 px" />
          </section>
        </div>

        <footer>
          <button className="primary-button" onClick={onClose}>{isEditing ? 'Save changes' : 'Publish'}</button>
          <button className="secondary-button" onClick={onClose}>Save draft</button>
        </footer>
      </aside>
    </div>
  )
}

function PromotionsPage() {
  const [query, setQuery] = useState('')
  const [editing, setEditing] = useState(undefined)
  const [modalOpen, setModalOpen] = useState(false)

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim()
    if (!normalized) return promotions
    return promotions.filter((promotion) => promotion.name.toLowerCase().includes(normalized))
  }, [query])

  const openPromotion = (promotion) => {
    setEditing(promotion)
    setModalOpen(true)
  }

  return (
    <div className="promotions-page">
      <div className="promotions-heading">
        <h1>Promotions</h1>
        <button className="primary-button" onClick={() => openPromotion(undefined)}><Plus size={17} /> New promotion</button>
      </div>

      <div className="promotions-toolbar">
        <label className="users-search">
          <Search size={16} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Banner name" />
        </label>
        <button className="icon-button users-filter" aria-label="Filters"><SlidersHorizontal size={16} /></button>
        <button className="archive-button"><Archive size={16} /> Archive</button>
      </div>

      <section className="panel promotions-panel">
        <div className="promotions-table-wrap">
          <table className="promotions-table">
            <thead>
              <tr>
                <th><span className="th-user">Banner name <small>{promotions.length}</small></span></th>
                <th>Segment</th>
                <th>Countries</th>
                <th>Button leads to</th>
                <th><span className="th-sort">End date <ArrowDownUp size={11} /></span></th>
                <th><span className="th-sort">Date of last update <ArrowDownUp size={11} /></span></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((promotion) => (
                <tr key={promotion.id} onClick={() => openPromotion(promotion)}>
                  <td><strong>{promotion.name}</strong></td>
                  <td><span className="role-pill">{promotion.segment}</span></td>
                  <td><span className="role-pill">{promotion.countries}</span></td>
                  <td>{promotion.leadsTo}</td>
                  <td>{promotion.endDate}</td>
                  <td>{promotion.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {modalOpen && <PromotionModal promotion={editing} onClose={() => setModalOpen(false)} />}
    </div>
  )
}

function PlaceholderPage({ title }) {
  return (
    <div className="welcome-row">
      <div>
        <h1>{title}</h1>
        <p>This section is coming soon in Voiceon.</p>
      </div>
    </div>
  )
}

function App() {
  const [active, setActive] = useState(dashboardItem.label)
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState(false)

  return (
    <div className="app-shell">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} active={active} setActive={setActive} />
      <main className="main">
        <header className="topbar">
          <div className="workspace">
            <button className="icon-button menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
            {adminSubItems.includes(active) ? (
              <span className="header-breadcrumb">Administrator <ChevronRight size={12} /> <strong>{active}</strong></span>
            ) : (
              <strong>{active === dashboardItem.label ? 'My Workspace' : active}</strong>
            )}
          </div>
          <label className="search">
            <Search size={18} /><input placeholder="Search" /><kbd>⌘ K</kbd>
          </label>
          <div className="top-actions">
            <button className="icon-button notification" onClick={() => setNotice(!notice)}><Bell size={19} /><span /></button>
            <button className="icon-button"><Settings size={19} /></button>
            <button className="language">EN</button>
            <button className="avatar" aria-label="Profile">AC</button>
          </div>
          {notice && <div className="notice-popover">You're all caught up.</div>}
        </header>

        <div className={`content ${['Users', 'Promotions'].includes(active) ? 'content-wide' : ''}`}>
          {active === dashboardItem.label && <HomePage />}
          {active === 'Users' && <UsersPage />}
          {active === 'Promotions' && <PromotionsPage />}
          {![dashboardItem.label, 'Users', 'Promotions'].includes(active) && <PlaceholderPage title={active} />}
        </div>
      </main>
    </div>
  )
}

export default App
