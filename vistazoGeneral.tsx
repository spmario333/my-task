<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>TaskStream - Employee Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Geist:wght@500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-tint": "#5b598c",
                    "outline": "#787680",
                    "tertiary-container": "#371a00",
                    "secondary-fixed": "#e1e0ff",
                    "inverse-primary": "#c4c1fb",
                    "primary": "#070235",
                    "primary-container": "#1e1b4b",
                    "tertiary": "#160700",
                    "surface-bright": "#f8f9ff",
                    "on-surface": "#0b1c30",
                    "on-tertiary-fixed-variant": "#633e1e",
                    "on-error-container": "#93000a",
                    "error": "#ba1a1a",
                    "surface-container-highest": "#d3e4fe",
                    "on-tertiary-container": "#ae7f59",
                    "inverse-on-surface": "#eaf1ff",
                    "inverse-surface": "#213145",
                    "tertiary-fixed-dim": "#f1bc91",
                    "on-primary-fixed-variant": "#444173",
                    "secondary-container": "#6063ee",
                    "on-tertiary-fixed": "#2e1500",
                    "surface": "#f8f9ff",
                    "on-primary-fixed": "#181445",
                    "surface-container": "#e5eeff",
                    "surface-variant": "#d3e4fe",
                    "on-secondary": "#ffffff",
                    "on-primary-container": "#8683ba",
                    "secondary": "#4648d4",
                    "surface-container-high": "#dce9ff",
                    "background": "#f8f9ff",
                    "on-secondary-container": "#fffbff",
                    "on-error": "#ffffff",
                    "error-container": "#ffdad6",
                    "on-secondary-fixed-variant": "#2f2ebe",
                    "on-secondary-fixed": "#07006c",
                    "on-primary": "#ffffff",
                    "primary-fixed": "#e3dfff",
                    "tertiary-fixed": "#ffdcc2",
                    "on-tertiary": "#ffffff",
                    "primary-fixed-dim": "#c4c1fb",
                    "secondary-fixed-dim": "#c0c1ff",
                    "outline-variant": "#c8c5d0",
                    "on-surface-variant": "#47464f",
                    "on-background": "#0b1c30",
                    "surface-container-low": "#eff4ff",
                    "surface-dim": "#cbdbf5",
                    "surface-container-lowest": "#ffffff"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "xs": "4px",
                    "container-padding": "24px",
                    "gutter": "16px",
                    "sm": "8px",
                    "base": "4px",
                    "md": "16px",
                    "xl": "32px",
                    "sidebar-width": "260px",
                    "lg": "24px"
            },
            "fontFamily": {
                    "label-sm": ["Inter"],
                    "body-lg": ["Inter"],
                    "headline-lg-mobile": ["Geist"],
                    "headline-sm": ["Geist"],
                    "headline-md": ["Geist"],
                    "headline-lg": ["Geist"],
                    "body-md": ["Inter"],
                    "body-sm": ["Inter"],
                    "display": ["Geist"],
                    "label-md": ["Inter"]
            },
            "fontSize": {
                    "label-sm": ["11px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "body-lg": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-lg-mobile": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "headline-sm": ["18px", {"lineHeight": "1.5", "fontWeight": "500"}],
                    "headline-md": ["24px", {"lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "500"}],
                    "headline-lg": ["32px", {"lineHeight": "1.25", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                    "body-md": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "body-sm": ["12px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "display": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                    "label-md": ["14px", {"lineHeight": "1", "fontWeight": "500"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .task-card-shadow {
            box-shadow: 0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.06);
        }
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md text-body-md overflow-hidden">
<!-- Sidebar -->
<aside class="fixed left-0 top-0 h-screen w-[260px] bg-surface border-r border-outline-variant flex flex-col p-md overflow-y-auto z-50">
<div class="flex items-center gap-3 mb-xl px-2">
<div class="w-8 h-8 bg-primary rounded flex items-center justify-center text-on-primary">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
</div>
<div>
<h1 class="text-headline-md font-headline-md font-bold text-primary">TaskStream</h1>
<p class="text-label-sm text-on-surface-variant">Enterprise Hub</p>
</div>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-3 px-4 py-3 text-primary bg-secondary-fixed rounded-lg font-bold transition-transform duration-150 active:scale-[0.98]" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Overview</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="assignment">assignment</span>
<span>Tasks</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="group">group</span>
<span>Team</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</nav>
<div class="mt-auto pt-md border-t border-outline-variant">
<button class="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">
<span class="material-symbols-outlined" data-icon="add">add</span>
                New Project
            </button>
</div>
</aside>
<!-- Top Bar -->
<header class="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-lg z-40">
<div class="flex items-center bg-surface-container-low border border-outline-variant rounded-full px-4 py-1.5 w-96">
<span class="material-symbols-outlined text-on-surface-variant text-[20px]" data-icon="search">search</span>
<input class="bg-transparent border-none focus:ring-0 text-body-sm w-full ml-2" placeholder="Search tasks or files..." type="text"/>
</div>
<div class="flex items-center gap-4">
<button class="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors relative">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<div class="h-6 w-[1px] bg-outline-variant mx-1"></div>
<div class="flex items-center gap-3 cursor-pointer hover:bg-surface-container-low p-1.5 rounded-lg transition-colors">
<div class="text-right hidden sm:block">
<p class="text-label-md font-label-md text-on-surface">Alex Rivera</p>
<p class="text-label-sm text-on-surface-variant">Senior Engineer</p>
</div>
<img alt="Alex Rivera" class="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A professional headshot of a Hispanic male in his early 30s with a clean-shaven face and short dark hair. He is wearing a crisp white button-down shirt against a soft, out-of-focus modern office background. The lighting is bright and natural, reflecting a clean and professional corporate aesthetic consistent with a high-end SaaS platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6tOy2gbhT8gK0RH0SCq9tchv6t_F2OxtGRc8bdRQUj8WNe-NlxOZnlMji2ivcexooCyPKE3I41cba0rYILU5RFZoWRWq-JqX0YciZeHNIZ0MG5YAS-_c_YMs4OQaRv92eh612VxiZczFO199FgSfFD_NDcKIc2Du4v91WjXx04jCBcHMTVvGWKUjB_IGabPD3kyt_1AqmwAoEPcxKs6CPHTCzJWNUwWwpxkE5pwgI1QMQz93P0ctEmIa98qqY_zrEkbKIUy-SjSE"/>
</div>
</div>
</header>
<!-- Main Content -->
<main class="ml-[260px] pt-16 h-screen overflow-hidden flex">
<!-- Dashboard Canvas -->
<div class="flex-1 overflow-y-auto p-lg space-y-lg">
<!-- Hero Summary -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-md">
<div class="md:col-span-2 bg-primary-container p-xl rounded-xl relative overflow-hidden flex flex-col justify-center">
<div class="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 rounded-full -mr-20 -mt-20"></div>
<h2 class="text-headline-lg font-headline-lg text-on-primary-container mb-2">Good morning, Alex.</h2>
<p class="text-body-lg font-body-lg text-on-primary-container opacity-80">You have 4 tasks due today. You're making great progress this week.</p>
</div>
<div class="bg-surface-container-lowest border border-outline-variant p-xl rounded-xl flex flex-col justify-between">
<div>
<div class="flex justify-between items-center mb-sm">
<span class="text-label-md font-label-md text-on-surface-variant">Weekly Goal</span>
<span class="text-label-md font-label-md text-primary">75%</span>
</div>
<div class="w-full h-2 bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-secondary transition-all duration-700" style="width: 75%"></div>
</div>
</div>
<p class="text-body-sm text-on-surface-variant mt-md">3/4 projects on track. Keep it up!</p>
</div>
</section>
<!-- Tasks Section -->
<section class="space-y-md">
<div class="flex items-center justify-between">
<h3 class="text-headline-sm font-headline-sm text-on-surface">My Tasks</h3>
<div class="flex gap-2">
<button class="px-3 py-1.5 rounded-full text-label-sm bg-secondary text-on-secondary">All Tasks</button>
<button class="px-3 py-1.5 rounded-full text-label-sm border border-outline-variant text-on-surface-variant hover:bg-surface-container-low">Filters</button>
</div>
</div>
<div class="space-y-xl">
<!-- Today -->
<div>
<div class="flex items-center gap-2 mb-md">
<span class="w-2 h-2 bg-error rounded-full"></span>
<h4 class="text-label-md font-label-md text-on-surface-variant tracking-wider uppercase">Today</h4>
</div>
<div class="grid grid-cols-1 xl:grid-cols-2 gap-md">
<!-- Task Card 1 -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-md task-card-shadow hover:border-outline transition-colors group">
<div class="flex items-start justify-between mb-sm">
<div class="flex items-center gap-3">
<input class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
<h5 class="text-body-md font-bold text-on-surface">Refactor API Middleware</h5>
</div>
<span class="px-2 py-1 rounded-full text-label-sm bg-error/10 text-error">High</span>
</div>
<p class="text-body-sm text-on-surface-variant mb-md ml-8 line-clamp-2">Optimize the authentication flow for enterprise-scale tokens to reduce latency by 20%.</p>
<div class="flex items-center justify-between ml-8">
<div class="flex items-center gap-4">
<div class="flex items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]" data-icon="calendar_today">calendar_today</span>
<span class="text-label-sm">Today</span>
</div>
<div class="flex items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]" data-icon="comment">comment</span>
<span class="text-label-sm">3</span>
</div>
</div>
<div class="flex -space-x-2">
<img class="w-6 h-6 rounded-full border border-surface" data-alt="A close-up portrait of a woman with a friendly expression, styled for a professional corporate directory." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLrccx4SK5Uh-MgXX8iAmRQntb6oiHlc5HcMx5dAr7yTzLhBzKBu95waeC12X6qA9_Qqx0W-LnEmP7cNnoscUfpoyNYmIxahBvpbAVaFGEVI_ulr9QWUBiWNxo-1VLs3PRGkPdeb3DaHeykGTxSnf4B3NFhMqQwiufykVVumLZFQ-3fI4iAsy1Va-PEstG6-889xsiqZcA-B9suubjbjNkYvLt8vmIqJrCABcxYOACNlJ2CwbY2UKDQOqQYbxFJz-a7vbh3-NN1ss"/>
<div class="w-6 h-6 rounded-full bg-surface-container-highest border border-surface flex items-center justify-center text-[10px] text-on-surface-variant">+2</div>
</div>
</div>
</div>
<!-- Task Card 2 -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-md task-card-shadow hover:border-outline transition-colors group">
<div class="flex items-start justify-between mb-sm">
<div class="flex items-center gap-3">
<input class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
<h5 class="text-body-md font-bold text-on-surface">Product Sync Meeting</h5>
</div>
<span class="px-2 py-1 rounded-full text-label-sm bg-tertiary-fixed-dim/20 text-on-tertiary-fixed-variant">Medium</span>
</div>
<p class="text-body-sm text-on-surface-variant mb-md ml-8 line-clamp-2">Review Q3 roadmap with the design and engineering leads. Prepare documentation.</p>
<div class="flex items-center justify-between ml-8">
<div class="flex items-center gap-4">
<div class="flex items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span>
<span class="text-label-sm">14:00 PM</span>
</div>
</div>
<img class="w-6 h-6 rounded-full border border-surface" data-alt="Portrait of a male professional in an office setting, clean lighting, minimalist background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0CmGS8utoGu330PX97pbjEcBxjX5sDLwC8Dtcp2giOkyvUggVzrarIXeiT9Pien_BNtlu46AYeZkGak-v9kkbZtk-HrFVwAa3ztmvTK3FdYswQnOhqw8_WwQRT5eUfY-H9oC412_SJMyjix3MG8cpZcIAd_Km1Fxevims3nWNbF_WSDMFun45DHjEXvkYJ2592dm0cOAiFOeFOi62YaRCrm2k8FXmi_Mdz1s66bhQRfuDWCUVCnobx0gdPFxr8igb_0Ti4arFIZ0"/>
</div>
</div>
</div>
</div>
<!-- Upcoming -->
<div>
<div class="flex items-center gap-2 mb-md">
<span class="w-2 h-2 bg-secondary rounded-full"></span>
<h4 class="text-label-md font-label-md text-on-surface-variant tracking-wider uppercase">Upcoming</h4>
</div>
<div class="grid grid-cols-1 xl:grid-cols-2 gap-md">
<!-- Task Card 3 -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-md task-card-shadow hover:border-outline transition-colors group opacity-80 hover:opacity-100">
<div class="flex items-start justify-between mb-sm">
<div class="flex items-center gap-3">
<input class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
<h5 class="text-body-md font-bold text-on-surface">Legacy Database Migration</h5>
</div>
<span class="px-2 py-1 rounded-full text-label-sm bg-error/10 text-error">High</span>
</div>
<p class="text-body-sm text-on-surface-variant mb-md ml-8 line-clamp-2">Move remaining tables from MySQL to PostgreSQL Cluster without downtime.</p>
<div class="flex items-center justify-between ml-8">
<div class="flex items-center gap-4">
<div class="flex items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]" data-icon="calendar_today">calendar_today</span>
<span class="text-label-sm">Tomorrow</span>
</div>
</div>
<div class="flex -space-x-1">
<div class="w-6 h-6 rounded-full bg-primary-container text-on-primary-container text-[10px] flex items-center justify-center font-bold">JD</div>
</div>
</div>
</div>
</div>
</div>
<!-- Waiting for Approval -->
<div>
<div class="flex items-center gap-2 mb-md">
<span class="w-2 h-2 bg-surface-tint rounded-full"></span>
<h4 class="text-label-md font-label-md text-on-surface-variant tracking-wider uppercase">Waiting for Approval</h4>
</div>
<div class="grid grid-cols-1 xl:grid-cols-2 gap-md">
<!-- Task Card 4 -->
<div class="bg-surface-container-low border border-outline-variant rounded-xl p-md border-dashed">
<div class="flex items-start justify-between mb-sm">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="hourglass_empty">hourglass_empty</span>
<h5 class="text-body-md font-bold text-on-surface">Design System V2 Props</h5>
</div>
<span class="px-2 py-1 rounded-full text-label-sm bg-surface-container-highest text-on-surface-variant">Pending</span>
</div>
<p class="text-body-sm text-on-surface-variant mb-md ml-8 line-clamp-2">Awaiting review from the Creative Director. Last updated 2 hours ago.</p>
<div class="flex items-center justify-end">
<button class="text-label-sm text-primary font-bold hover:underline">View Review Status</button>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
<!-- Right Sidebar -->
<aside class="w-80 bg-surface-container-low border-l border-outline-variant p-md overflow-y-auto hidden 2xl:block">
<h3 class="text-label-md font-label-md text-on-surface mb-lg">Upcoming Deadlines</h3>
<div class="space-y-lg">
<!-- Mini Calendar Lookalike -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
<div class="flex items-center justify-between mb-md">
<span class="text-body-sm font-bold">October 2023</span>
<div class="flex gap-1">
<button class="p-1 hover:bg-surface-container rounded"><span class="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span></button>
<button class="p-1 hover:bg-surface-container rounded"><span class="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span></button>
</div>
</div>
<div class="grid grid-cols-7 gap-1 text-center text-[10px] text-on-surface-variant mb-2">
<span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
</div>
<div class="grid grid-cols-7 gap-1 text-center text-body-sm">
<span class="p-1 opacity-20">26</span><span class="p-1 opacity-20">27</span><span class="p-1 opacity-20">28</span><span class="p-1 opacity-20">29</span><span class="p-1 opacity-20">30</span><span class="p-1">1</span><span class="p-1">2</span>
<span class="p-1">3</span><span class="p-1">4</span><span class="p-1">5</span><span class="p-1">6</span><span class="p-1">7</span><span class="p-1">8</span><span class="p-1">9</span>
<span class="p-1">10</span><span class="p-1">11</span><span class="p-1 bg-primary text-on-primary rounded-full">12</span><span class="p-1">13</span><span class="p-1">14</span><span class="p-1">15</span><span class="p-1">16</span>
</div>
</div>
<!-- Deadline List -->
<div class="space-y-md">
<div class="flex items-start gap-3">
<div class="bg-error/10 text-error p-2 rounded-lg">
<span class="material-symbols-outlined text-[20px]" data-icon="event_busy">event_busy</span>
</div>
<div>
<p class="text-body-sm font-bold">Security Audit</p>
<p class="text-label-sm text-error">Due in 2 days</p>
</div>
</div>
<div class="flex items-start gap-3">
<div class="bg-secondary-container/10 text-secondary p-2 rounded-lg">
<span class="material-symbols-outlined text-[20px]" data-icon="event">event</span>
</div>
<div>
<p class="text-body-sm font-bold">AWS Renewals</p>
<p class="text-label-sm text-on-surface-variant">Due in 5 days</p>
</div>
</div>
<div class="flex items-start gap-3">
<div class="bg-surface-container-highest p-2 rounded-lg">
<span class="material-symbols-outlined text-[20px]" data-icon="history">history</span>
</div>
<div>
<p class="text-body-sm font-bold">Quarterly Report</p>
<p class="text-label-sm text-on-surface-variant">Due in 14 days</p>
</div>
</div>
</div>
<!-- Activity Feed -->
<div class="pt-lg border-t border-outline-variant">
<h4 class="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest mb-md">Recent Activity</h4>
<div class="space-y-md relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant">
<div class="flex gap-4 relative">
<div class="w-6 h-6 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center z-10">
<span class="material-symbols-outlined text-[12px]" data-icon="check">check</span>
</div>
<p class="text-body-sm text-on-surface-variant"><span class="font-bold text-on-surface">You</span> completed <span class="text-primary">Landing Page Fix</span></p>
</div>
<div class="flex gap-4 relative">
<div class="w-6 h-6 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center z-10">
<span class="material-symbols-outlined text-[12px]" data-icon="add">add</span>
</div>
<p class="text-body-sm text-on-surface-variant"><span class="font-bold text-on-surface">Sarah</span> added a comment to <span class="text-primary">API Middleware</span></p>
</div>
</div>
</div>
</div>
</aside>
</main>
<!-- Floating Action Button (Contextual) -->
<button class="fixed bottom-lg right-lg bg-primary text-on-primary w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform 2xl:right-[340px]">
<span class="material-symbols-outlined text-[24px]" data-icon="add">add</span>
</button>
<script>
        // Simple micro-interaction for task completion
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const card = this.closest('.task-card-shadow');
                if (this.checked) {
                    card.style.opacity = '0.5';
                    card.style.textDecoration = 'line-through';
                } else {
                    card.style.opacity = '1';
                    card.style.textDecoration = 'none';
                }
            });
        });

        // Hover effects for task cards
        document.querySelectorAll('.task-card-shadow').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-2px)';
                card.style.transition = 'all 0.2s ease-out';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    </script>
</body></html>