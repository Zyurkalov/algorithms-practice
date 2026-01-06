# algorithms-practice — практикуем алгоритмы

### Проект разделен на три раздела, в каждом свои примеры кода:

- algoritms
- codewars
- leetcode

### Установка / запуск JS:

- Для развертывания проекта:
  - склонировать репозитории `git clone git@github.com:Zyurkalov/algorithms-practice.git`
  - установить зависимости `npm i`
  - для запуска любого кода используйте node.js. Напрмиер:

```
node algoritms/palindrome.js 'Was it a car, or a cat I saw?!'
```

### Установка / запуск Rust:

- Установить Rust через rustup (если еще не установлен):
- Перейдите в нужную директорию с Rust (папки с суффиксом `_rs`) и используйте Cargo:

```bash
cd algoritms/fibonaccy_rs
cargo run
cargo run -- 15        # запустить с аргументами
```

#### Структура Rust-решений:

Каждая задача на Rust находится в отдельной папке рядом с JS-версией:

```
algoritms/
  palindrome.js          # JavaScript решение
  palindrome_rs/         # Rust решение
    Cargo.toml
    src/main.rs
  fibonaccy_rs/
    Cargo.toml
    src/main.rs
```
