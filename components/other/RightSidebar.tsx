import { ArchiveX, ChevronsDown, ChevronsUp, ChevronsUpDown } from 'lucide-react'
import React from 'react'

export const RightSidebar = () => {
  return (
    <aside className="w-80 bg-surface-container-low border-l border-outline-variant p-md overflow-y-auto hidden 2xl:block">
            <h3 className="text-label-md font-label-md text-on-surface mb-lg">Upcoming Deadlines</h3>
            <div className="space-y-lg">
             
              {/* <!-- Deadline List --> */}
              <div className="space-y-md">
                <div className="flex items-start gap-3">
                  <div className="bg-error/10 text-error p-2 rounded-lg">
                    <ChevronsUp className="material-symbols-outlined text-[20px]" data-icon="event_busy"/>
                  </div>
                  <div>
                    <p className="text-body-sm font-bold">High</p>
                    <p className="text-label-sm text-error">Due in 2 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-secondary-container/10 text-secondary p-2 rounded-lg">
                    <ChevronsUpDown className="material-symbols-outlined text-[20px]" data-icon="event"/>
                  </div>
                  <div>
                    <p className="text-body-sm font-bold">Medium</p>
                    <p className="text-label-sm text-on-surface-variant">Due in 5 days</p>
                  </div>
                </div>
                 <div className="flex items-start gap-3">
                  <div className="bg-secondary-container/10 text-emerald-600 p-2 rounded-lg">
                    <ChevronsDown className="material-symbols-outlined text-[20px]" data-icon="event"/>
                  </div>
                  <div>
                    <p className="text-body-sm font-bold">Low</p>
                    <p className="text-label-sm text-on-surface-variant">Due in 5 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-surface-container-highest p-2 rounded-lg">
                    <ArchiveX className="material-symbols-outlined text-[20px]" data-icon="history"/>
                  </div>
                  <div>
                    <p className="text-body-sm font-bold">Archived</p>
                    <p className="text-label-sm text-on-surface-variant">Due in 14 days</p>
                  </div>
                </div>
              </div>
              {/* <!-- Activity Feed --> */}
              <div className="pt-lg border-t border-outline-variant">
                <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest mb-md">Recent Activity</h4>
                <div className="space-y-md relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant">
                  <div className="flex gap-4 relative">
                    <div className="w-6 h-6 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center z-10">
                      <span className="material-symbols-outlined text-[12px]" data-icon="check">check</span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant"><span className="font-bold text-on-surface">You</span> completed <span className="text-primary">Landing Page Fix</span></p>
                  </div>
                  <div className="flex gap-4 relative">
                    <div className="w-6 h-6 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center z-10">
                      <span className="material-symbols-outlined text-[12px]" data-icon="add">add</span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant"><span className="font-bold text-on-surface">Sarah</span> added a comment to <span className="text-primary">API Middleware</span></p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
  )
}
