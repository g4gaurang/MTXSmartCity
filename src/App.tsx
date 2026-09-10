import { FormEvent, useEffect, useId, useState } from 'react'
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  ExternalLink,
  Layers3,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from 'lucide-react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import {
  aiControls,
  aiUses,
  architecture,
  challenges,
  dashboardData,
  dashboardTabs,
  domains,
  governance,
  mapEvents,
  mapLayers,
  offering,
  operatingStages,
  outcomes,
  phases,
  roles,
} from './data'

const nav = [
  ['Overview', 'overview'],
  ['City Challenges', 'challenges'],
  ['Solution Areas', 'solutions'],
  ['City Operations', 'operations'],
  ['Architecture', 'architecture'],
  ['Governance', 'governance'],
  ['Adoption', 'adoption'],
]

function SectionIntro({ eyebrow, title, text, headingId }: { eyebrow: string; title: string; text: string; headingId?: string }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={headingId}>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

function IllustrativeLabel() {
  return <p className="demo-label"><span aria-hidden="true" />Illustrative data for product demonstration</p>
}

function Tabs({ labels, selected, onSelect, label, panelId }: { labels: string[]; selected: number; onSelect: (index: number) => void; label: string; panelId: string }) {
  const id = useId()
  const move = (index: number, key: string) => {
    let next = index
    if (key === 'ArrowRight') next = (index + 1) % labels.length
    else if (key === 'ArrowLeft') next = (index - 1 + labels.length) % labels.length
    else if (key === 'Home') next = 0
    else if (key === 'End') next = labels.length - 1
    else return
    onSelect(next)
    requestAnimationFrame(() => document.getElementById(`${id}-tab-${next}`)?.focus())
  }
  return (
    <div className="tabs" role="tablist" aria-label={label}>
      {labels.map((item, index) => (
        <button
          type="button"
          role="tab"
          id={`${id}-tab-${index}`}
          aria-controls={panelId}
          aria-selected={selected === index}
          tabIndex={selected === index ? 0 : -1}
          className={selected === index ? 'active' : ''}
          onClick={() => onSelect(index)}
          onKeyDown={event => move(index, event.key)}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

function HeroMap() {
  const [selected, setSelected] = useState(0)
  const events = [
    { label: 'Mobility', status: 'Corridor event reviewed', x: 24, y: 61, tone: 'blue' },
    { label: 'Public facility', status: 'Inspection scheduled', x: 69, y: 24, tone: 'navy' },
    { label: 'Utility', status: 'Provider update received', x: 77, y: 64, tone: 'teal' },
    { label: 'Environment', status: 'Indicator under review', x: 17, y: 27, tone: 'green' },
    { label: 'Service request', status: 'Routed to public works', x: 57, y: 72, tone: 'amber' },
    { label: 'Emergency coordination', status: 'Agency tasks active', x: 38, y: 43, tone: 'red' },
  ]
  return (
    <div className="hero-console" aria-label="Illustrative interactive city operations view">
      <div className="console-head">
        <div><span className="live-dot" /> City operations view</div>
        <span>Fictional city</span>
      </div>
      <div className="mini-map">
        <svg viewBox="0 0 800 470" role="img" aria-labelledby="hero-map-title hero-map-desc">
          <title id="hero-map-title">Abstract city operations map</title>
          <desc id="hero-map-desc">A fictional city map with roads, blocks, green space, a river, and selectable service events.</desc>
          <rect width="800" height="470" fill="#eef4f2" />
          <path d="M0 355 C180 302 285 405 470 344 S690 300 800 342 V470 H0Z" fill="#cce6ef" />
          <path d="M-30 92 L830 403 M76 -30 L570 500 M-40 250 L820 76 M225 -20 L244 500" stroke="#fff" strokeWidth="20" />
          <path d="M-30 92 L830 403 M76 -30 L570 500 M-40 250 L820 76 M225 -20 L244 500" stroke="#b7cbd0" strokeWidth="3" strokeDasharray="8 8" />
          <g fill="#dce5e3" stroke="#c4d2cf">
            <rect x="288" y="50" width="115" height="79" rx="4" /><rect x="440" y="82" width="140" height="77" rx="4" />
            <rect x="307" y="185" width="98" height="92" rx="4" /><rect x="488" y="199" width="103" height="71" rx="4" />
            <rect x="85" y="132" width="92" height="75" rx="4" /><rect x="605" y="276" width="105" height="67" rx="4" />
          </g>
          <path d="M620 30h150v120H620z" fill="#cce3ce" /><circle cx="687" cy="87" r="24" fill="#9dc7a2" />
        </svg>
        {events.map((event, index) => (
          <button
            type="button"
            className={`map-pin ${event.tone} ${selected === index ? 'selected' : ''}`}
            style={{ left: `${event.x}%`, top: `${event.y}%` }}
            onClick={() => setSelected(index)}
            aria-label={`${event.label}: ${event.status}`}
            aria-pressed={selected === index}
            key={event.label}
          >
            <span />
          </button>
        ))}
        <div className="map-card" aria-live="polite">
          <span>{events[selected].label}</span>
          <strong>{events[selected].status}</strong>
          <small>Central coordination view · 14 min ago</small>
        </div>
      </div>
      <div className="console-metrics">
        <div><span>Service events</span><strong>38</strong><small>7 need review</small></div>
        <div><span>Agency tasks</span><strong>24</strong><small>5 shared</small></div>
        <div><span>Planned work</span><strong>12</strong><small>Next 14 days</small></div>
      </div>
      <p className="visual-caption">Illustrative city operations view · No municipal data</p>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])
  return (
    <header className="site-header">
      <a className="brand" href="#overview" aria-label="MTX Smart City Solutions home">
        <span className="brand-mark"><Building2 size={18} /></span>
        <span>MTX <b>Smart City Solutions</b></span>
      </a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
        <span className="sr-only">Toggle navigation</span>{open ? <X /> : <Menu />}
      </button>
      <nav id="site-nav" className={open ? 'open' : ''} aria-label="Primary navigation">
        {nav.map(([label, id]) => <a href={`#${id}`} onClick={() => setOpen(false)} key={id}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Request a consultation</a>
      </nav>
    </header>
  )
}

function Challenges() {
  const [selected, setSelected] = useState(0)
  const item = challenges[selected]
  return (
    <section className="section" id="challenges">
      <SectionIntro eyebrow="City challenges" title="Connect a priority problem to an operating response" text="Start with a defined service need, the people responsible for it, and measures the city can review." />
      <div className="challenge-layout">
        <div className="selector-list" aria-label="City challenges">
          {challenges.map((challenge, index) => (
            <button type="button" aria-pressed={selected === index} className={selected === index ? 'active' : ''} onClick={() => setSelected(index)} key={challenge.title}>
              <span>0{index + 1}</span>{challenge.title}<ChevronRight size={18} />
            </button>
          ))}
        </div>
        <div className="response-panel" aria-live="polite">
          <p className="panel-kicker">Selected challenge</p>
          <h3>{item.title}</h3>
          <p>{item.challenge}</p>
          <div className="response-block"><span>MTX approach</span><p>{item.response}</p></div>
          <div className="response-block"><span>Affected users</span><p>{item.users}</p></div>
          <div className="response-block"><span>Recommended measures</span><div className="tag-list">{item.measures.map(measure => <span key={measure}>{measure}</span>)}</div></div>
        </div>
      </div>
    </section>
  )
}

function OperatingModel() {
  const [selected, setSelected] = useState(0)
  const stage = operatingStages[selected]
  return (
    <section className="section tinted" id="framework">
      <SectionIntro eyebrow="Smart city operating model" title="From connected information to measurable service work" text="Five linked stages help teams move from governed data flows to coordinated, staff-led action and operational review." />
      <div className="stage-track" aria-label="Operating model stages">
        {operatingStages.map((item, index) => (
          <button type="button" aria-pressed={selected === index} onClick={() => setSelected(index)} className={selected === index ? 'active' : ''} key={item.name}>
            <span>{index + 1}</span><b>{item.name}</b>
          </button>
        ))}
      </div>
      <div className="stage-panel">
        <div><p className="panel-kicker">Purpose</p><h3>{stage.name}</h3><p>{stage.purpose}</p></div>
        <dl>
          <div><dt>Participating roles</dt><dd>{stage.roles}</dd></div>
          <div><dt>Platform capabilities</dt><dd>{stage.capabilities}</dd></div>
          <div><dt>Governance considerations</dt><dd>{stage.governance}</dd></div>
          <div><dt>Example measures</dt><dd>{stage.measures}</dd></div>
        </dl>
      </div>
      <p className="context-note"><ShieldCheck size={17} /> Automation supports staff workflows. Consequential action remains with authorized city officials.</p>
    </section>
  )
}

function Solutions() {
  const [selected, setSelected] = useState(0)
  const domain = domains[selected]
  const Icon = domain.icon
  return (
    <section className="section" id="solutions">
      <SectionIntro eyebrow="Solution domains" title="A shared foundation, configured around city priorities" text="Each domain uses reusable integration, workflow, mapping, analytics, and governance capabilities." />
      <div className="domain-shell">
        <div className="domain-tabs" aria-label="Solution domains">
          {domains.map((item, index) => {
            const TabIcon = item.icon
            return <button type="button" aria-pressed={selected === index} className={selected === index ? 'active' : ''} onClick={() => setSelected(index)} key={item.name}><TabIcon size={20} /><span>{item.short}</span></button>
          })}
        </div>
        <article className="domain-detail">
          <div className="domain-summary"><span className="icon-box"><Icon /></span><div><p className="panel-kicker">Selected solution area</p><h3>{domain.name}</h3><p>{domain.description}</p></div></div>
          <ul className="check-grid">{domain.items.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul>
          <p className="data-caveat">Data availability depends on the city’s devices, systems, partners, and governance approvals.</p>
        </article>
      </div>
    </section>
  )
}

function Dashboard() {
  const [selected, setSelected] = useState(0)
  const current = dashboardData[dashboardTabs[selected]]
  return (
    <section className="section dark-section" id="operations">
      <SectionIntro eyebrow="City operations center" title="One city. A shared operational view." text="Bring selected service conditions, planned work, and agency tasks into role-based views while source systems remain authoritative." />
      <div className="dashboard">
        <div className="dashboard-top"><div><span className="brand-mark small"><Layers3 size={16} /></span><b>City Operations</b></div><span className="status-pill">Operational view · Updated 14 min ago</span></div>
        <Tabs labels={dashboardTabs} selected={selected} onSelect={setSelected} label="Dashboard view" panelId="dashboard-panel" />
        <div id="dashboard-panel" role="tabpanel" className="dashboard-panel">
          <div className="metric-grid">
            {current.metrics.map(([label, value, note]) => <div className="metric-card" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></div>)}
          </div>
          <div className="dashboard-grid">
          <div className="chart-card">
            <div className="card-head"><div><span>Service trend</span><b>{dashboardTabs[selected]} events</b></div><div className="legend"><span className="current" />Current <span className="baseline" />Prior view</div></div>
            <div className="chart-wrap" aria-label={`Illustrative ${dashboardTabs[selected]} event trend`}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={current.trend} margin={{ top: 10, right: 8, left: -25, bottom: 0 }}>
                  <defs><linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#30b7ad" stopOpacity=".45" /><stop offset="100%" stopColor="#30b7ad" stopOpacity=".03" /></linearGradient></defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#dbe5e8" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="comparison" stroke="#83959e" fill="transparent" strokeDasharray="5 4" name="Prior view" />
                  <Area type="monotone" dataKey="value" stroke="#078a84" fill="url(#areaFill)" strokeWidth={3} name="Current" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <table className="sr-only">
              <caption>Illustrative {dashboardTabs[selected]} event trend</caption>
              <thead><tr><th>Day</th><th>Current events</th><th>Prior view events</th></tr></thead>
              <tbody>{current.trend.map(point => <tr key={point.name}><th>{point.name}</th><td>{point.value}</td><td>{point.comparison}</td></tr>)}</tbody>
            </table>
            <IllustrativeLabel />
          </div>
          <div className="work-card">
            <div className="card-head"><div><span>Coordinated work</span><b>Upcoming planned activity</b></div></div>
            {[['Central District', 'Road resurfacing', 'Public Works · Transit'], ['River District', 'Drainage inspection', 'Public Works'], ['East Commons', 'Facility energy review', 'Facilities · Sustainability']].map(([district, work, owner], index) => (
              <div className="work-row" key={work}><span className={`priority p${index}`} /><div><b>{work}</b><span>{district} · {owner}</span></div><small>{index === 0 ? 'Tue' : index === 1 ? 'Thu' : 'Fri'}</small></div>
            ))}
            <IllustrativeLabel />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CityMap() {
  const [visible, setVisible] = useState(() => new Set(mapLayers.map(layer => layer.name)))
  const [selected, setSelected] = useState(mapEvents[0])
  const toggle = (name: string) => setVisible(current => {
    const next = new Set(current)
    if (next.has(name)) {
      next.delete(name)
      if (selected.layer === name) {
        const nextEvent = mapEvents.find(event => next.has(event.layer))
        if (nextEvent) setSelected(nextEvent)
      }
    } else next.add(name)
    return next
  })
  return (
    <section className="section map-section" aria-labelledby="map-heading">
      <SectionIntro headingId="map-heading" eyebrow="Interactive city map" title="See connected work in geographic context" text="Turn layers on or off, then select a fictional event to review ownership, related work, and next action." />
      <div className="map-explorer">
        <div className="layer-panel">
          <h3>Map layers</h3>
          <p>Select information to display.</p>
          {mapLayers.map(layer => {
            const Icon = layer.icon
            return <label className="layer-toggle" key={layer.name}><input type="checkbox" checked={visible.has(layer.name)} onChange={() => toggle(layer.name)} /><span style={{ '--layer-color': layer.color } as React.CSSProperties}><Icon size={17} /></span>{layer.name}</label>
          })}
        </div>
        <div className="city-map">
          <svg viewBox="0 0 900 570" role="img" aria-labelledby="city-map-title city-map-desc">
            <title id="city-map-title">Fictional city service-event map</title>
            <desc id="city-map-desc">Abstract roads, buildings, parks, and waterways. Event buttons following the map provide equivalent text details.</desc>
            <rect width="900" height="570" fill="#edf2ef" />
            <path d="M0 420 C170 350 320 480 480 400 S720 346 900 405 V570 H0Z" fill="#c4e0ec" />
            <path d="M-20 92 L940 482 M80 -40 L650 610 M-60 290 L930 70 M265 -40 L260 600 M-30 170 L880 520" stroke="#fff" strokeWidth="27" />
            <path d="M-20 92 L940 482 M80 -40 L650 610 M-60 290 L930 70 M265 -40 L260 600 M-30 170 L880 520" stroke="#b2c5c8" strokeWidth="3" strokeDasharray="10 9" />
            <g fill="#d9e2df" stroke="#bdceca" strokeWidth="2">
              <rect x="304" y="39" width="122" height="94" rx="5" /><rect x="470" y="72" width="151" height="91" rx="5" /><rect x="640" y="44" width="151" height="110" rx="5" />
              <rect x="328" y="205" width="112" height="104" rx="5" /><rect x="526" y="227" width="119" height="83" rx="5" /><rect x="674" y="211" width="119" height="89" rx="5" />
              <rect x="72" y="130" width="107" height="91" rx="5" /><rect x="74" y="303" width="116" height="78" rx="5" /><rect x="646" y="349" width="136" height="73" rx="5" />
            </g>
            <g fill="#c4dec5"><rect x="24" y="27" width="175" height="74" rx="8" /><rect x="383" y="358" width="138" height="80" rx="8" /></g>
            <g fill="#7eaf82"><circle cx="58" cy="63" r="17" /><circle cx="101" cy="61" r="13" /><circle cx="440" cy="395" r="20" /></g>
            <text x="32" y="542" fill="#547078" fontSize="14">River District</text><text x="682" y="185" fill="#547078" fontSize="14">North Gateway</text><text x="338" y="178" fill="#547078" fontSize="14">Central District</text>
          </svg>
          {mapEvents.filter(event => visible.has(event.layer)).map(event => {
            const layer = mapLayers.find(item => item.name === event.layer)!
            const Icon = layer.icon
            return <button type="button" className={`event-pin ${selected.id === event.id ? 'selected' : ''}`} style={{ left: `${event.x}%`, top: `${event.y}%`, '--pin-color': layer.color } as React.CSSProperties} onClick={() => setSelected(event)} aria-label={`${event.type} in ${event.district}`} key={event.id}><Icon size={17} /></button>
          })}
        </div>
        <aside className="event-detail" aria-live="polite">
          <span className="event-type">{selected.layer}</span>
          <h3>{selected.type}</h3>
          <dl>
            <div><dt>District</dt><dd>{selected.district}</dd></div>
            <div><dt>Current status</dt><dd>{selected.status}</dd></div>
            <div><dt>Owning department</dt><dd>{selected.owner}</dd></div>
            <div><dt>Related work</dt><dd>{selected.work}</dd></div>
            <div><dt>Last update</dt><dd>{selected.updated}</dd></div>
            <div><dt>Next action</dt><dd>{selected.next}</dd></div>
          </dl>
          <IllustrativeLabel />
        </aside>
      </div>
    </section>
  )
}

function Roles() {
  const [selected, setSelected] = useState(0)
  const role = roles[selected]
  const Icon = role.icon
  return (
    <section className="section tinted">
      <SectionIntro eyebrow="Role-based experiences" title="A relevant view for each responsibility" text="Select a role to see how connected information supports the work that person needs to accomplish." />
      <div className="role-layout">
        <div className="role-select" aria-label="City roles">
          {roles.map((item, index) => <button type="button" aria-pressed={selected === index} className={selected === index ? 'active' : ''} onClick={() => setSelected(index)} key={item.name}>{item.name}<ChevronRight size={17} /></button>)}
        </div>
        <div className="role-card">
          <div className="role-head"><span><Icon /></span><div><p className="panel-kicker">Experience for</p><h3>{role.name}</h3></div></div>
          <p className="role-outcome">{role.outcome}</p>
          <ul className="check-grid">{role.views.map(view => <li key={view}><CircleCheck size={17} />{view}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}

function Architecture() {
  const [selected, setSelected] = useState(2)
  return (
    <section className="section" id="architecture">
      <SectionIntro eyebrow="Connected data architecture" title="A coordination layer around the systems a city uses" text="MTX Smart City Solutions connects selected information through modular interfaces. Existing systems remain authoritative for their respective functions." />
      <div className="architecture-shell">
        <div className="architecture-stack" aria-label="Architecture layers">
          {architecture.map((layer, index) => (
            <button type="button" aria-pressed={selected === index} onClick={() => setSelected(index)} className={`${selected === index ? 'active' : ''} layer-${index}`} key={layer.title}>
              <span>0{index + 1}</span><div><b>{layer.title}</b><small>{layer.note}</small></div><ChevronRight />
            </button>
          ))}
        </div>
        <div className="architecture-detail">
          <p className="panel-kicker">Layer {selected + 1}</p>
          <h3>{architecture[selected].title}</h3>
          <p>{architecture[selected].note}</p>
          <div className="architecture-items">{architecture[selected].items.map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
      <div className="principles">
        {['API-based integration', 'Modular connections', 'Source-system ownership', 'Role-based access', 'Data-quality monitoring', 'Audit history', 'Replaceable components', 'Configurable retention'].map(item => <span key={item}><Check size={15} />{item}</span>)}
      </div>
      <p className="context-note"><Network size={18} /> Compatibility is assessed against selected systems, interfaces, security needs, and data-governance requirements.</p>
    </section>
  )
}

function ResponsibleAI() {
  const [expanded, setExpanded] = useState<number | null>(0)
  return (
    <section className="section ai-section">
      <div className="ai-grid">
        <div>
          <p className="eyebrow">Responsible AI and automation</p>
          <h2>AI assistance governed around public responsibility</h2>
          <p>Practical assistance can help staff review approved information and prepare work. Agencies select use cases, permissions, review steps, and monitoring practices.</p>
          <div className="ai-uses">
            {aiUses.map((use, index) => (
              <div className="ai-disclosure" key={use}>
                <button type="button" aria-expanded={expanded === index} aria-controls={`ai-use-${index}`} onClick={() => setExpanded(expanded === index ? null : index)}>
                  <Sparkles size={17} /><span>{use}</span><ChevronDown className={expanded === index ? 'rotate' : ''} size={17} />
                </button>
                {expanded === index && <p id={`ai-use-${index}`}>{index === 0 ? 'Create a staff-reviewed digest from approved operational sources.' : index === 1 ? 'Suggest a category and routing path for staff confirmation.' : index === 2 ? 'Surface repeated conditions for analyst interpretation.' : 'Provide contextual assistance inside a staff-led workflow.'}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="guardrail-card">
          <div className="guardrail-head"><ShieldCheck /><div><span>Governance controls</span><h3>Human authority stays central</h3></div></div>
          <ul>{aiControls.map(control => <li key={control}><Check size={16} />{control}</li>)}</ul>
          <p className="advisory-note">Every AI output is advisory and requires authorized human review before action or publication. Staff can reject or override an output; agency authority does not transfer to a model.</p>
          <div className="excluded"><b>Excluded uses</b><p>No predictive policing, facial recognition, social scoring, autonomous enforcement or dispatch, automated eligibility decisions, individual behavioral surveillance, or unreviewed public communications.</p></div>
        </div>
      </div>
    </section>
  )
}

function Governance() {
  const [selected, setSelected] = useState(0)
  const item = governance[selected]
  const Icon = item.icon
  return (
    <section className="section tinted" id="governance">
      <SectionIntro eyebrow="Security, privacy, and governance" title="Define the controls before connecting the work" text="A city-specific framework can align technology configuration with policies, decision rights, public responsibilities, and operating practices." />
      <div className="governance-grid">
        <div className="governance-tabs" aria-label="Governance topics">
          {governance.map((topic, index) => {
            const TopicIcon = topic.icon
            return <button type="button" aria-pressed={selected === index} className={selected === index ? 'active' : ''} onClick={() => setSelected(index)} key={topic.title}><TopicIcon /><span>{topic.title}</span></button>
          })}
        </div>
        <div className="governance-panel">
          <span className="large-icon"><Icon /></span>
          <div><p className="panel-kicker">Control area</p><h3>{item.title}</h3><ul className="check-grid">{item.items.map(control => <li key={control}><Check />{control}</li>)}</ul></div>
        </div>
      </div>
      <p className="governance-note">Security and governance requirements are defined for each engagement. Framework alignment or certification requires approved evidence and scope review.</p>
    </section>
  )
}

function Outcomes() {
  const [selected, setSelected] = useState(0)
  return (
    <section className="section">
      <SectionIntro eyebrow="Outcome and measurement framework" title="Measure city operations through outcomes that matter" text="Select a service area to review measures the platform can help a city monitor. Targets and interpretation remain city-defined." />
      <Tabs labels={outcomes.map(item => item.title)} selected={selected} onSelect={setSelected} label="Outcome categories" panelId="outcome-panel" />
      <div className="outcome-panel" id="outcome-panel" role="tabpanel">
        <div><span className="icon-box"><Target /></span><p className="panel-kicker">Recommended measures</p><h3>{outcomes[selected].title}</h3></div>
        <div className="measure-grid">{outcomes[selected].items.map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><small>City-defined baseline and target</small></div>)}</div>
      </div>
    </section>
  )
}

function Adoption() {
  const [selected, setSelected] = useState(0)
  return (
    <section className="section adoption-section" id="adoption">
      <SectionIntro eyebrow="Modular adoption pathway" title="Begin with a priority. Grow through reusable capabilities." text="Each city’s sequence depends on its priorities, systems, funding, governance, and organizational readiness." />
      <div className="roadmap">
        <div className="roadmap-track" aria-label="Adoption phases">
          {phases.map((phase, index) => <button type="button" aria-pressed={selected === index} className={selected === index ? 'active' : ''} onClick={() => setSelected(index)} key={phase.title}><span>Phase {index + 1}</span><b>{phase.title}</b></button>)}
        </div>
        <div className="roadmap-panel">
          <p className="panel-kicker">Phase {selected + 1}</p><h3>{phases[selected].title}</h3>
          <ul>{phases[selected].items.map(item => <li key={item}><Check />{item}</li>)}</ul>
        </div>
      </div>
      <p className="context-note"><Target size={18} /> No fixed duration is assumed. Scope and sequencing are established with participating city teams.</p>
    </section>
  )
}

function Offering() {
  return (
    <section className="section">
      <SectionIntro eyebrow="Offering model" title="One product offering, structured in four parts" text="Cities can select platform capabilities, modules, implementation support, and ongoing services suited to the engagement." />
      <div className="offering-grid">
        {offering.map((part, index) => <article key={part.title}><span className="offering-number">0{index + 1}</span><h3>{part.title}</h3><p>{part.text}</p><ul>{part.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
      </div>
      <p className="offering-note">Module and service scope is defined for each engagement; listed components are potential options rather than a standard inclusion set.</p>
    </section>
  )
}

function Experience() {
  return (
    <section className="section experience-section">
      <div className="experience-copy">
        <p className="eyebrow">Experience and maturity</p>
        <h2>Public-sector experience informing the offering</h2>
        <blockquote>MTX Smart City Solutions draws on MTX experience with government digital services, cloud platforms, data integration, constituent engagement, configurable workflows, analytics, field operations, and public-sector program modernization. These patterns support a modular approach that can be adapted to a city’s systems, departments, policies, and operating priorities.</blockquote>
      </div>
      <div className="why-grid">
        {[
          ['Built around city operations', 'Connect data to the workflows and decisions used by city departments and field teams.'],
          ['Designed to work with existing systems', 'Create a shared operational layer while retaining useful municipal technology investments.'],
          ['Modular by design', 'Begin with a defined city priority and expand through reusable platform capabilities.'],
          ['Grounded in public-sector governance', 'Build privacy, security, accessibility, oversight, and responsible AI into the operating model.'],
        ].map(([title, text], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}
      </div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const formId = useId()
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Build a practical modernization roadmap</p>
        <h2>Start with one city priority. Build a connected operating foundation.</h2>
        <p>Explore how MTX Smart City Solutions can connect data, workflows, departments, and community services around a practical modernization roadmap.</p>
        <div className="contact-options">
          <span><Check />Schedule a Smart City Workshop</span>
          <span><Check />Request a Platform Demonstration</span>
          <span><Check />Discuss a Priority Use Case</span>
        </div>
      </div>
      <form className="contact-form" onSubmit={submit} aria-labelledby={`${formId}-title`}>
        <div className="form-head"><p className="panel-kicker">Local prototype form</p><h3 id={`${formId}-title`}>Request a consultation</h3><p>This demonstration does not transmit or store form data.</p></div>
        <div className="form-grid">
          <label>Name<input name="name" autoComplete="name" required /></label>
          <label>Municipality or organization<input name="organization" autoComplete="organization" required /></label>
          <label>Role<input name="role" autoComplete="organization-title" required /></label>
          <label>Email<input type="email" name="email" autoComplete="email" required /></label>
          <label className="full">Priority solution area<select name="priority" required defaultValue=""><option value="" disabled>Select an area</option>{domains.map(domain => <option key={domain.short}>{domain.short}</option>)}</select></label>
          <label className="full">Current challenge<input name="challenge" required /></label>
          <label className="full">Message<textarea name="message" rows={4} /></label>
        </div>
        <button className="button primary form-submit" type="submit">Prepare consultation request <ArrowRight size={17} /></button>
        {submitted && <div className="confirmation" role="status"><CircleCheck />Thank you. Your prototype request was prepared locally and was not transmitted.</div>}
      </form>
    </section>
  )
}

function App() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="overview">
          <div className="hero-copy">
            <p className="eyebrow">Connected City Operations</p>
            <h1>Turn fragmented city information into <span>coordinated action</span></h1>
            <p className="hero-lead">Connect infrastructure, transportation, public safety, utilities, environmental programs, and citizen services through a shared operational view built around the systems a city already uses.</p>
            <p className="hero-summary">MTX Smart City Solutions combines cloud platforms, data integration, IoT connectivity, analytics, configurable workflows, and responsible AI to help governments understand city conditions and coordinate services across departments. Cities can begin with a focused operational need and add capabilities as priorities and readiness evolve.</p>
            <div className="hero-actions">
              <a className="button primary" href="#framework">Explore the Smart City Framework <ArrowRight size={17} /></a>
              <a className="button secondary" href="#operations">View the City Operations Center</a>
            </div>
            <a className="text-link" href="#contact">Request a consultation <ExternalLink size={15} /></a>
          </div>
          <HeroMap />
        </section>
        <section className="scope-bar" aria-labelledby="scope-title">
          <p id="scope-title">Offering scope</p>
          <div><strong>6</strong><span>Solution domains</span></div>
          <div><strong>5</strong><span>Operational stages</span></div>
          <div><strong>1</strong><span>Connected city view</span></div>
          <div><strong className="word">Modular</strong><span>Adoption model</span></div>
        </section>
        <section className="positioning-strip">
          <div><span className="icon-box"><Network /></span><h2>A coordination and intelligence layer</h2></div>
          <p>Connect existing systems and approved data sources so city teams can understand current conditions, coordinate responses, manage work, and measure service outcomes—without requiring a broad replacement program.</p>
        </section>
        <Challenges />
        <OperatingModel />
        <Solutions />
        <Dashboard />
        <CityMap />
        <Roles />
        <Architecture />
        <ResponsibleAI />
        <Governance />
        <Outcomes />
        <Adoption />
        <Offering />
        <Experience />
        <Contact />
      </main>
      <footer>
        <a className="brand footer-brand" href="#overview"><span className="brand-mark"><Building2 size={18} /></span><span>MTX <b>Smart City Solutions</b></span></a>
        <p>Building Smarter, Safer, and More Connected Communities</p>
        <p className="footer-note">Product prototype · Fictional demonstration data · Public-sector claims require review before publication</p>
      </footer>
      {showTop && <a className="back-top" href="#overview" aria-label="Back to top">↑</a>}
    </>
  )
}

export default App
