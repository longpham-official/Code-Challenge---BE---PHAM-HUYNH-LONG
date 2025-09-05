const sum_to_n_a = (n: number) => {
    // Time Complexity: O(1) — one multiplication, one addition, one division.
    // Space Complexity: O(1) — no extra memory needed.
    return (n * (n + 1)) / 2;
}

const sum_to_n_b = (n: number) => {
    // Time Complexity: O(1) — the array has exactly 2 elements, so .reduce runs twice.
    // Space Complexity: O(1) — only a tiny array of 2 elements.
    return [n, n + 1].reduce((a, b) => a * b) / 2;
    
}

const sum_to_n_c = (n: number) => {
    // Time Complexity: O(1) — just destructures into two variables.
    // Space Complexity: O(1) — two extra variables, no real overhead.
	const [a, b] = [n, n + 1];
    return (a * b) / 2;
}