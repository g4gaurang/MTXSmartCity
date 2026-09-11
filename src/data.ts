import {
  Activity,
  AlertTriangle,
  Building2,
  Bus,
  CloudSun,
  Construction,
  Droplets,
  Gauge,
  HeartHandshake,
  Leaf,
  Map,
  Radio,
  Shield,
  TrafficCone,
  Users,
  Wrench,
  Zap,
} from 'lucide-react'

export const challenges = [
  {
    title: 'Fragmented departmental information',
    challenge: 'City information is distributed across agency applications, spreadsheets, sensors, GIS platforms, and vendor systems.',
    response: 'Connect selected data through integration services, common operational views, shared workflows, and role-based dashboards.',
    users: 'CIO, data leaders, department leaders, operations analysts',
    measures: ['Data availability', 'Integration health', 'Reporting latency', 'Manual reconciliation effort'],
  },
  {
    title: 'Reactive infrastructure maintenance',
    challenge: 'Infrastructure issues may be addressed after service disruption or public complaints occur.',
    response: 'Connect asset conditions, inspections, work orders, service requests, and operational alerts to help teams coordinate maintenance needs.',
    users: 'Public works leaders, facility teams, field crews, budget officials',
    measures: ['Issue age', 'Inspection status', 'Work-order backlog', 'Repeat incidents', 'Time to assignment'],
  },
  {
    title: 'Transportation congestion and limited visibility',
    challenge: 'Transportation data may be divided among traffic systems, transit platforms, road operations, field teams, and planning groups.',
    response: 'Create a shared transportation view connecting conditions, incidents, planned work, service disruptions, and operational responses.',
    users: 'Transportation leaders, transit partners, road operations, city executives',
    measures: ['Incident duration', 'Corridor conditions', 'Service interruptions', 'Response status', 'Recurring bottlenecks'],
  },
  {
    title: 'Disconnected emergency coordination',
    challenge: 'Agencies and response partners may work from different information during emergencies and major events.',
    response: 'Provide shared situational views, defined coordination workflows, task ownership, alerts, and documented decisions. Dispatch and response authority remain with designated agencies.',
    users: 'Emergency managers, agency coordinators, public-safety administrators',
    measures: ['Alert acknowledgment', 'Task status', 'Resource availability', 'Escalation time', 'Recovery milestones'],
  },
  {
    title: 'Inconsistent citizen experiences',
    challenge: 'Residents may need to navigate different channels and departments to report issues or obtain services.',
    response: 'Connect digital requests, routing, status updates, communications, and departmental workflows around a shared constituent experience.',
    users: '311 leaders, service departments, communications teams, residents',
    measures: ['Request volume', 'Routing accuracy', 'Response status', 'Repeat contacts', 'Service completion time'],
  },
  {
    title: 'Limited sustainability insight',
    challenge: 'Environmental, energy, transportation, and infrastructure data may be difficult to connect to program goals.',
    response: 'Organize approved data into dashboards and reporting views for environmental conditions, resource use, and program measures.',
    users: 'Sustainability officers, utility leaders, program managers, executives',
    measures: ['Energy consumption', 'Water usage', 'Air-quality trends', 'Fleet indicators', 'Waste measures', 'Program progress'],
  },
]

export const operatingStages = [
  { name: 'Connect', purpose: 'Bring selected information from agency systems, IoT devices, partner platforms, GIS, service channels, and approved external sources into governed data flows.', roles: 'Technology teams, data owners, system partners', capabilities: 'APIs, event streams, batch exchange, validation', governance: 'Ownership, purpose, access, retention', measures: 'Source availability, validation status, connection health' },
  { name: 'Understand', purpose: 'Organize operational data into maps, dashboards, alerts, trends, and role-based views.', roles: 'Analysts, department leaders, executives', capabilities: 'Mapping, dashboards, trends, contextual alerts', governance: 'Definitions, quality thresholds, authorized views', measures: 'Data currency, quality, alert relevance' },
  { name: 'Coordinate', purpose: 'Route work, assign ownership, manage dependencies, share approved information, and document decisions.', roles: 'Department coordinators, operations staff, partners', capabilities: 'Workflows, tasks, notifications, decision history', governance: 'Decision rights, escalation, partner access', measures: 'Acknowledgment, handoffs, task status' },
  { name: 'Act', purpose: 'Support staff managing service requests, maintenance, incidents, inspections, field activities, communications, and follow-up.', roles: 'Field teams, service staff, supervisors', capabilities: 'Mobile workspaces, case updates, guided steps', governance: 'Human authority, safety procedures, change control', measures: 'Assignment time, issue age, completion status' },
  { name: 'Measure', purpose: 'Track operational performance, service outcomes, resource use, recurring conditions, and improvement priorities.', roles: 'Program leaders, oversight officials, analysts', capabilities: 'Reporting, analytics, trend comparison, review views', governance: 'Measure definitions, interpretation, publication review', measures: 'Backlog, service trends, milestones, recurring conditions' },
]

export const domains = [
  { name: 'Smart Infrastructure Monitoring and Management', short: 'Infrastructure', icon: Building2, description: 'Connect condition, inspection, maintenance, and field activity information around public assets.', items: ['Asset and facility information', 'Condition monitoring', 'Inspection coordination', 'Maintenance alerts', 'Work-order integration', 'Field activity', 'Issue and risk tracking', 'Geographic visibility', 'Capital and maintenance priorities'] },
  { name: 'Intelligent Transportation and Traffic Operations', short: 'Transportation', icon: Bus, description: 'Combine transportation conditions and planned activity to support coordinated operations without directly controlling traffic infrastructure.', items: ['Traffic-condition integration', 'Incident coordination', 'Roadwork visibility', 'Transit and mobility information', 'Corridor monitoring', 'Traveler-information support', 'Operational alerts', 'Performance trends'] },
  { name: 'Public Safety and Emergency Coordination', short: 'Public Safety and Emergency Coordination', icon: Shield, description: 'Support agency-led coordination with shared, approved information while emergency authority remains with designated officials.', items: ['Shared situational awareness', 'Incident information', 'Resource coordination', 'Emergency tasks', 'Alerts and escalation', 'Facility status', 'Recovery tracking', 'After-action reporting'] },
  { name: 'Smart Utilities and Energy Management', short: 'Utilities & energy', icon: Zap, description: 'Connect utility information for visibility and coordination without operating utility control systems.', items: ['Utility asset information', 'Usage monitoring', 'Outage and issue coordination', 'Field-service integration', 'Energy trends', 'Demand visibility', 'Infrastructure condition', 'Maintenance planning'] },
  { name: 'Citizen Engagement and Digital Services', short: 'Citizen services', icon: HeartHandshake, description: 'Connect service channels and departmental work around an accessible constituent experience.', items: ['Digital service requests', '311 integration', 'Status tracking', 'Notifications', 'Multichannel engagement', 'Department routing', 'Resident feedback', 'Service analytics', 'Accessible user experiences'] },
  { name: 'Environmental and Sustainability Monitoring', short: 'Environment', icon: Leaf, description: 'Organize approved environmental and resource data around program goals and operating decisions.', items: ['Air-quality information', 'Water indicators', 'Waste and recycling measures', 'Energy consumption', 'Fleet indicators', 'Environmental events', 'Green-space conditions', 'Program reporting'] },
]

export const roles = [
  { name: 'City executive', icon: Building2, outcome: 'Review citywide priorities and direct attention to service risks and resource pressures.', views: ['Citywide operating conditions', 'Priority service risks', 'Department performance', 'Resource pressures', 'Major initiatives', 'Community outcome measures'] },
  { name: 'Chief information officer', icon: Gauge, outcome: 'Guide platform health, governance, dependencies, and the technology roadmap.', views: ['Integration health', 'Platform usage', 'Data governance', 'Security events', 'System dependencies', 'Technology roadmap'] },
  { name: 'Department leader', icon: Users, outcome: 'Balance workload, assignments, performance, dependencies, and escalations.', views: ['Department workload', 'Open issues', 'Staff assignments', 'Service performance', 'Cross-department dependencies', 'Escalations'] },
  { name: 'Operations-center analyst', icon: Radio, outcome: 'Build a timely operating picture and coordinate agency updates.', views: ['Current conditions', 'Alerts', 'Event correlation', 'Active tasks', 'Agency coordination', 'Situation updates'] },
  { name: 'Field and maintenance team', icon: Wrench, outcome: 'Review assigned work and document safe, informed field activity.', views: ['Assigned work', 'Location information', 'Asset history', 'Inspection details', 'Safety instructions', 'Mobile documentation'] },
  { name: 'Constituent-service leader', icon: HeartHandshake, outcome: 'Improve request routing, communications, and service follow-through.', views: ['Request volumes', 'Routing', 'Status', 'Communications', 'Repeat contacts', 'Service completion patterns'] },
  { name: 'Sustainability and resilience leader', icon: Leaf, outcome: 'Connect environmental and resource indicators to program priorities.', views: ['Environmental measures', 'Infrastructure conditions', 'Energy and resource indicators', 'Program progress', 'Resilience priorities'] },
]

export const dashboardTabs = ['Citywide', 'Infrastructure', 'Mobility', 'Emergency Coordination', 'Utilities', 'Citizen Services', 'Environment']

export const dashboardData: Record<string, { metrics: [string, string, string][]; trend: { name: string; value: number; comparison: number }[] }> = {
  Citywide: { metrics: [['Open service events', '38', '7 need review'], ['Agency tasks', '24', '5 cross-department'], ['Planned work', '12', 'Next 14 days']], trend: [{ name: 'Mon', value: 24, comparison: 18 }, { name: 'Tue', value: 31, comparison: 22 }, { name: 'Wed', value: 27, comparison: 26 }, { name: 'Thu', value: 38, comparison: 25 }, { name: 'Fri', value: 29, comparison: 21 }] },
  Infrastructure: { metrics: [['Condition reviews', '14', '3 elevated'], ['Work orders', '21', '8 assigned'], ['Inspections', '9', 'This week']], trend: [{ name: 'Mon', value: 14, comparison: 11 }, { name: 'Tue', value: 16, comparison: 13 }, { name: 'Wed', value: 15, comparison: 14 }, { name: 'Thu', value: 21, comparison: 15 }, { name: 'Fri', value: 18, comparison: 14 }] },
  Mobility: { metrics: [['Corridor events', '7', '2 under review'], ['Roadwork notices', '6', '3 active'], ['Transit notices', '4', 'Published']], trend: [{ name: 'Mon', value: 11, comparison: 8 }, { name: 'Tue', value: 15, comparison: 9 }, { name: 'Wed', value: 9, comparison: 7 }, { name: 'Thu', value: 13, comparison: 10 }, { name: 'Fri', value: 10, comparison: 8 }] },
  'Emergency Coordination': { metrics: [['Coordination events', '3', 'Agency-led'], ['Open tasks', '8', '2 cross-agency'], ['Updates due', '2', 'Within 60 min']], trend: [{ name: 'Mon', value: 5, comparison: 4 }, { name: 'Tue', value: 4, comparison: 3 }, { name: 'Wed', value: 7, comparison: 5 }, { name: 'Thu', value: 8, comparison: 4 }, { name: 'Fri', value: 6, comparison: 4 }] },
  Utilities: { metrics: [['Utility events', '5', 'Provider updates'], ['Field tasks', '11', '6 assigned'], ['Usage reviews', '3', 'Program views']], trend: [{ name: 'Mon', value: 8, comparison: 7 }, { name: 'Tue', value: 9, comparison: 8 }, { name: 'Wed', value: 12, comparison: 9 }, { name: 'Thu', value: 11, comparison: 8 }, { name: 'Fri', value: 10, comparison: 8 }] },
  'Citizen Services': { metrics: [['Open requests', '29', '6 need routing'], ['Updates pending', '8', 'Department review'], ['Repeat contacts', '4', 'This week']], trend: [{ name: 'Mon', value: 19, comparison: 17 }, { name: 'Tue', value: 25, comparison: 20 }, { name: 'Wed', value: 23, comparison: 19 }, { name: 'Thu', value: 29, comparison: 21 }, { name: 'Fri', value: 24, comparison: 20 }] },
  Environment: { metrics: [['Indicator reviews', '6', '2 thresholds'], ['Program measures', '15', '3 updated'], ['Field checks', '4', 'Scheduled']], trend: [{ name: 'Mon', value: 12, comparison: 10 }, { name: 'Tue', value: 13, comparison: 11 }, { name: 'Wed', value: 15, comparison: 12 }, { name: 'Thu', value: 14, comparison: 12 }, { name: 'Fri', value: 11, comparison: 10 }] },
}

export const mapLayers = [
  { name: 'Roads and mobility', icon: TrafficCone, color: '#1673ba' },
  { name: 'Public facilities', icon: Building2, color: '#17456f' },
  { name: 'Infrastructure assets', icon: Construction, color: '#5d6b75' },
  { name: 'Utility events', icon: Droplets, color: '#0b8b86' },
  { name: 'Service requests', icon: HeartHandshake, color: '#8b5a20' },
  { name: 'Environmental conditions', icon: CloudSun, color: '#3b7d44' },
  { name: 'Planned work', icon: Wrench, color: '#d07a16' },
  { name: 'Emergency events', icon: AlertTriangle, color: '#a54848' },
]

export const mapEvents = [
  { id: 1, layer: 'Roads and mobility', x: 42, y: 36, type: 'Corridor delay', district: 'Central District', status: 'Monitoring', owner: 'Transportation Operations', work: 'Review signal-system feed and roadwork notices', updated: '12 minutes ago', next: 'Publish agency-reviewed traveler update' },
  { id: 2, layer: 'Public facilities', x: 69, y: 24, type: 'Facility inspection', district: 'North Gateway', status: 'Scheduled', owner: 'Public Facilities', work: 'Inspection task PF-104', updated: '35 minutes ago', next: 'Complete field checklist' },
  { id: 3, layer: 'Infrastructure assets', x: 24, y: 67, type: 'Drainage condition', district: 'River District', status: 'Assigned', owner: 'Public Works', work: 'Work order PW-218', updated: '22 minutes ago', next: 'Field team assessment' },
  { id: 4, layer: 'Utility events', x: 77, y: 63, type: 'Water service issue', district: 'East Commons', status: 'Provider review', owner: 'Utility Coordination', work: 'Related service requests grouped', updated: '18 minutes ago', next: 'Await provider status update' },
  { id: 5, layer: 'Service requests', x: 55, y: 72, type: 'Streetlight request', district: 'South Industrial Area', status: 'Routed', owner: 'Constituent Services', work: 'Request SR-442', updated: '9 minutes ago', next: 'Department acknowledgment' },
  { id: 6, layer: 'Environmental conditions', x: 18, y: 27, type: 'Air-quality indicator', district: 'North Gateway', status: 'Reviewing trend', owner: 'Environmental Programs', work: 'Compare approved regional source', updated: '28 minutes ago', next: 'Analyst interpretation' },
  { id: 7, layer: 'Planned work', x: 61, y: 47, type: 'Street resurfacing', district: 'Central District', status: 'Planned', owner: 'Public Works', work: 'Coordinate transit and access notices', updated: '1 hour ago', next: 'Confirm work window' },
  { id: 8, layer: 'Emergency events', x: 34, y: 48, type: 'Weather coordination event', district: 'River District', status: 'Agency coordination', owner: 'Emergency Management', work: 'Three agency tasks active', updated: '6 minutes ago', next: 'Authorized official reviews situation update' },
]

export const architecture = [
  { title: 'Source systems and connected infrastructure', note: 'Authoritative systems retain ownership.', items: ['GIS', 'Asset management', 'Traffic systems', 'Transit platforms', 'Utility systems', 'IoT platforms', '311 and CRM', 'Work-order systems', 'Emergency-management platforms', 'Financial and procurement systems', 'Document repositories', 'Environmental data sources'] },
  { title: 'Integration and data layer', note: 'Modular connections support governed exchange.', items: ['APIs', 'Event streams', 'Batch exchange', 'Data validation', 'Identity matching where legally permitted', 'Metadata', 'Data catalog', 'Access policies', 'Integration monitoring'] },
  { title: 'MTX coordination and intelligence layer', note: 'Shared capabilities connect information to work.', items: ['Shared operational data', 'Configurable workflows', 'Rules and alerts', 'Case and event coordination', 'Mapping', 'Analytics', 'Responsible AI assistance', 'Reporting'] },
  { title: 'Experience layer', note: 'Role-based views support specific responsibilities.', items: ['Executive dashboards', 'Department workspaces', 'Operations center', 'Field experiences', 'Partner access', 'Resident services', 'Public information'] },
]

export const governance = [
  { title: 'Data governance', icon: Map, items: ['Data ownership', 'Data definitions', 'Quality rules', 'Sharing agreements', 'Retention', 'Authorized use'] },
  { title: 'Privacy', icon: Users, items: ['Data minimization', 'Purpose limitation', 'Role-based access', 'Sensitive-data handling', 'Resident transparency', 'Review procedures'] },
  { title: 'Cybersecurity', icon: Shield, items: ['Identity and access', 'Encryption options', 'Network protection', 'Monitoring', 'Incident procedures', 'Secure configuration'] },
  { title: 'Operational governance', icon: Activity, items: ['Department ownership', 'Decision rights', 'Escalation', 'Change control', 'Platform administration', 'Performance review'] },
  { title: 'AI governance', icon: Gauge, items: ['Approved use cases', 'Human review', 'Model documentation', 'Testing', 'Monitoring', 'Override and issue reporting'] },
]

export const outcomes = [
  { title: 'Service delivery', items: ['Request acknowledgment', 'Assignment time', 'Completion status', 'Repeat requests', 'Backlog age', 'Resident feedback'] },
  { title: 'Infrastructure', items: ['Asset-condition status', 'Inspection completion', 'Maintenance backlog', 'Repeat failures', 'Work-order age', 'Planned versus reactive work'] },
  { title: 'Transportation', items: ['Incident duration', 'Corridor conditions', 'Service interruptions', 'Planned-work conflicts', 'Response status', 'Mobility trends'] },
  { title: 'Emergency coordination', items: ['Alert acknowledgment', 'Resource status', 'Task completion', 'Escalation time', 'Recovery milestones', 'After-action items'] },
  { title: 'Utilities and environment', items: ['Outage status', 'Usage trends', 'Environmental conditions', 'Threshold events', 'Program measures', 'Resource-consumption patterns'] },
]

export const phases = [
  { title: 'Establish priorities and governance', items: ['Define the operating problem', 'Identify participating departments', 'Inventory systems and data', 'Establish ownership', 'Select initial measures'] },
  { title: 'Connect priority information', items: ['Build selected integrations', 'Apply data-quality rules', 'Configure access', 'Establish operational views'] },
  { title: 'Digitize coordination', items: ['Configure workflows', 'Define alerts', 'Assign responsibilities', 'Connect field and office activities'] },
  { title: 'Add analytics and responsible automation', items: ['Develop approved analytics', 'Introduce staff-assistance functions', 'Monitor performance', 'Refine operating processes'] },
  { title: 'Expand across the city', items: ['Add departments', 'Connect more assets and services', 'Reuse common capabilities', 'Extend reporting', 'Review community outcomes'] },
]

export const aiUses = ['Summarize operational information', 'Categorize service requests', 'Identify recurring operational patterns', 'Draft situation updates', 'Support resource-demand forecasts', 'Highlight data-quality issues', 'Recommend workflow next steps', 'Search approved knowledge sources']

export const aiControls = ['Staff review generated content', 'Agencies approve each use case', 'Data access follows established permissions', 'Recommendations include relevant context', 'Model activity can be logged', 'Performance is monitored', 'Agencies define acceptable-use policies', 'Consequential decisions remain with authorized officials']

export const offering = [
  { title: 'Smart city platform', text: 'A shared foundation configured for the city’s operating model.', items: ['Shared operational data model', 'Configurable workflows', 'City operations dashboards', 'Mapping', 'Rules and alerts', 'Role-based workspaces', 'Reporting', 'Integration patterns', 'Governance controls'] },
  { title: 'Solution modules', text: 'Select modules around a defined priority and participating departments.', items: ['Infrastructure', 'Transportation', 'Emergency coordination', 'Utilities', 'Citizen services', 'Environment'] },
  { title: 'Implementation services', text: 'Services scoped to the selected platform and operating needs.', items: ['Discovery', 'Operating-model design', 'Configuration', 'Integration', 'Data preparation', 'Testing', 'Training', 'Deployment', 'Change management', 'Knowledge transfer'] },
  { title: 'Managed services', text: 'Ongoing services selected for the city’s support model.', items: ['Production support', 'Integration monitoring', 'Data-quality support', 'Dashboard maintenance', 'Release management', 'Enhancement delivery', 'Performance reviews', 'Operational optimization'] },
]
