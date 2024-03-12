export function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) % 100000000; // Ensure it's an 8-digit positive integer
  }

export function fetchName(hash: number): string{
    hash = hash
    return("Will Osprey")
}
export function fetchPlane(hash:number): string{
    hash = hash % 1000;
    return(`SIN${hash}`)
}
export function fetchStatus(hash:number): number{
    hash = hash % 6;
    return(hash)
}