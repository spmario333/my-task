

export async function getProfile(
    supabase:any,
    userId : string
) {
    return await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single()
}