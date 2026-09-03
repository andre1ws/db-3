import { useEffect, useMemo, useState } from 'react'
import {
  Archive, ArrowDown, ArrowDownUp, ArrowUp, BadgePercent, BarChart3, Bell, CalendarDays,
  Check, ChevronDown, ChevronLeft, ChevronRight, CircleCheck, CircleDollarSign, Clock, Columns3, Download,
  ExternalLink, FilePlus2, FileText, Handshake, ImagePlus, Landmark,
  Menu, MessageCircle, MessagesSquare, Monitor, Pencil, PlaySquare, Plus,
  Receipt, RefreshCw, ScanFace, Search, Settings, SlidersHorizontal, Smartphone,
  Trash2, TrendingUp, UserRound, Users, Video, X, Zap,
} from 'lucide-react'
import './App.css'

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

const notifications = [
  {
    id: 1, sender: 'Vladislava Kotova', email: 'v.kotova@mediacube.io', avatar: 'default',
    segment: 'Users', push: true, sent: '2026-07-02',
    title: 'Important Update: Withdrawal Fee Changes Effective July 6, 2026',
    preview: 'Dear User, We are writing to inform you of an upcoming change to the fee for fund withdrawals from your balance.',
  },
  {
    id: 2, sender: 'Andrei Vasileuski', email: 'andre@mediacube.io', avatar: 'default',
    segment: 'Users', push: true, sent: '2026-07-01',
    title: 'Perks and Benefits in Garna',
    preview: 'We know how much of your budget goes toward work tools, so we’ve negotiated exclusive deals for you.',
  },
  {
    id: 3, sender: 'Maria Lapchik G', email: 'lapm@mediacube.io', avatar: 'photo-d',
    segment: 'Users', push: false, sent: '2026-06-26',
    title: 'Hi! We are delighted to welcome you to the Garna platform!',
    preview: 'Your profile has been successfully registered. Your account is now officially linked to Legal Entity.',
  },
  {
    id: 4, sender: 'Maria Lapchik G', email: 'lapm@mediacube.io', avatar: 'photo-d',
    segment: 'Users', push: false, sent: '2026-06-26',
    title: 'Hi! We are delighted to welcome you to the Garna platform!',
    preview: 'Your profile has been successfully registered. Your account is now officially linked to Legal Entity.',
  },
  {
    id: 5, sender: 'Maria Lapchik G', email: 'lapm@mediacube.io', avatar: 'photo-d',
    segment: 'Users', push: false, sent: '2026-06-26',
    title: 'Добрый день! Рады приветствовать вас на платформе Garna!',
    preview: 'Ваш профиль успешно зарегистрирован. Мы рады сообщить, что ваш аккаунт официально привязан к юрлицу.',
  },
  {
    id: 6, sender: 'Maria Lapchik G', email: 'lapm@mediacube.io', avatar: 'photo-d',
    segment: 'Users', push: false, sent: '2026-06-26',
    title: 'Добрый день! Рады приветствовать вас на платформе Garna!',
    preview: 'Ваш профиль успешно зарегистрирован. Мы рады сообщить, что ваш аккаунт официально привязан к юрлицу.',
  },
  {
    id: 7, sender: 'Alesia Marchuk', email: 'almar@mediacube.io', avatar: 'photo-c',
    segment: 'Users', push: true, sent: '2026-06-23',
    title: 'Scheduled Maintenance',
    preview: 'On June 24, from 08:00 to 13:00 UTC, crypto withdrawals will be unavailable. This is a planned maintenance window.',
  },
  {
    id: 8, sender: 'KaterinaQ Kot', email: 'em@mediacube.io', avatar: 'photo-b',
    segment: 'Users', push: false, sent: '2026-05-26',
    title: 'e',
    preview: 'тест',
  },
  {
    id: 9, sender: 'Evgeniia Frolenkova', email: 'fro@mediacube.io', avatar: 'photo-a',
    segment: 'Users', push: true, sent: '2026-05-14',
    title: 'Your Advance is waiting — check it now',
    preview: 'Get an Advance for up to 12 months — calculate amount in MC Pay',
  },
  {
    id: 10, sender: 'Alesia Marchuk', email: 'almar@mediacube.io', avatar: 'photo-c',
    segment: 'Users', push: true, sent: '2026-05-12',
    title: 'Crypto wallet terms update',
    preview: 'Starting May 15, 2026, an inactivity fee of 200 USD/month will apply to wallets with no transactions.',
  },
  {
    id: 11, sender: 'Maksim Trafimau', email: 'maxtro@mediacube.io', avatar: 'default',
    segment: 'CSP', push: false, sent: '2026-05-08',
    title: 'YouTube payout information update',
    preview: 'Due to temporary delays in receiving funds from YouTube and completing the required checks, payouts may arrive later.',
  },
  {
    id: 12, sender: 'Alesia Marchuk', email: 'almar@mediacube.io', avatar: 'photo-c',
    segment: 'Users', push: true, sent: '2026-05-06',
    title: 'Изменения выплат в RUB',
    preview: 'В связи с санкционными ограничениями с 14 мая прекращаются выплаты на счета в российских банках.',
  },
  {
    id: 13, sender: 'Vladislav Filipovich G', email: 'filv@mediacube.io', avatar: 'photo-b',
    segment: 'Users', push: false, sent: '2026-05-05',
    title: 'Crypto withdrawal fee update',
    preview: 'Starting May 1, 2026, the crypto withdrawal fee will increase by a fixed 5 USD on top of the network fee.',
  },
  {
    id: 14, sender: 'Vladislav Filipovich G', email: 'filv@mediacube.io', avatar: 'photo-b',
    segment: 'Users', push: false, sent: '2026-05-05',
    title: 'We’d like to share a few important updates with you',
    preview: 'Changes in the list of banks available for withdrawals in Russia and crypto withdrawal fee update.',
  },
  {
    id: 15, sender: 'Vladislav Filipovich G', email: 'filv@mediacube.io', avatar: 'photo-b',
    segment: 'Users', push: false, sent: '2026-05-05',
    title: 'We’d like to share a few important updates with you',
    preview: 'Changes in Belarusian banking operations and crypto withdrawal fee update',
  },
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

const filterConditions = [
  { key: 'empty', label: 'Empty' },
  { key: 'is', label: 'Is' },
  { key: 'is-not', label: 'Is not' },
]

const titleCase = (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()

const isBlank = (value) =>
  value == null || value === '' || value === '—' || (Array.isArray(value) && value.length === 0)

const filterFields = [
  { key: 'role', label: 'Role', read: (user) => user.role },
  { key: 'kyc', label: 'KYC status', read: (user) => user.kyc, format: titleCase },
  { key: 'country', label: 'Country', read: (user) => getProfile(user).country },
  { key: 'position', label: 'Position', read: (user) => getProfile(user).position },
  { key: 'device', label: 'Last action device', read: (user) => user.device, format: titleCase },
  { key: 'tag', label: 'Label', read: (user) => getProfile(user).tags },
  { key: 'registered', label: 'Registration year', read: (user) => user.registered.slice(-4) },
].map((field) => {
  const values = new Set()
  users.forEach((user) => {
    const raw = field.read(user)
    const items = Array.isArray(raw) ? raw : [raw]
    items.forEach((item) => { if (!isBlank(item)) values.add(item) })
  })
  return {
    ...field,
    options: [...values].sort().map((value) => ({
      value,
      label: field.format ? field.format(value) : value,
    })),
  }
})

function matchesFilter(user, filter) {
  const field = filterFields.find((item) => item.key === filter.field)
  if (!field) return true
  const raw = field.read(user)
  if (filter.condition === 'empty') return isBlank(raw)
  const hit = Array.isArray(raw) ? raw.includes(filter.value) : raw === filter.value
  return filter.condition === 'is' ? hit : !hit
}

function describeFilter(filter) {
  const field = filterFields.find((item) => item.key === filter.field)
  const option = field?.options.find((item) => item.value === filter.value)
  return {
    condition: filterConditions.find((item) => item.key === filter.condition)?.label ?? '',
    field: field?.label ?? filter.field,
    value: option?.label ?? filter.value,
  }
}

const sameFilters = (a, b) =>
  a.length === b.length &&
  a.every((item, index) =>
    item.field === b[index].field && item.condition === b[index].condition && item.value === b[index].value)

const PRESETS_KEY = 'voiceon.users.filter-presets'

function loadPresets() {
  try {
    const raw = localStorage.getItem(PRESETS_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function Sidebar({ open, onClose, active, setActive }) {
  const [adminOpen, setAdminOpen] = useState(true)
  const go = (label) => { setActive(label); onClose() }

  return (
    <>
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="brand-row">
          <strong className="brand">Dashboard</strong>
          <button className="icon-button close-sidebar" onClick={onClose} aria-label="Close menu"><X size={18} /></button>
        </div>
        <nav>
          <p className="nav-title">Sections</p>

          <button className="nav-item nav-group-toggle" onClick={() => setAdminOpen((value) => !value)}>
            <Users size={17} strokeWidth={1.5} /><span>Administrator</span>
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
              <Icon size={17} strokeWidth={1.5} /><span>{label}</span>
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
        <div className="profile-cards">
          <div className="profile-card">
            <h3>Personal information</h3>
            <div className="profile-grid">
              <Field label="Gender">{profile.gender}</Field>
              <Field label="Birth date">{profile.birthDate}</Field>
              <Field label="Country">{profile.country}</Field>
              <Field label="Date of ICA signing">{profile.icaDate}</Field>
              <Field label="Position">{profile.position}</Field>
            </div>
          </div>

          <div className="profile-card">
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

          <div className="profile-card">
            <h3>Activity</h3>
            <div className="profile-grid">
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
          </div>

          <div className="profile-card">
            <div className="profile-section-head">
              <h3>Roles</h3>
              <button className="icon-button" aria-label="Edit roles"><Pencil size={14} /></button>
            </div>
            {profile.role ? <span className="role-pill">{profile.role}</span> : <p className="muted">No roles assigned</p>}
          </div>

          <div className="profile-card">
            <div className="profile-section-head">
              <h3>Fintech</h3>
              <button className="icon-button" aria-label="Edit fintech"><Pencil size={14} /></button>
            </div>
            <p className="muted">No fintech settings</p>
          </div>
        </div>
      ) : (
        <div className="profile-empty">No {tab.toLowerCase()} data yet.</div>
      )}
    </section>
  )
}

function FilterSelect({ value, onChange, placeholder, options, disabled }) {
  return (
    <div className={`filter-select ${disabled ? 'disabled' : ''}`}>
      <select value={value} disabled={disabled} onChange={(event) => onChange(event.target.value)}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <ChevronDown size={14} />
    </div>
  )
}

function FiltersPanel({
  draft, field, condition, value, activePreset,
  onFieldChange, onConditionChange, onValueChange, onRemove, onClear, onClose,
  onApply, applyDisabled, presetName, onPresetNameChange, onSavePreset, onDeletePreset,
}) {
  const currentField = filterFields.find((item) => item.key === field)
  const valueDisabled = !currentField || condition === 'empty'

  return (
    <section className="filters-panel">
      <header className="filters-head">
        <h3>Filters {draft.length > 0 && <small>{draft.length}</small>}</h3>
        <button className="icon-button" onClick={onClose} aria-label="Close filters"><X size={16} /></button>
      </header>

      <div className="filters-row">
        <label className="filters-control">
          <span>Field</span>
          <FilterSelect
            value={field}
            onChange={onFieldChange}
            placeholder="Select a field"
            options={filterFields.map((item) => ({ value: item.key, label: item.label }))}
          />
        </label>

        <div className="filters-control">
          <span>Condition</span>
          <div className="segmented">
            {filterConditions.map((item) => (
              <button
                key={item.key}
                className={condition === item.key ? 'active' : ''}
                onClick={() => onConditionChange(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <label className="filters-control">
          <span>Value</span>
          <FilterSelect
            value={value}
            onChange={onValueChange}
            placeholder={condition === 'empty' ? 'Not needed for “Empty”' : 'Select a value'}
            options={currentField?.options ?? []}
            disabled={valueDisabled}
          />
        </label>
      </div>

      {draft.length > 0 && (
        <div className="filters-added">
          <div className="filters-chip-list">
            {draft.map((item) => {
              const parts = describeFilter(item)
              return (
                <span className="filter-chip" key={item.id}>
                  <b>{parts.condition}</b>
                  <span>{parts.field}{item.condition !== 'empty' && <strong>: {parts.value}</strong>}</span>
                  <button onClick={() => onRemove(item.id)} aria-label="Remove filter"><X size={11} /></button>
                </span>
              )
            })}
          </div>
          <button className="text-link filters-clear" onClick={onClear}>Clear all</button>
        </div>
      )}

      <footer className="filters-footer">
        <button className="primary-button" onClick={onApply} disabled={applyDisabled}>Apply filters</button>
        {activePreset && (
          <button className="ghost-danger" onClick={onDeletePreset}>
            <Trash2 size={13} /> Delete “{activePreset.name}”
          </button>
        )}
        <div className="filters-preset">
          <span>Save as preset</span>
          <input
            value={presetName}
            onChange={(event) => onPresetNameChange(event.target.value)}
            placeholder="Preset name"
          />
          <button
            className="secondary-button"
            onClick={onSavePreset}
            disabled={!presetName.trim() || draft.length === 0}
          >
            Save
          </button>
        </div>
      </footer>
    </section>
  )
}

function UsersPage() {
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)
  const [panelOpen, setPanelOpen] = useState(false)
  const [draft, setDraft] = useState([])
  const [applied, setApplied] = useState([])
  const [field, setField] = useState('')
  const [condition, setCondition] = useState('is')
  const [value, setValue] = useState('')
  const [presets, setPresets] = useState(loadPresets)
  const [activePresetId, setActivePresetId] = useState(null)
  const [presetName, setPresetName] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem(PRESETS_KEY, JSON.stringify(presets))
    } catch {
      // storage unavailable — presets stay in memory for this session
    }
  }, [presets])

  const addFilter = (nextField, nextCondition, nextValue) => {
    setDraft((current) => {
      const exists = current.some((item) =>
        item.field === nextField && item.condition === nextCondition && item.value === nextValue)
      if (exists) return current
      const id = `${nextField}-${nextCondition}-${nextValue}-${current.length}-${Date.now()}`
      return [...current, { id, field: nextField, condition: nextCondition, value: nextValue }]
    })
  }

  const handleFieldChange = (next) => {
    setField(next)
    setValue('')
    if (next && condition === 'empty') addFilter(next, 'empty', '')
  }

  const handleConditionChange = (next) => {
    setCondition(next)
    setValue('')
    if (field && next === 'empty') addFilter(field, 'empty', '')
  }

  const handleValueChange = (next) => {
    if (!next) return
    addFilter(field, condition, next)
  }

  const togglePreset = (preset) => {
    if (activePresetId === preset.id) {
      setActivePresetId(null)
      setDraft([])
      setApplied([])
      return
    }
    setActivePresetId(preset.id)
    setDraft(preset.filters)
    setApplied(preset.filters)
    setPanelOpen(true)
  }

  const savePreset = () => {
    const preset = { id: `preset-${Date.now()}`, name: presetName.trim(), filters: draft }
    setPresets((current) => [...current, preset])
    setActivePresetId(preset.id)
    setPresetName('')
  }

  const deletePreset = (id) => {
    setPresets((current) => current.filter((item) => item.id !== id))
    if (activePresetId === id) setActivePresetId(null)
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return users.filter((user) => {
      const matchesQuery = !q || [user.name, user.username, user.email, user.role]
        .filter(Boolean)
        .some((item) => item.toLowerCase().includes(q))
      return matchesQuery && applied.every((filter) => matchesFilter(user, filter))
    })
  }, [query, applied])

  const selected = users.find((user) => user.id === selectedId)
  const detailOpen = Boolean(selected)
  const activePreset = presets.find((item) => item.id === activePresetId)

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
        <button
          className={`icon-button users-filter ${panelOpen || applied.length > 0 ? 'active' : ''}`}
          onClick={() => setPanelOpen((current) => !current)}
          aria-label="Filters"
        >
          <SlidersHorizontal size={16} />
          {applied.length > 0 && <span className="filter-count">{applied.length}</span>}
        </button>
        {presets.map((preset) => (
          <span key={preset.id} className={`preset-chip ${activePresetId === preset.id ? 'active' : ''}`}>
            <button className="preset-chip-label" onClick={() => togglePreset(preset)}>{preset.name}</button>
            <button
              className="preset-chip-remove"
              onClick={() => deletePreset(preset.id)}
              aria-label={`Delete preset ${preset.name}`}
            >
              <X size={11} />
            </button>
          </span>
        ))}
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

      {panelOpen && (
        <FiltersPanel
          draft={draft}
          field={field}
          condition={condition}
          value={value}
          activePreset={activePreset}
          onFieldChange={handleFieldChange}
          onConditionChange={handleConditionChange}
          onValueChange={handleValueChange}
          onRemove={(id) => setDraft((current) => current.filter((item) => item.id !== id))}
          onClear={() => setDraft([])}
          onClose={() => setPanelOpen(false)}
          onApply={() => setApplied(draft)}
          applyDisabled={sameFilters(draft, applied)}
          presetName={presetName}
          onPresetNameChange={setPresetName}
          onSavePreset={savePreset}
          onDeletePreset={() => deletePreset(activePresetId)}
        />
      )}

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

function formatSentDate(value) {
  return new Date(value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

function NotificationsPage({ draft, setDraft }) {
  const [query, setQuery] = useState('')
  const [descending, setDescending] = useState(true)

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    const matched = q
      ? notifications.filter((item) =>
        [item.sender, item.email, item.title, item.preview].some((field) => field.toLowerCase().includes(q)))
      : notifications
    return [...matched].sort((a, b) =>
      descending ? b.sent.localeCompare(a.sent) : a.sent.localeCompare(b.sent))
  }, [query, descending])

  return (
    <div className="users-page">
      <div className="users-toolbar">
        <label className="users-search">
          <Search size={16} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Username or email"
          />
        </label>
        <button className="icon-button users-filter" aria-label="Filters">
          <SlidersHorizontal size={16} />
        </button>
        <button className="archive-button notifications-archive"><Archive size={16} /> Archive</button>
      </div>

      <section className="panel users-panel">
        <div className="users-table-wrap">
          <table className="users-table notifications-table">
            <thead>
              <tr>
                <th>
                  <span className="th-user">
                    Sender
                    <small>{visible.length.toLocaleString('en-US')}</small>
                  </span>
                </th>
                <th>Segment</th>
                <th>Push</th>
                <th>Message</th>
                <th>
                  <button className="th-sort th-sort-button" onClick={() => setDescending((value) => !value)}>
                    {descending ? <ArrowDown size={12} /> : <ArrowUp size={12} />} Sent
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {visible.map((item) => (
                <tr key={item.id} className="clickable-row" onClick={() => setDraft(item)}>
                  <td>
                    <div className="user-cell">
                      <UserAvatar name={item.sender} variant={item.avatar} />
                      <div>
                        <strong>{item.sender}</strong>
                        <small>{item.email}</small>
                      </div>
                    </div>
                  </td>
                  <td><span className="role-pill">{item.segment}</span></td>
                  <td>
                    {item.push
                      ? <CircleCheck size={17} strokeWidth={1.5} className="push-sent" />
                      : <span className="empty-cell">—</span>}
                  </td>
                  <td>
                    <div className="message-cell">
                      <strong>{item.title}</strong>
                      <small>{item.preview}</small>
                    </div>
                  </td>
                  <td className="sent-cell">{formatSentDate(item.sent)}</td>
                </tr>
              ))}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={5} className="users-empty">No notifications match your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {draft !== undefined && (
        <NotificationModal notification={draft} onClose={() => setDraft(undefined)} />
      )}
    </div>
  )
}

const notificationLanguages = ['EN', 'RU', 'ES', 'PT', 'TH', 'AR', 'VI']
const notificationChannels = ['Notification', 'Push']
const notificationVariables = '{user_name}, {credits_amount}, {funds_amount}, {balance_amount}'
const emptyContent = { title: '', text: '' }

function CountedField({ label, value, onChange, placeholder, limit, rows }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <div className="counted-field">
        <textarea
          value={value}
          rows={rows}
          maxLength={limit}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        />
        <small>{value.length}/{limit}</small>
      </div>
      <p className="field-hint">Variables – {notificationVariables}</p>
    </label>
  )
}

function NotificationModal({ notification, onClose }) {
  const isEditing = Boolean(notification)
  const [language, setLanguage] = useState('EN')
  const [channel, setChannel] = useState('Notification')
  const [content, setContent] = useState(() => (
    notification
      ? { 'EN-Notification': { title: notification.title, text: notification.preview } }
      : {}
  ))
  const [articleFormat, setArticleFormat] = useState(false)
  const [addButton, setAddButton] = useState(false)
  const [important, setImportant] = useState(false)

  const key = `${language}-${channel}`
  const draft = content[key] ?? emptyContent
  const patch = (changes) => setContent((current) => ({ ...current, [key]: { ...draft, ...changes } }))
  const incomplete = !draft.title.trim()

  return (
    <div className="side-modal-backdrop" onMouseDown={onClose}>
      <aside className="side-modal" onMouseDown={(event) => event.stopPropagation()}>
        <header>
          <h2>{isEditing ? 'Edit notification or article' : 'Create a notification or article'}</h2>
          <button className="icon-button" onClick={onClose} aria-label="Close notification"><X size={18} /></button>
        </header>

        <div className="modal-form">
          <section className="modal-section">
            <h3>Add segment by users</h3>
            <div className="form-row-with-button">
              <div className="form-input">
                <input placeholder="Usernames or email addresses" readOnly />
                <ChevronDown size={14} />
              </div>
              <button className="outline-icon-button" type="button"><FilePlus2 size={18} /></button>
            </div>
          </section>

          <section className="modal-section">
            <h3>Add segment label and CSP</h3>
            <FormField label="Label" placeholder="Select labels" />
            <FormField label="CSP" placeholder="Select a CSP" />
            <FormField label="Exclude CSP" placeholder="Select a CSP" />
            <div className="form-row-with-button">
              <FormField label="Narrow segment by country" placeholder="Users from selected countries in the segment will see the content" />
              <button className="outline-icon-button field-side-button" type="button"><FilePlus2 size={18} /></button>
            </div>
          </section>

          <section className="modal-section">
            <div className="language-tabs">
              {notificationLanguages.map((item) => (
                <button key={item} className={item === language ? 'active' : ''} onClick={() => setLanguage(item)}>
                  {item}
                </button>
              ))}
            </div>
            <div className="segmented channel-tabs">
              {notificationChannels.map((item) => (
                <button key={item} className={item === channel ? 'active' : ''} onClick={() => setChannel(item)}>
                  {item}
                </button>
              ))}
            </div>

            <CountedField
              label={`${channel} title`}
              value={draft.title}
              onChange={(value) => patch({ title: value })}
              placeholder="Recommended length is up to 70 characters"
              limit={100}
              rows={2}
            />
            <CountedField
              label={`${channel} text`}
              value={draft.text}
              onChange={(value) => patch({ text: value })}
              placeholder="Recommended length is up to 200 characters"
              limit={500}
              rows={3}
            />

            <div className="toggle-list">
              <label className="toggle-row">
                <input type="checkbox" checked={articleFormat} onChange={(event) => setArticleFormat(event.target.checked)} />
                <span className="toggle" />
                Article format
              </label>
              <label className="toggle-row">
                <input type="checkbox" checked={addButton} onChange={(event) => setAddButton(event.target.checked)} />
                <span className="toggle" />
                Add a button
              </label>
              <label className="toggle-row">
                <input type="checkbox" checked={important} onChange={(event) => setImportant(event.target.checked)} />
                <span className="toggle" />
                Mark notification as important
              </label>
            </div>
          </section>
        </div>

        <footer>
          <button className="primary-button" onClick={onClose}>{isEditing ? 'Save changes' : 'Create'}</button>
          <button className="secondary-button" disabled={incomplete}>Preview</button>
          <button className="secondary-button" disabled={incomplete} onClick={onClose}>Save draft</button>
        </footer>
      </aside>
    </div>
  )
}

function FormField({ label, placeholder, type = 'select', icon: Icon }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <div className="form-input">
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
    <div className="side-modal-backdrop" onMouseDown={onClose}>
      <aside className="side-modal" onMouseDown={(event) => event.stopPropagation()}>
        <header>
          <h2>{isEditing ? 'Edit promotion' : 'Create a promotion'}</h2>
          <button className="icon-button" onClick={onClose} aria-label="Close promotion"><X size={18} /></button>
        </header>

        <div className="modal-form">
          <section className="modal-section">
            <h3>Add segment by users</h3>
            <div className="form-row-with-button">
              <div className="form-input">
                <input placeholder="Usernames or email addresses" readOnly />
                <ChevronDown size={14} />
              </div>
              <button className="outline-icon-button" type="button"><FilePlus2 size={18} /></button>
            </div>
          </section>

          <section className="modal-section">
            <h3>Add segment label and CSP</h3>
            <FormField label="Label" placeholder="Select labels" />
            <FormField label="CSP" placeholder="Select a CSP" />
            <FormField label="Exclude CSP" placeholder="Select a CSP" />
            <div className="form-row-with-button">
              <FormField label="Narrow segment by country" placeholder="Users from selected countries in the segment will…" />
              <button className="outline-icon-button field-side-button" type="button"><FilePlus2 size={18} /></button>
            </div>
          </section>

          <section className="modal-section modal-section-grid">
            <FormField label="Serial number of the promotion" placeholder={String(promotion?.id ?? promotions.length + 1)} type="input" />
            <FormField label="Platforms" placeholder="Where the promotion will show" />
            <FormField label="Button leads to" placeholder={promotion?.leadsTo ?? 'Balance'} />
            <FormField label="End date (optional)" placeholder={promotion?.endDate === '—' ? 'End of the promotion' : promotion?.endDate ?? 'End of the promotion'} type="input" icon={CalendarDays} />
          </section>

          <section className="modal-section reminder-row">
            <p>File with examples of segments and transitions</p>
            <label className="toggle-row">
              <input type="checkbox" checked={reminder} onChange={(event) => setReminder(event.target.checked)} />
              <span className="toggle" />
              Add a reminder
              <small>?</small>
            </label>
          </section>

          <section className="modal-section promotion-copy">
            <div className="language-tabs">
              {['EN', 'RU', 'ES', 'PT', 'TH', 'AR', 'VI'].map((language) => <button className={language === 'EN' ? 'active' : ''} key={language}>{language}</button>)}
            </div>
            <label className="form-field">
              <span>Promotion title <small>?</small></span>
              <input className="standalone-input" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Recommended length is up to 95 characters" />
            </label>
            <label className="form-field">
              <span>Promotion text in the modal window</span>
              <textarea placeholder="Tell users about the promotion" defaultValue={isEditing ? 'Discover this offer and unlock more opportunities in your Voiceon workspace.' : ''} />
              <div className="editor-toolbar">Normal ↕　≡　≣　☰　❞　<b>B</b>　<i>I</i>　<u>U</u>　☷　🔗　▧</div>
            </label>
            <label className="form-field">
              <span>Text on a button in the modal window</span>
              <input className="standalone-input" placeholder="Recommended length is up to 25 characters" defaultValue={isEditing ? 'Learn more' : ''} />
            </label>
          </section>

          <section className="modal-section promotion-assets">
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
  const [active, setActive] = useState('Users')
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState(false)
  const [notificationDraft, setNotificationDraft] = useState(undefined)

  const changeSection = (label) => {
    setActive(label)
    setNotificationDraft(undefined)
  }

  return (
    <div className="app-shell">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} active={active} setActive={changeSection} />
      <main className="main">
        <header className="topbar">
          <div className="workspace">
            <button className="icon-button menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
            {adminSubItems.includes(active) ? (
              <span className="header-breadcrumb">
                Administrator <ChevronRight size={12} /> <strong>{active}</strong>
                {active === 'Notifications' && (
                  <button className="breadcrumb-add" onClick={() => setNotificationDraft(null)} aria-label="New notification">
                    <Plus size={14} />
                  </button>
                )}
              </span>
            ) : (
              <strong>{active}</strong>
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

        <div className={`content ${['Users', 'Notifications', 'Promotions'].includes(active) ? 'content-wide' : ''}`}>
          {active === 'Users' && <UsersPage />}
          {active === 'Notifications' && (
            <NotificationsPage draft={notificationDraft} setDraft={setNotificationDraft} />
          )}
          {active === 'Promotions' && <PromotionsPage />}
          {!['Users', 'Notifications', 'Promotions'].includes(active) && <PlaceholderPage title={active} />}
        </div>
      </main>
    </div>
  )
}

export default App
