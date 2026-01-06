fn main() {
    println!("Fibonacci Sequence:");
    
    let n = std::env::args()
        .nth(1) 
        .and_then(|arg| arg.parse::<u32>().ok()) 
        .unwrap_or(10);

        const MAX_N: u32 = 186;
        if n > MAX_N {
            eprintln!("Error: is too large. Please enter a value less than or equal to {}.", MAX_N);
            return;
        }
    
    println!("Fibonacci({}) = {}", n, fibonacci(n));
}

// fn fibonacci(n: u32) -> u32 {
//     if n <= 1 {
//         return n;
//     }
//     fibonacci(n - 1) + fibonacci(n - 2)
// }

fn fibonacci(n: u32) -> u128 {
    let mut a: u128 = 0;
    let mut b: u128 = 1;
    for _ in 0..n {
        let value = a + b;
        a = b;
        b = value;
    }
    a
}