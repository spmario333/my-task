export type Role=
 | "ADMIN"
 | "BOSS"
 | "EMPLOYEE"

export type Profile={

 id:string

 email:string

 role:Role

 boss_id:string | null

 created_at:string

}