export function formatViews(num: number): string {
    return num > 999 ? `${(num / 1000).toFixed(1)}K` : num.toString()
}
