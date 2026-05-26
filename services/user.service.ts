export async function getSubordinates(
 supabase:any,
 bossId:string
){

 return await supabase
   .from("profiles")
   .select("*")
   .eq("boss_id",bossId)

}