export function getRemainingDays(
 dueDate:string
){

 return Math.ceil(
  (
   new Date(dueDate).getTime()
   -
   Date.now()
  ) / 86400000
 )

}