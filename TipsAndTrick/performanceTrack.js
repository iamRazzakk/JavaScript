const startTime = performance.now()

for (let i = 0; i < 50; i++) {
console.log(i)    
}


const endTime = performance.now()

const result = `It's take ${endTime - startTime}`
console.log(result)