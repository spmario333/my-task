export async function getProfile(
    supabase,
    userId
) {
    return await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single()
}