import React from 'react'
import { CreateTaskForm } from '../tasks/CreateTaskForm'
import { Profile } from '../../types/profile';
import { TaskCard } from '../tasks/TaskCard';
import { TaskList } from '../tasks/TaskList';

export const BossDashboard = ({ employees, task }: { employees: Profile[], task: any[] }) => {
  return (
    <div className='p-[2%] w-[80%]'>
      <TaskList task={task} />
      {/* <CreateTaskForm employees={employees} task={task} /> */}
    </div>
  )
}
