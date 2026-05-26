import React from 'react'
import { CreateTaskForm } from '../tasks/CreateTaskForm'
import { Profile } from '../../types/profile';

export const BossDashboard = ({ employees, task }: { employees: Profile[], task: any[] }) => {
  return (
    <div>
      <CreateTaskForm employees={employees} task={task} />
    </div>
  )
}
