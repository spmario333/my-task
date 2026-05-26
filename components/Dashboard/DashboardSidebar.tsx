import React from 'react'

export const DashboardSidebar = () => {
    return (
            <aside className="fixed left-0 top-0 h-screen w-65 bg-surface border-r border-outline-variant flex flex-col p-md overflow-y-auto z-50">
                <div className="flex items-center gap-3 mb-xl px-2">
                    <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-on-primary">
                        <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    </div>
                    <div>
                        <h1 className="text-headline-md font-headline-md font-bold text-primary">TaskStream</h1>
                        <p className="text-label-sm text-on-surface-variant">Enterprise Hub</p>
                    </div>
                </div>
                <nav className="flex-1 space-y-1">
                    <a className="flex items-center gap-3 px-4 py-3 text-primary bg-secondary-fixed rounded-lg font-bold transition-transform duration-150 active:scale-[0.98]" href="#">
                        <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                        <span>Overview</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="#">
                        <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
                        <span>Tasks</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="#">
                        <span className="material-symbols-outlined" data-icon="group">group</span>
                        <span>Team</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="#">
                        <span className="material-symbols-outlined" data-icon="settings">settings</span>
                        <span>Settings</span>
                    </a>
                </nav>
                <div className="mt-auto pt-md border-t border-outline-variant">
                    <button className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">
                        <span className="material-symbols-outlined" data-icon="add">add</span>
                        New Project
                    </button>
                </div>
            </aside>
    )
}
