let sehirler = ["Ankara","İstanbul","İzmir"]

for(let i in sehirler){
    console.log(i)     // 0 1 2
}

for(let i of sehirler){
    console.log(i)      // Ankara İstanbul İzmir
}