export type TaskStatus =
 | "PENDING"
 | "EMPLOYEE_DONE"
 | "ARCHIVED"

 export interface Task {
 id:string
 title:string
 description:string
 status:TaskStatus
 priority:string
 assigned_to:string
 created_by:string
 due_date:string
}