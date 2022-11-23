const spinner =  ["\r| ", "\r/", "\r-", "\r\\", "\r/", "\r-", "\r\\", "\r|"]

let hold = 0
for (const turn of spinner){
setTimeout(() => { 
  process.stdout.write(turn)}, hold += 200)
}
